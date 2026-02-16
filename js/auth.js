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

    // Honeypot check: если заполнено скрытое поле — это бот
    var hp = document.getElementById('authWebsite');
    if (hp && hp.value) {
        // Тихо "успешно" — бот думает что прошёл
        errEl.textContent = t('fillAllFields');
        return;
    }

    if (!email || !password) { errEl.textContent = t('fillAllFields'); return }
    if (password.length < 8) { errEl.textContent = t('passwordMin8'); return }
    if (!PASSWORD_RE.test(password)) { errEl.textContent = t('invalidPasswordChars'); return }

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
            var name = document.getElementById('authName').value.trim();
            if (!name) { errEl.textContent = t('enterName'); btn.disabled = false; hideLoading(); return }
            if (name.length > 16) { errEl.textContent = t('nameMax16'); btn.disabled = false; hideLoading(); return }
            if (!NAME_RE.test(name)) { errEl.textContent = t('nameOnlyLetters'); btn.disabled = false; hideLoading(); return }

            var res = await sb.auth.signUp({ email: email, password: password, options: { data: { name: name } } });
            if (res.error) { errEl.textContent = res.error.message; btn.disabled = false; hideLoading(); return }

            if (res.data && res.data.user) {
                authUid = res.data.user.id;
                cachedToken = res.data.session ? res.data.session.access_token : null;
                clearCache();
                var userId = await createProfile(authUid, name);
                profile.name = name;
                profile.username = null;
                profile.bio = '';
                profile.user_id = userId;
                profile.avatar_url = null;
                profile.banner_url = null;
                profile.emoji_url = null;
                profile.emojiData = null;
                profile.emoji2_url = null;
                profile.emoji2Data = null;
                hasUsername = false;
                updateCache(profile);
                applyProfile();
                await Promise.all([loadChats(), minLoad]);
                setupRealtime();
                hideAuth();
                hideLoading();
            }
        } else {
            var res = await sb.auth.signInWithPassword({ email: email, password: password });
            if (res.error) { errEl.textContent = res.error.message; btn.disabled = false; hideLoading(); return }

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
    var userId = generateUserId();
    var exists = true;
    while (exists) {
        var check = await sb.from('profiles').select('id').eq('user_id', userId).maybeSingle();
        if (!check.data) exists = false;
        else userId = generateUserId();
    }
    await sb.from('profiles').upsert({
        id: uid, user_id: userId, name: name, username: null,
        bio: '', online: true, last_seen: new Date().toISOString(), language: currentLang
    }, { onConflict: 'id' });
    return userId;
}

async function ensureProfile(uid) {
    var res = await sb.from('profiles').select('id').eq('id', uid).maybeSingle();
    if (!res.data) await createProfile(uid, 'User');
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
