// ==================== AUTH ====================

function toggleAuthMode() {
    isRegister = !isRegister;
    document.getElementById('authName').style.display = isRegister ? '' : 'none';
    document.getElementById('authError').textContent = '';
    // Показать/скрыть honeypot
    updateAuthTexts();
}

async function handleAuth() {
    var email = document.getElementById('authEmail').value.trim();
    var password = document.getElementById('authPassword').value;
    var errEl = document.getElementById('authError');
    errEl.textContent = '';

    // Honeypot check
    var hp = document.getElementById('authWebsite');
    if (hp && hp.value) {
        errEl.textContent = t('fillAllFields');
        return;
    }

    if (!email || !password) { errEl.textContent = t('fillAllFields'); return }
    if (password.length < 6) { errEl.textContent = t('passwordMin8'); return } // Supabase min is 6

    var btn = document.getElementById('authBtn');
    btn.disabled = true;

    // Anti-bot проверка
    errEl.textContent = t('botCheck');
    var botResult = await AntiBot.verify();
    if (!botResult.passed) {
        errEl.textContent = t('botFailed');
        btn.disabled = false;
        return;
    }

    showLoading();
    var minLoad = new Promise(r => setTimeout(r, 1000));

    try {
        if (isRegister) {
            // REGISTRATION
            var name = document.getElementById('authName').value.trim();
            if (!name) { errEl.textContent = t('enterName'); btn.disabled = false; hideLoading(); return }

            var res = await sb.auth.signUp({ email: email, password: password, options: { data: { name: name } } });

            if (res.error) {
                // Обработка частых ошибок регистрации
                if (res.error.message.includes('rate limit')) errEl.textContent = 'Too many requests. Try again later.';
                else errEl.textContent = res.error.message;
                btn.disabled = false; hideLoading();
                return;
            }

            if (res.data && res.data.user) {
                // Если сессии нет, значит включено подтверждение почты
                if (!res.data.session) {
                    errEl.textContent = 'Registration successful! Please check your email to confirm account.';
                    errEl.style.color = '#4ade80';
                    btn.disabled = false;
                    hideLoading();
                    return;
                }

                // Всё ок, входим
                authUid = res.data.user.id;
                cachedToken = res.data.session.access_token;
                clearCache();

                // Создаем профиль
                await createProfile(authUid, name);

                profile.name = name;
                updateCache(profile);
                applyProfile();

                await Promise.all([loadChats(), minLoad]);
                setupRealtime();
                hideAuth();
                hideLoading();
            }
        } else {
            // LOGIN
            var res = await sb.auth.signInWithPassword({ email: email, password: password });

            if (res.error) {
                if (res.error.message.includes('Invalid login credentials')) errEl.textContent = 'Invalid email or password.';
                else if (res.error.message.includes('Email not confirmed')) errEl.textContent = 'Email not confirmed. Check your inbox.';
                else errEl.textContent = res.error.message;
                btn.disabled = false;
                hideLoading();
                return;
            }

            if (res.data && res.data.user) {
                authUid = res.data.user.id;
                cachedToken = res.data.session ? res.data.session.access_token : null;

                loadCache();
                applyCacheToProfile();
                loadCachedChats();

                await ensureProfile(authUid);
                await Promise.all([loadProfile(), loadChats(), minLoad]);

                setupRealtime();
                hideAuth();
                hideLoading();
            }
        }
    } catch (e) {
        errEl.textContent = e.message;
        btn.disabled = false;
        hideLoading();
    }
}

async function createProfile(uid, name) {
    if (!uid) return;
    var userId = generateUserId();
    var exists = true;
    while (exists) {
        var check = await sb.from('profiles').select('id').eq('user_id', userId).maybeSingle();
        if (!check.data) exists = false;
        else userId = generateUserId();
    }
    // Попытка создания
    await sb.from('profiles').upsert({
        id: uid, user_id: userId, name: name || 'User', username: null,
        bio: '', online: true, last_seen: new Date().toISOString(), language: currentLang
    }, { onConflict: 'id' });
    return userId;
}

async function ensureProfile(uid) {
    if (!uid) return;
    var res = await sb.from('profiles').select('id,name').eq('id', uid).maybeSingle();
    // Если профиля нет (старый юзер?), создаем
    if (!res.data) {
        await createProfile(uid, 'User');
    }
}

function logout() {
    setOnlineStatus(false, true);
    destroyAllChannels();
    destroyAllListEmojis();
    AntiBot.reset();
    authUid = null;
    cachedToken = null;
    profile = { name: 'Username', username: null, bio: '', user_id: null, avatar_url: null, banner_url: null, emoji_url: null, emojiData: null, emoji2_url: null, emoji2Data: null };
    chats = [];
    cur = null;
    curChatId = null;
    curChatTarget = null;
    hasUsername = false;
    chatIdsSet.clear();
    lastOnlineStatus = null;
    reconnectAttempts = 0;
    viewingUserId = null;
    emojiCache = {};
    if (reconnectTimer) { clearTimeout(reconnectTimer); reconnectTimer = null }
    if (onlineThrottleTimer) { clearTimeout(onlineThrottleTimer); onlineThrottleTimer = null }
    clearCache();
    applyProfile();
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('searchResults').innerHTML = '';
    document.getElementById('chatList').innerHTML = '';
    document.getElementById('authEmail').value = '';
    document.getElementById('authPassword').value = '';
    document.getElementById('authName').value = '';
    document.getElementById('authError').textContent = '';
    isRegister = false;
    document.getElementById('authBtn').disabled = false;
    document.getElementById('authName').style.display = 'none';
    updateAuthTexts();
    destroyLottie('profile');
    destroyLottie('profile2');
    destroyLottie('edit');
    destroyLottie('preview');
    destroyLottie('up');
    destroyLottie('up2');
    destroyLottie('chatHeader');
    closeUserProfile();
    closeChat();
    showAuth();
    go('chats');
    sb.auth.signOut();
}
