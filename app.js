        // ==================== i18n SYSTEM ====================
        var translations = {
            ru: {
                // Auth
                loginTitle: 'Вход',
                registerTitle: 'Регистрация',
                loginSubtitle: 'Войдите в свой аккаунт',
                registerSubtitle: 'Создайте аккаунт',
                loginBtn: 'Войти',
                registerBtn: 'Создать аккаунт',
                noAccount: 'Нет аккаунта? <b>Создать</b>',
                hasAccount: 'Уже есть аккаунт? <b>Войти</b>',
                namePlaceholder: 'Имя',
                passwordPlaceholder: 'Пароль',
                fillAllFields: 'Заполните все поля',
                passwordMin8: 'Пароль минимум 8 символов',
                invalidPasswordChars: 'Недопустимые символы в пароле',
                enterName: 'Введите имя',
                nameMax16: 'Имя максимум 16 символов',
                nameOnlyLetters: 'Имя: только буквы и пробелы',

                // Tabs
                chats: 'Чаты',
                settings: 'Настройки',
                profileTab: 'Профиль',

                // Settings
                notifications: 'Уведомления',
                privacy: 'Конфиденциальность',
                language: 'Язык',
                logout: 'Выйти',
                langRussian: 'Русский',
                langEnglish: 'English',

                // Profile
                online: 'В сети',
                aboutMe: 'О себе',
                username: 'Имя пользователя',
                loading: 'Загрузка',
                accountVerified: 'Аккаунт официально подтверждён',
                accountStatus: 'Статус аккаунта',
                writeMessage: 'Написать',

                msgSending: 'Сообщение ещё отправляется',
                msgDeleted: 'Сообщение не найдено или удалено',

                // Edit profile
                cancel: 'Отмена',
                edit: 'Редактировать',
                save: 'Сохранить',
                avatar: 'Аватар',
                bannerLabel: 'Баннер',
                clickToUpload: 'Нажмите для загрузки',
                nameLabel: 'Имя',
                yourName: 'Ваше имя',
                tellAboutYourself: 'Расскажите о себе...',
                animatedEmoji: 'Анимированный эмодзи',
                uploadTgsJson: 'Загрузить TGS / JSON',
                emojiLoaded: 'Эмодзи загружен',
                currentEmoji: 'Текущий эмодзи',
                delete: 'Удалить',
                change: 'Изменить',
                enterNameErr: 'Введите имя',
                max16: 'Максимум 16 символов',
                onlyLettersSpaces: 'Только буквы и пробелы',
                min5: 'Минимум 5 символов',
                max20: 'Максимум 20 символов',
                cantStartDigit: 'Не может начинаться с цифры',
                onlyAzDigits: 'Только a-z, 0-9. Начинается с буквы',
                cantDeleteUsername: 'Нельзя удалить, только изменить',
                max40: 'Максимум 40 символов',
                usernameTaken: 'Это имя уже занято',
                errorPrefix: 'Ошибка: ',

                // Chat
                searchByUsername: 'Поиск по юзернейму',
                noMessages: 'Нет сообщений',
                writeFirstMessage: 'Напишите первое сообщение',
                noChats: 'Нет чатов',
                findUserByUsername: 'Найдите пользователя<br>через поиск по юзернейму',
                noChatsMsg: 'Нет сообщений',
                messagePlaceholder: 'Сообщение...',
                nothingFound: 'Ничего не найдено',
                user: 'Пользователь',

                // Time ago
                wasJustNow: 'был(а) только что',
                wasRecently: 'был(а) недавно',
                wasMinAgo: 'был(а) {n} мин. назад',
                was1MinAgo: 'был(а) 1 мин. назад',
                was1HrAgo: 'был(а) 1 ч. назад',
                wasHrsAgo: 'был(а) {n} ч. назад',
                was1DayAgo: 'был(а) 1 д. назад',
                wasDaysAgo: 'был(а) {n} дн. назад',
                was1WeekAgo: 'был(а) 1 нед. назад',
                wasWeeksAgo: 'был(а) {n} нед. назад',
                wasLongAgo: 'был(а) давно',
                inOnline: 'в сети',

                // Verify
                close: 'Закрыть',
                howToGet: 'Как получить',
                request: 'Заявка',
                send: 'Отправить',
                verifyDescription: 'Опишите, почему ваш аккаунт должен быть официально подтверждён. Укажите ссылки на ваши ресурсы или причины вашей популярности/значимости.',
                reasonPlaceholder: 'Причина...',
                verifiedAccount: '{name} — подтверждённый аккаунт',
                sending: 'Отправка...',

                // Notifications
                noRequests: 'Нет заявок',
                noNotifications: 'Нет уведомлений',
                requestFrom: 'Заявка от {name}',
                accept: 'Принять',
                reject: 'Отклонить',
                rejectReason: 'Причина отказа',
                specifyRejectReason: 'Укажите причину отказа...',
                verification: 'Верификация',
                verifyApproved: 'Ваша заявка на верификацию одобрена!',
                verifyRejected: 'Заявка отклонена. Причина: {reason}',

                // Toasts
                thisIsYou: 'Это ваш профиль',
                noSuchAccount: 'Нет аккаунта с таким именем',
                msgNotFound: 'Сообщение не найдено',

                // Files
                fileCorrupted: 'Файл повреждён',
                formatNotRecognized: 'Формат не распознан',
                invalidData: 'Некорректные данные',
                notLottie: 'Не Lottie-анимация',
                noLayers: 'Нет слоёв анимации',
                gifNotSupported: 'GIF не поддерживается',

                // Quote
                quote: 'Цитата',

                // Language
                langChanged: 'Язык изменён'
            },
            en: {
                loginTitle: 'Login',
                registerTitle: 'Registration',
                loginSubtitle: 'Sign in to your account',
                registerSubtitle: 'Create an account',
                loginBtn: 'Sign In',
                registerBtn: 'Create Account',
                noAccount: 'No account? <b>Create</b>',
                hasAccount: 'Already have an account? <b>Sign In</b>',
                namePlaceholder: 'Name',
                passwordPlaceholder: 'Password',
                fillAllFields: 'Fill in all fields',
                passwordMin8: 'Password must be at least 8 characters',
                invalidPasswordChars: 'Invalid characters in password',
                enterName: 'Enter your name',
                nameMax16: 'Name max 16 characters',
                nameOnlyLetters: 'Name: only letters and spaces',

                chats: 'Chats',
                settings: 'Settings',
                profileTab: 'Profile',

                notifications: 'Notifications',
                privacy: 'Privacy',
                language: 'Language',
                logout: 'Log Out',
                langRussian: 'Русский',
                langEnglish: 'English',

                online: 'Online',
                aboutMe: 'About',
                username: 'Username',
                loading: 'Loading',
                accountVerified: 'Account is officially verified',
                accountStatus: 'Account status',
                writeMessage: 'Message',

                msgSending: 'Message is still sending',
                msgDeleted: 'Message not found or deleted',

                cancel: 'Cancel',
                edit: 'Edit',
                save: 'Save',
                avatar: 'Avatar',
                bannerLabel: 'Banner',
                clickToUpload: 'Click to upload',
                nameLabel: 'Name',
                yourName: 'Your name',
                tellAboutYourself: 'Tell about yourself...',
                animatedEmoji: 'Animated emoji',
                uploadTgsJson: 'Upload TGS / JSON',
                emojiLoaded: 'Emoji loaded',
                currentEmoji: 'Current emoji',
                delete: 'Delete',
                change: 'Change',
                enterNameErr: 'Enter name',
                max16: 'Max 16 characters',
                onlyLettersSpaces: 'Only letters and spaces',
                min5: 'Min 5 characters',
                max20: 'Max 20 characters',
                cantStartDigit: 'Cannot start with a digit',
                onlyAzDigits: 'Only a-z, 0-9. Must start with letter',
                cantDeleteUsername: 'Cannot delete, only change',
                max40: 'Max 40 characters',
                usernameTaken: 'This username is taken',
                errorPrefix: 'Error: ',

                searchByUsername: 'Search by username',
                noMessages: 'No messages',
                writeFirstMessage: 'Write the first message',
                noChats: 'No chats',
                findUserByUsername: 'Find a user<br>by searching username',
                noChatsMsg: 'No messages',
                messagePlaceholder: 'Message...',
                nothingFound: 'Nothing found',
                user: 'User',

                wasJustNow: 'just now',
                wasRecently: 'recently',
                wasMinAgo: '{n} min ago',
                was1MinAgo: '1 min ago',
                was1HrAgo: '1 hr ago',
                wasHrsAgo: '{n} hrs ago',
                was1DayAgo: '1 day ago',
                wasDaysAgo: '{n} days ago',
                was1WeekAgo: '1 week ago',
                wasWeeksAgo: '{n} weeks ago',
                wasLongAgo: 'long ago',
                inOnline: 'online',

                close: 'Close',
                howToGet: 'How to get',
                request: 'Request',
                send: 'Send',
                verifyDescription: 'Describe why your account should be officially verified. Provide links to your resources or reasons for your popularity/significance.',
                reasonPlaceholder: 'Reason...',
                verifiedAccount: '{name} — verified account',
                sending: 'Sending...',

                noRequests: 'No requests',
                noNotifications: 'No notifications',
                requestFrom: 'Request from {name}',
                accept: 'Accept',
                reject: 'Reject',
                rejectReason: 'Rejection reason',
                specifyRejectReason: 'Specify the reason for rejection...',
                verification: 'Verification',
                verifyApproved: 'Your verification request has been approved!',
                verifyRejected: 'Request rejected. Reason: {reason}',

                thisIsYou: 'This is your profile',
                noSuchAccount: 'No account with this username',
                msgNotFound: 'Message not found',

                fileCorrupted: 'File corrupted',
                formatNotRecognized: 'Format not recognized',
                invalidData: 'Invalid data',
                notLottie: 'Not a Lottie animation',
                noLayers: 'No animation layers',
                gifNotSupported: 'GIF is not supported',

                quote: 'Quote',

                langChanged: 'Language changed'
            }
        };

        var currentLang = 'ru';

        function t(key, params) {
            var str = (translations[currentLang] && translations[currentLang][key]) || (translations.ru && translations.ru[key]) || key;
            if (params) {
                Object.keys(params).forEach(function (k) {
                    str = str.replace('{' + k + '}', params[k]);
                });
            }
            return str;
        }

        function applyI18n() {
            // data-i18n for textContent
            document.querySelectorAll('[data-i18n]').forEach(function (el) {
                el.textContent = t(el.getAttribute('data-i18n'));
            });
            // data-i18n-placeholder for placeholder
            document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
                el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
            });
            // Update lang subtitle
            var sub = document.getElementById('langSubtitle');
            if (sub) sub.textContent = currentLang === 'ru' ? 'Русский' : 'English';
            // Update auth form
            updateAuthTexts();
            // Update HTML lang
            document.documentElement.lang = currentLang;
        }

        function updateAuthTexts() {
            document.getElementById('authTitle').textContent = isRegister ? t('registerTitle') : t('loginTitle');
            document.getElementById('authSubtitle').textContent = isRegister ? t('registerSubtitle') : t('loginSubtitle');
            document.getElementById('authBtn').textContent = isRegister ? t('registerBtn') : t('loginBtn');
            document.getElementById('authSwitch').innerHTML = isRegister ? t('hasAccount') : t('noAccount');
            document.getElementById('authName').placeholder = t('namePlaceholder');
            document.getElementById('authPassword').placeholder = t('passwordPlaceholder');
        }

        function loadLang() {
            var saved = localStorage.getItem('app_lang');
            if (saved && translations[saved]) {
                currentLang = saved;
            } else {
                currentLang = 'ru';
            }
        }

        function saveLang(lang) {
            currentLang = lang;
            localStorage.setItem('app_lang', lang);
            // Also save to Supabase if logged in
            if (authUid) {
                sb.from('profiles').update({ language: lang }).eq('id', myUid()).then(function () { });
            }
        }

        async function loadLangFromServer() {
            if (!authUid) return;
            try {
                var res = await sb.from('profiles').select('language').eq('id', myUid()).single();
                if (res.data && res.data.language && translations[res.data.language]) {
                    currentLang = res.data.language;
                    localStorage.setItem('app_lang', currentLang);
                    applyI18n();
                }
            } catch (e) { }
        }

        function openLangModal() {
            renderLangList();
            document.getElementById('langModal').classList.add('open');
        }

        function closeLangModal() {
            document.getElementById('langModal').classList.remove('open');
        }

        function renderLangList() {
            var langs = [
                { code: 'ru', flag: '🇷🇺', name: 'Русский' },
                { code: 'en', flag: '🇬🇧', name: 'English' }
            ];
            var html = langs.map(function (l) {
                var sel = l.code === currentLang ? ' selected' : '';
                return '<div class="lang-option' + sel + '" onclick="selectLang(\'' + l.code + '\')">' +
                    '<span class="lang-flag">' + l.flag + '</span>' +
                    '<span class="lang-name">' + l.name + '</span>' +
                    '<div class="lang-check">' + (l.code === currentLang ? '<svg width="10" height="10" fill="none" stroke="#fff" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>' : '') + '</div>' +
                    '</div>';
            }).join('');
            document.getElementById('langList').innerHTML = html;
        }

        function selectLang(lang) {
            if (lang === currentLang) { closeLangModal(); return; }
            saveLang(lang);
            applyI18n();
            renderLangList();
            renderChatList();
            // Re-apply profile texts
            applyProfile();
            renderProfileEmoji();
            showToast(t('langChanged'));
            setTimeout(closeLangModal, 300);
        }

        // ==================== END i18n ====================

        var SUPABASE_URL = 'https://xdexkgyxkkgqqjviwefe.supabase.co';
        var SUPABASE_KEY = 'sb_publishable_iFlrQuNOcTw9sfxkDHh0IQ_xkQAOmo9';
        var sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY, { realtime: { params: { eventsPerSecond: 30 }, heartbeatIntervalMs: 15000, timeout: 25000 }, global: { headers: { 'X-Client-Info': 'messenger-app' } }, db: { schema: 'public' }, auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false } });
        var EMOJI2_OWNER_ID = '95337179';
        var NAME_RE = /^[\p{L}]+(?: [\p{L}]+)*$/u;
        var USERNAME_RE = /^[a-z][a-z0-9]*$/;
        var PASSWORD_RE = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~ ]+$/;
        var SVG_CHECK_ONE = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 8.5l3 3 5-6"/></svg>';
        var SVG_CHECK_TWO = '<svg viewBox="0 0 20 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 8.5l3 3 5-6"/><path d="M7 8.5l3 3 5-6"/></svg>';
        var cache = { profile: null, avatarUrl: null, bannerUrl: null, emojiUrl: null, emojiData: null, emoji2Url: null, emoji2Data: null, chats: null };
        var profile = { name: 'Username', username: null, bio: '', user_id: null, avatar_url: null, banner_url: null, emoji_url: null, emojiData: null, emoji2_url: null, emoji2Data: null };
        var authUid = null; var chats = []; var cur = null; var curChatId = null; var curChatTarget = null;
        var tempAvaFile = null; var tempBannerFile = null; var tempEmojiData = null; var tempEmojiFile = null;
        var profileEmojiAnim = null; var profileEmoji2Anim = null; var editEmojiAnim = null;
        var emojiPreviewAnim = null; var upEmojiAnim = null; var upEmoji2Anim = null;
        var chatHeaderEmojiAnim = null;
        var isRegister = false; var chatChannels = {}; var profileChannels = {}; var globalChannel = null;
        var hasUsername = false; var chatIdsSet = new Set(); var pendingSend = false;
        var rtConnected = false; var visibilityBound = false; var beforeUnloadBound = false;
        var lastOnlineStatus = null; var onlineThrottleTimer = null;
        var reconnectAttempts = 0; var reconnectTimer = null; var MAX_RECONNECT_DELAY = 60000;
        var searchTimer = null; var viewingUserId = null; var cachedToken = null;
        var emojiCache = {}; var chatListEmojiAnims = []; var searchEmojiAnims = [];
        var _upEmojiData = null; var _upEmoji2Data = null; var _upEmojiOwner = '';
        var currentReply = null;
        var idbParams = { name: 'emoji_store', version: 1 };
        var dbPromise = null;

        function openDB() {
            if (dbPromise) return dbPromise;
            dbPromise = new Promise(function (resolve, reject) {
                var req = indexedDB.open(idbParams.name, idbParams.version);
                req.onupgradeneeded = function (e) {
                    var db = e.target.result;
                    if (!db.objectStoreNames.contains('emojis')) {
                        db.createObjectStore('emojis');
                    }
                };
                req.onsuccess = function (e) { resolve(e.target.result); };
                req.onerror = function (e) { reject(e); };
            });
            return dbPromise;
        }
        async function getEmojiFromDB(url) {
            try {
                var db = await openDB();
                return new Promise(function (resolve) {
                    var tx = db.transaction('emojis', 'readonly');
                    var store = tx.objectStore('emojis');
                    var req = store.get(url);
                    req.onsuccess = function () { resolve(req.result); };
                    req.onerror = function () { resolve(null); };
                });
            } catch (e) { return null; }
        }
        async function saveEmojiToDB(url, data) {
            try {
                var db = await openDB();
                var tx = db.transaction('emojis', 'readwrite');
                var store = tx.objectStore('emojis');
                store.put(data, url);
            } catch (e) { }
        }

        function myUid() { return String(authUid || '') }
        function timeAgo(d) {
            if (!d) return t('wasRecently');
            var n = Date.now(), ti = new Date(d).getTime(), df = Math.max(0, n - ti), m = Math.floor(df / 60000);
            if (m < 1) return t('wasJustNow');
            if (m === 1) return t('was1MinAgo');
            if (m < 60) return t('wasMinAgo', { n: m });
            var h = Math.floor(m / 60);
            if (h === 1) return t('was1HrAgo');
            if (h < 24) return t('wasHrsAgo', { n: h });
            var dy = Math.floor(h / 24);
            if (dy === 1) return t('was1DayAgo');
            if (dy < 7) return t('wasDaysAgo', { n: dy });
            var w = Math.floor(dy / 7);
            if (w === 1) return t('was1WeekAgo');
            if (w <= 4) return t('wasWeeksAgo', { n: w });
            return t('wasLongAgo');
        }
        function getBackoffDelay() { return Math.min(1000 * Math.pow(2, reconnectAttempts), MAX_RECONNECT_DELAY) + Math.random() * 1000 }
        function setConnStatus(s) { document.getElementById('connStatus').className = 'conn-status ' + s; rtConnected = s === 'connected' }
        function showLoading() { document.getElementById('loadingScreen').classList.remove('hidden') }
        function hideLoading() { document.getElementById('loadingScreen').classList.add('hidden') }
        function showAuth() { document.getElementById('authScreen').classList.remove('hidden') }
        function hideAuth() { document.getElementById('authScreen').classList.add('hidden') }
        function generateUserId() { var id = ''; for (var i = 0; i < 8; i++)id += Math.floor(Math.random() * 10); return id }
        function saveCache() { try { localStorage.setItem('mc', JSON.stringify(cache)) } catch (e) { } }
        function loadCache() { try { var d = localStorage.getItem('mc'); if (d) cache = JSON.parse(d) } catch (e) { } }
        function updateCache(p) { cache.profile = { name: p.name, username: p.username, bio: p.bio, user_id: p.user_id }; cache.avatarUrl = p.avatar_url; cache.bannerUrl = p.banner_url; cache.emojiUrl = p.emoji_url; cache.emoji2Url = p.emoji2_url; saveCache() }
        function clearCache() { cache = { profile: null, avatarUrl: null, bannerUrl: null, emojiUrl: null, emojiData: null, emoji2Url: null, emoji2Data: null, chats: null }; try { localStorage.removeItem('mc') } catch (e) { } }
        function cacheChats(c) { try { cache.chats = c.map(function (ch) { return { id: ch.id, otherId: ch.otherId, name: ch.name, initials: ch.initials, online: ch.online, unread: ch.unread, lastMsg: ch.lastMsg, lastMsgOut: ch.lastMsgOut, lastMsgStatus: ch.lastMsgStatus, time: ch.time, avatarUrl: ch.avatarUrl, lastSeen: ch.lastSeen, emojiUrl: ch.emojiUrl || null, lastMsgTimestamp: ch.lastMsgTimestamp || null } }); saveCache() } catch (e) { } }
        function loadCachedChats() { if (cache.chats && cache.chats.length) { chats = cache.chats; chatIdsSet = new Set(chats.map(function (c) { return c.id })); sortChats(); renderChatList() } }
        function sortChats() { chats.sort(function (a, b) { var ta = a.lastMsgTimestamp ? new Date(a.lastMsgTimestamp).getTime() : 0; var tb = b.lastMsgTimestamp ? new Date(b.lastMsgTimestamp).getTime() : 0; return tb - ta }) }
        function applyCacheToProfile() { if (!cache.profile) return; profile.name = cache.profile.name || 'User'; profile.username = cache.profile.username || null; profile.bio = cache.profile.bio || ''; profile.user_id = cache.profile.user_id || null; profile.avatar_url = cache.avatarUrl || null; profile.banner_url = cache.bannerUrl || null; profile.emoji_url = cache.emojiUrl || null; profile.emoji2_url = cache.emoji2Url || null; hasUsername = !!cache.profile.username; if (cache.emojiData) profile.emojiData = cache.emojiData; if (cache.emoji2Data) profile.emoji2Data = cache.emoji2Data; applyProfile() }
        function updBioCounter() { document.getElementById('bioCounter').textContent = document.getElementById('editBio').value.length + '/40' }
        function toggleAuthMode() { isRegister = !isRegister; document.getElementById('authName').style.display = isRegister ? '' : 'none'; document.getElementById('authError').textContent = ''; updateAuthTexts() }
        async function handleAuth() {
            var email = document.getElementById('authEmail').value.trim(), password = document.getElementById('authPassword').value, errEl = document.getElementById('authError'); errEl.textContent = ''; if (!email || !password) { errEl.textContent = t('fillAllFields'); return } if (password.length < 8) { errEl.textContent = t('passwordMin8'); return } if (!PASSWORD_RE.test(password)) { errEl.textContent = t('invalidPasswordChars'); return } var btn = document.getElementById('authBtn'); btn.disabled = true; showLoading();
            var minLoad = new Promise(r => setTimeout(r, 1000));
            try {
                if (isRegister) {
                    var name = document.getElementById('authName').value.trim(); if (!name) { errEl.textContent = t('enterName'); btn.disabled = false; hideLoading(); return } if (name.length > 16) { errEl.textContent = t('nameMax16'); btn.disabled = false; hideLoading(); return } if (!NAME_RE.test(name)) { errEl.textContent = t('nameOnlyLetters'); btn.disabled = false; hideLoading(); return } var res = await sb.auth.signUp({ email: email, password: password, options: { data: { name: name } } }); if (res.error) { errEl.textContent = res.error.message; btn.disabled = false; hideLoading(); return } if (res.data && res.data.user) { authUid = res.data.user.id; cachedToken = res.data.session ? res.data.session.access_token : null; clearCache(); var userId = await createProfile(authUid, name); profile.name = name; profile.username = null; profile.bio = ''; profile.user_id = userId; profile.avatar_url = null; profile.banner_url = null; profile.emoji_url = null; profile.emojiData = null; profile.emoji2_url = null; profile.emoji2Data = null; hasUsername = false; updateCache(profile); applyProfile(); await Promise.all([loadChats(), minLoad]); setupRealtime(); hideAuth(); hideLoading() }
                } else {
                    var res = await sb.auth.signInWithPassword({ email: email, password: password }); if (res.error) { errEl.textContent = res.error.message; btn.disabled = false; hideLoading(); return } if (res.data && res.data.user) { authUid = res.data.user.id; cachedToken = res.data.session ? res.data.session.access_token : null; loadCache(); applyCacheToProfile(); loadCachedChats(); await ensureProfile(authUid); await Promise.all([loadProfile(), loadChats(), minLoad]); setupRealtime(); hideAuth(); hideLoading() }
                }
            } catch (e) { errEl.textContent = e.message; btn.disabled = false; hideLoading(); }
        }
        async function createProfile(uid, name) { var userId = generateUserId(); var exists = true; while (exists) { var check = await sb.from('profiles').select('id').eq('user_id', userId).maybeSingle(); if (!check.data) exists = false; else userId = generateUserId() } await sb.from('profiles').upsert({ id: uid, user_id: userId, name: name, username: null, bio: '', online: true, last_seen: new Date().toISOString(), language: currentLang }, { onConflict: 'id' }); return userId }
        async function ensureProfile(uid) { var res = await sb.from('profiles').select('id').eq('id', uid).maybeSingle(); if (!res.data) await createProfile(uid, 'User') }
        function logout() { setOnlineStatus(false, true); destroyAllChannels(); destroyAllListEmojis(); authUid = null; cachedToken = null; profile = { name: 'Username', username: null, bio: '', user_id: null, avatar_url: null, banner_url: null, emoji_url: null, emojiData: null, emoji2_url: null, emoji2Data: null }; chats = []; cur = null; curChatId = null; curChatTarget = null; hasUsername = false; chatIdsSet.clear(); lastOnlineStatus = null; reconnectAttempts = 0; viewingUserId = null; emojiCache = {}; if (reconnectTimer) { clearTimeout(reconnectTimer); reconnectTimer = null } if (onlineThrottleTimer) { clearTimeout(onlineThrottleTimer); onlineThrottleTimer = null } clearCache(); applyProfile(); document.getElementById('searchInput').value = ''; document.getElementById('searchResults').style.display = 'none'; document.getElementById('searchResults').innerHTML = ''; document.getElementById('chatList').innerHTML = ''; document.getElementById('authEmail').value = ''; document.getElementById('authPassword').value = ''; document.getElementById('authName').value = ''; document.getElementById('authError').textContent = ''; isRegister = false; document.getElementById('authBtn').disabled = false; document.getElementById('authName').style.display = 'none'; updateAuthTexts(); destroyLottie('profile'); destroyLottie('profile2'); destroyLottie('edit'); destroyLottie('preview'); destroyLottie('up'); destroyLottie('up2'); destroyLottie('chatHeader'); closeUserProfile(); closeChat(); showAuth(); go('chats'); sb.auth.signOut() }
        function destroyLottie(w) { if (w === 'profile' && profileEmojiAnim) { profileEmojiAnim.destroy(); profileEmojiAnim = null } if (w === 'profile2' && profileEmoji2Anim) { profileEmoji2Anim.destroy(); profileEmoji2Anim = null } if (w === 'edit' && editEmojiAnim) { editEmojiAnim.destroy(); editEmojiAnim = null } if (w === 'preview' && emojiPreviewAnim) { emojiPreviewAnim.destroy(); emojiPreviewAnim = null } if (w === 'up' && upEmojiAnim) { upEmojiAnim.destroy(); upEmojiAnim = null } if (w === 'up2' && upEmoji2Anim) { upEmoji2Anim.destroy(); upEmoji2Anim = null } if (w === 'chatHeader' && chatHeaderEmojiAnim) { chatHeaderEmojiAnim.destroy(); chatHeaderEmojiAnim = null } }
        function destroyAllListEmojis() { chatListEmojiAnims.forEach(function (a) { try { a.destroy() } catch (e) { } }); chatListEmojiAnims = []; searchEmojiAnims.forEach(function (a) { try { a.destroy() } catch (e) { } }); searchEmojiAnims = [] }
        function destroyAllChannels() { if (globalChannel) { sb.removeChannel(globalChannel); globalChannel = null } Object.keys(chatChannels).forEach(function (k) { sb.removeChannel(chatChannels[k]) }); chatChannels = {}; Object.keys(profileChannels).forEach(function (k) { sb.removeChannel(profileChannels[k]) }); profileChannels = {}; rtConnected = false; setConnStatus('disconnected') }
        function setOnlineStatus(o, f) { if (!authUid) return; if (!f && lastOnlineStatus === o) return; lastOnlineStatus = o; if (onlineThrottleTimer) { clearTimeout(onlineThrottleTimer); onlineThrottleTimer = null } if (f || o === false) { doSetOnline(o) } else { onlineThrottleTimer = setTimeout(function () { doSetOnline(o) }, 2000) } }
        function doSetOnline(o) { if (!authUid) return; var uid = myUid(); if (!uid) return; var token = cachedToken || SUPABASE_KEY; if (!o) { try { fetch(SUPABASE_URL + '/rest/v1/profiles?id=eq.' + uid, { method: 'PATCH', headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + token, 'Prefer': 'return=minimal' }, body: JSON.stringify({ online: false, last_seen: new Date().toISOString() }), keepalive: true }).catch(function () { }) } catch (e) { } } else { sb.from('profiles').update({ online: true }).eq('id', uid).then(function () { }) } }
        async function loadProfile() {
            var uid = myUid(); if (!uid) return; var res = await sb.from('profiles').select('*').eq('id', uid).single(); if (res.error || !res.data) return; var d = res.data; profile.name = d.name || 'User'; profile.username = d.username || null; profile.bio = d.bio || ''; profile.user_id = d.user_id; profile.avatar_url = d.avatar_url || null; profile.banner_url = d.banner_url || null; profile.emoji_url = d.emoji_url || null; profile.emoji2_url = d.emoji2_url || null; profile.verified = !!d.verified; hasUsername = !!d.username; updateCache(profile);
            // Load language from server
            if (d.language && translations[d.language] && d.language !== currentLang) {
                currentLang = d.language;
                localStorage.setItem('app_lang', currentLang);
                applyI18n();
            }
            if (profile.emoji_url) { profile.emojiData = await fetchEmojiData(profile.emoji_url); } else { profile.emojiData = null; }
            if (profile.emoji2_url) { profile.emoji2Data = await fetchEmojiData(profile.emoji2_url); } else { profile.emoji2Data = null; }
            saveCache(); applyProfile(); setOnlineStatus(true);
        }
        function applyProfile() { document.getElementById('profileName').textContent = profile.name; document.getElementById('settingsName').textContent = profile.name; document.getElementById('infoId').textContent = profile.user_id || t('loading'); var ur = document.getElementById('usernameRow'), iu = document.getElementById('infoUsername'); if (profile.username) { iu.textContent = '@' + profile.username; ur.style.display = '' } else { ur.style.display = 'none' } var be = document.getElementById('infoBio'), br = document.getElementById('bioRow'); if (profile.bio && profile.bio.trim()) { be.textContent = profile.bio; br.style.display = '' } else { be.textContent = ''; br.style.display = 'none' } [document.getElementById('profileAva'), document.getElementById('settingsAva')].forEach(function (el) { if (profile.avatar_url) { el.style.backgroundImage = 'url(' + profile.avatar_url + ')'; el.textContent = '' } else { el.style.backgroundImage = ''; el.textContent = (profile.name || 'U')[0].toUpperCase() } }); var bn = document.getElementById('profileBanner'); if (profile.banner_url) { bn.style.backgroundImage = 'url(' + profile.banner_url + ')'; bn.style.backgroundSize = 'cover'; bn.style.backgroundPosition = 'center' } else { bn.style.backgroundImage = ''; bn.style.background = 'linear-gradient(135deg,#1a1a1a,#2a2a2a)' } var ec = document.getElementById('profileEmoji'); if (profile.emojiData) { ec.style.display = 'inline-block' } else { ec.style.display = 'none'; ec.innerHTML = ''; destroyLottie('profile') } var vr = document.getElementById('verifiedRow'); if (profile.user_id === EMOJI2_OWNER_ID || profile.verified) { vr.style.display = ''; document.getElementById('verifiedEmoji').onclick = function () { openVerifyPreview(profile.emoji2Data, profile.name, true) } } else { vr.style.display = 'none' } }
        function renderProfileEmoji() { var c = document.getElementById('profileEmoji'); destroyLottie('profile'); c.innerHTML = ''; if (profile.emojiData) { c.style.display = 'inline-block'; profileEmojiAnim = lottie.loadAnimation({ container: c, renderer: 'canvas', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(profile.emojiData)) }) } else { c.style.display = 'none' } var vr = document.getElementById('verifiedRow'); var ve = document.getElementById('verifiedEmoji'); destroyLottie('profile2'); ve.innerHTML = ''; if (profile.user_id === EMOJI2_OWNER_ID || profile.verified) { vr.style.display = ''; if (profile.emoji2Data) { ve.style.width = '20px'; ve.style.height = '20px'; profileEmoji2Anim = lottie.loadAnimation({ container: ve, renderer: 'canvas', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(profile.emoji2Data)) }) } } else { vr.style.display = 'none' } }
        async function fetchEmojiData(url) {
            if (!url) return null; if (emojiCache[url]) return emojiCache[url];
            var cached = await getEmojiFromDB(url); if (cached) { emojiCache[url] = cached; return cached; }
            try { var r = await fetch(url); var b = await r.arrayBuffer(); var d = parseLottie(b); emojiCache[url] = d; saveEmojiToDB(url, d); return d } catch (e) { return null }
        }
        function renderInlineEmoji(c, d, s) { if (!c || !d) return null; c.innerHTML = ''; c.style.display = 'inline-block'; c.style.width = s + 'px'; c.style.height = s + 'px'; return lottie.loadAnimation({ container: c, renderer: 'canvas', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(d)) }) }
        function loadChatListEmojis() { chatListEmojiAnims.forEach(function (a) { try { a.destroy() } catch (e) { } }); chatListEmojiAnims = []; chats.forEach(function (c) { if (c.emojiUrl) { var el = document.getElementById('chat-emoji-' + c.id); if (el) fetchEmojiData(c.emojiUrl).then(function (d) { if (!d) return; var a = renderInlineEmoji(el, d, 16); if (a) chatListEmojiAnims.push(a) }) } }) }
        function loadSearchEmojis(results) { searchEmojiAnims.forEach(function (a) { try { a.destroy() } catch (e) { } }); searchEmojiAnims = []; results.forEach(function (u, i) { if (u.emoji_url) { var el = document.getElementById('search-emoji-' + i); if (el) fetchEmojiData(u.emoji_url).then(function (d) { if (!d) return; var a = renderInlineEmoji(el, d, 16); if (a) searchEmojiAnims.push(a) }) } }) }
        function loadChatHeaderEmoji(url) { destroyLottie('chatHeader'); var el = document.getElementById('chatHeaderEmoji'); el.innerHTML = ''; el.style.display = 'none'; if (!url) return; fetchEmojiData(url).then(function (d) { if (!d) return; el.style.display = 'inline-block'; chatHeaderEmojiAnim = lottie.loadAnimation({ container: el, renderer: 'canvas', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(d)) }) }) }
        async function deleteOldFile(b, p) { try { await sb.storage.from(b).remove([p]) } catch (e) { } }
        async function uploadFile(b, p, f) { var r = await sb.storage.from(b).upload(p, f, { upsert: true, contentType: f.type || 'application/octet-stream' }); if (r.error) throw r.error; return sb.storage.from(b).getPublicUrl(p).data.publicUrl + '?t=' + Date.now() }
        function handleAvaUpload(e) { var f = e.target.files[0]; if (!f) return; if (f.type === 'image/gif' || f.name.toLowerCase().endsWith('.gif')) { alert(t('gifNotSupported')); e.target.value = ''; return } tempAvaFile = f; var r = new FileReader(); r.onload = function () { var p = document.getElementById('editAvaPreview'); p.style.backgroundImage = 'url(' + r.result + ')'; p.textContent = '' }; r.readAsDataURL(f); e.target.value = '' }
        function handleBannerUpload(e) { var f = e.target.files[0]; if (!f) return; if (f.type === 'image/gif' || f.name.toLowerCase().endsWith('.gif')) { alert(t('gifNotSupported')); e.target.value = ''; return } tempBannerFile = f; var r = new FileReader(); r.onload = function () { var z = document.getElementById('bannerUploadZone'); z.style.backgroundImage = 'url(' + r.result + ')'; z.style.backgroundSize = 'cover'; z.style.backgroundPosition = 'center'; z.style.borderColor = '#ccc'; z.innerHTML = '<p style="background:rgba(0,0,0,.5);color:#fff;padding:2px 6px;border-radius:4px;font-size:9px">' + t('change') + '</p>' }; r.readAsDataURL(f); e.target.value = '' }
        async function handleEmojiUpload(e) { var f = e.target.files[0]; if (!f) return; try { var b = await fileToArrayBuffer(f); var p = parseLottie(b); tempEmojiData = p; tempEmojiFile = f; showEditEmojiStatic(p) } catch (err) { alert(t('errorPrefix') + err.message) } e.target.value = '' }
        function fileToArrayBuffer(f) { return new Promise(function (r, j) { var rd = new FileReader(); rd.onload = function () { r(rd.result) }; rd.onerror = j; rd.readAsArrayBuffer(f) }) }
        function parseLottie(buf) { var json, u8 = new Uint8Array(buf); if (u8[0] === 0x1f && u8[1] === 0x8b) { try { json = JSON.parse(pako.inflate(u8, { to: 'string' })) } catch (e) { throw new Error(t('fileCorrupted')) } } else { try { json = JSON.parse(new TextDecoder().decode(u8)) } catch (e) { try { json = JSON.parse(pako.inflate(u8, { to: 'string' })) } catch (e2) { throw new Error(t('formatNotRecognized')) } } } if (!json || typeof json !== 'object') throw new Error(t('invalidData')); if (!json.v && !json.layers) throw new Error(t('notLottie')); if (!json.layers || !Array.isArray(json.layers)) throw new Error(t('noLayers')); return json }
        function showEditEmojiStatic(d) { var c = document.getElementById('editEmojiPreview'), r = document.getElementById('emojiResultRow'); destroyLottie('edit'); c.innerHTML = ''; if (d && d !== '__remove__') { r.style.display = 'flex'; document.getElementById('emojiStatusText').textContent = t('emojiLoaded'); editEmojiAnim = lottie.loadAnimation({ container: c, renderer: 'canvas', loop: false, autoplay: false, animationData: JSON.parse(JSON.stringify(d)) }); editEmojiAnim.addEventListener('DOMLoaded', function () { editEmojiAnim.goToAndStop(0, true) }) } else { r.style.display = 'none' } }
        function removeEmoji() { tempEmojiData = '__remove__'; tempEmojiFile = null; destroyLottie('edit'); document.getElementById('editEmojiPreview').innerHTML = ''; document.getElementById('emojiResultRow').style.display = 'none' }
        function openEditModal() { tempAvaFile = null; tempBannerFile = null; tempEmojiData = null; tempEmojiFile = null; document.getElementById('editName').value = profile.name || ''; document.getElementById('editUsername').value = profile.username || ''; document.getElementById('editBio').value = profile.bio || ''; updBioCounter(); document.getElementById('saveError').textContent = ''; document.getElementById('editNameError').textContent = ''; document.getElementById('editUsernameError').textContent = ''; document.getElementById('editBioError').textContent = ''; var ap = document.getElementById('editAvaPreview'); if (profile.avatar_url) { ap.style.backgroundImage = 'url(' + profile.avatar_url + ')'; ap.textContent = '' } else { ap.style.backgroundImage = ''; ap.textContent = (profile.name || 'U')[0].toUpperCase() } var bz = document.getElementById('bannerUploadZone'); if (profile.banner_url) { bz.style.backgroundImage = 'url(' + profile.banner_url + ')'; bz.style.backgroundSize = 'cover'; bz.style.backgroundPosition = 'center'; bz.style.borderColor = '#ccc'; bz.innerHTML = '<p style="background:rgba(0,0,0,.5);color:#fff;padding:2px 6px;border-radius:4px;font-size:9px">' + t('change') + '</p>' } else { bz.style.backgroundImage = ''; bz.style.borderColor = '#ddd'; bz.innerHTML = '<svg width="14" height="14" fill="none" stroke="#bbb" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg><p>' + t('clickToUpload') + '</p>' } destroyLottie('edit'); document.getElementById('editEmojiPreview').innerHTML = ''; if (profile.emojiData) { document.getElementById('emojiStatusText').textContent = t('currentEmoji'); showEditEmojiStatic(profile.emojiData) } else { document.getElementById('emojiResultRow').style.display = 'none' } document.getElementById('editModal').classList.add('open') }
        function closeEditModal() { document.getElementById('editModal').classList.remove('open'); destroyLottie('edit') }
        async function saveProfile() { var ne = document.getElementById('editNameError'), ue = document.getElementById('editUsernameError'), be = document.getElementById('editBioError'), se = document.getElementById('saveError'); ne.textContent = ''; ue.textContent = ''; be.textContent = ''; se.textContent = ''; var name = document.getElementById('editName').value.trim(), username = document.getElementById('editUsername').value.trim().toLowerCase(), bio = document.getElementById('editBio').value.trim(), valid = true; if (!name || name.length < 1) { ne.textContent = t('enterNameErr'); valid = false } else if (name.length > 16) { ne.textContent = t('max16'); valid = false } else if (!NAME_RE.test(name)) { ne.textContent = t('onlyLettersSpaces'); valid = false } var newUsername = null; if (username) { if (username.length < 5) { ue.textContent = t('min5'); valid = false } else if (username.length > 20) { ue.textContent = t('max20'); valid = false } else if (/^[0-9]/.test(username)) { ue.textContent = t('cantStartDigit'); valid = false } else if (!USERNAME_RE.test(username)) { ue.textContent = t('onlyAzDigits'); valid = false } else newUsername = username } else { if (hasUsername) { ue.textContent = t('cantDeleteUsername'); valid = false } newUsername = null } if (bio && bio.length > 40) { be.textContent = t('max40'); valid = false } if (!valid) return; var noText = name === profile.name && (newUsername || null) === (profile.username || null) && (bio || '') === (profile.bio || ''); var noFile = !tempAvaFile && !tempBannerFile && tempEmojiData === null; if (noText && noFile) { closeEditModal(); return } var uid = myUid(); if (newUsername && newUsername !== profile.username) { var ck = await sb.from('profiles').select('id').eq('username', newUsername).maybeSingle(); if (ck.data && ck.data.id !== uid) { ue.textContent = t('usernameTaken'); return } } var updates = { name: name, bio: bio || '', updated_at: new Date().toISOString() }; if (newUsername !== undefined) updates.username = newUsername; try { var uploads = []; if (tempAvaFile) { uploads.push((async function () { var op = uid + '/avatar'; await Promise.all([deleteOldFile('avatars', op + '.jpg'), deleteOldFile('avatars', op + '.png'), deleteOldFile('avatars', op + '.webp'), deleteOldFile('avatars', op + '.jpeg')]); var ext = tempAvaFile.name.split('.').pop().toLowerCase(); var url = await uploadFile('avatars', uid + '/avatar.' + ext, tempAvaFile); updates.avatar_url = url; profile.avatar_url = url })()) } if (tempBannerFile) { uploads.push((async function () { var op = uid + '/banner'; await Promise.all([deleteOldFile('banners', op + '.jpg'), deleteOldFile('banners', op + '.png'), deleteOldFile('banners', op + '.webp'), deleteOldFile('banners', op + '.jpeg')]); var ext = tempBannerFile.name.split('.').pop().toLowerCase(); var url = await uploadFile('banners', uid + '/banner.' + ext, tempBannerFile); updates.banner_url = url; profile.banner_url = url })()) } if (tempEmojiData === '__remove__') { uploads.push((async function () { updates.emoji_url = null; profile.emoji_url = null; profile.emojiData = null; cache.emojiData = null; await Promise.all([deleteOldFile('emojis', uid + '/emoji.tgs'), deleteOldFile('emojis', uid + '/emoji.json')]) })()) } else if (tempEmojiFile && tempEmojiData && typeof tempEmojiData === 'object') { uploads.push((async function () { await Promise.all([deleteOldFile('emojis', uid + '/emoji.tgs'), deleteOldFile('emojis', uid + '/emoji.json')]); var en = tempEmojiFile.name.toLowerCase(); var ep = uid + '/emoji' + (en.endsWith('.tgs') ? '.tgs' : '.json'); var url = await uploadFile('emojis', ep, tempEmojiFile); updates.emoji_url = url; profile.emoji_url = url; profile.emojiData = JSON.parse(JSON.stringify(tempEmojiData)); cache.emojiData = profile.emojiData })()) } if (uploads.length) await Promise.all(uploads); var res = await sb.from('profiles').update(updates).eq('id', uid); if (res.error) { if (res.error.message && res.error.message.includes('username')) { ue.textContent = t('usernameTaken') } else { se.textContent = t('errorPrefix') + res.error.message } return } profile.name = name; profile.username = newUsername; profile.bio = bio || ''; hasUsername = !!newUsername; updateCache(profile); applyProfile(); renderProfileEmoji(); closeEditModal() } catch (e) { se.textContent = t('errorPrefix') + e.message } }
        function handleSearch() { var q = document.getElementById('searchInput').value.trim().toLowerCase().replace('@', ''); var r = document.getElementById('searchResults'); if (q.length < 3) { r.style.display = 'none'; r.innerHTML = ''; searchEmojiAnims.forEach(function (a) { try { a.destroy() } catch (e) { } }); searchEmojiAnims = []; if (searchTimer) { clearTimeout(searchTimer); searchTimer = null } if (!q) renderChatList(); return } if (searchTimer) clearTimeout(searchTimer); searchTimer = setTimeout(function () { searchUsers(q) }, 300) }
        async function searchUsers(q) { var r = document.getElementById('searchResults'), uid = myUid(); var res = await sb.from('profiles').select('id,name,username,avatar_url,user_id,online,last_seen,bio,banner_url,emoji_url').ilike('username', '%' + q + '%').neq('id', uid).limit(10); if (res.error || !res.data || !res.data.length) { r.innerHTML = '<div style="padding:14px;text-align:center;font-size:10px;color:#aaa">' + t('nothingFound') + '</div>'; r.style.display = 'block'; return } var sd = res.data; r.innerHTML = sd.map(function (u, i) { var as = u.avatar_url ? 'background-image:url(' + u.avatar_url + ');background-size:cover;background-position:center;' : 'background:#eee;color:#999;'; var ac = u.avatar_url ? '' : ((u.name || 'U')[0].toUpperCase()); return '<div class="search-result-item" onclick="openChatWithUser(\'' + u.id + '\',\'' + escHtml(u.name) + '\',\'' + escHtml(u.username || '') + '\',\'' + escHtml(u.avatar_url || '') + '\',\'' + escHtml(u.emoji_url || '') + '\')">' + '<div class="ava-sm" style="width:36px;height:36px;font-size:12px;' + as + '">' + ac + '</div>' + '<div style="flex:1;min-width:0">' + '<div style="display:flex;align-items:center"><span style="font-size:11px;font-weight:600">' + escHtml(u.name) + '</span><div id="search-emoji-' + i + '" class="inline-emoji" style="display:none"></div></div>' + (u.username ? '<div style="font-size:9px;color:#aaa">@' + escHtml(u.username) + '</div>' : '') + '</div>' + '</div>' }).join(''); r.style.display = 'block'; loadSearchEmojis(sd) }
        async function openChatWithUser(tid, tn, tu, ta, te) { document.getElementById('searchResults').style.display = 'none'; document.getElementById('searchInput').value = ''; var ex = chats.find(function (c) { return c.otherId === tid }); if (ex) { openChat(ex.id); return } curChatTarget = { uid: tid, name: tn, username: tu, avatarUrl: ta, emojiUrl: te || null }; curChatId = null; cur = null; var ca = document.getElementById('cAva'); if (ta) { ca.style.backgroundImage = 'url(' + ta + ')'; ca.style.backgroundSize = 'cover'; ca.style.backgroundPosition = 'center'; ca.textContent = '' } else { ca.style.backgroundImage = ''; ca.textContent = (tn || 'U')[0].toUpperCase(); ca.style.background = '#eee'; ca.style.color = '#999' } document.getElementById('cName').textContent = tn; document.getElementById('cStatus').textContent = ''; document.getElementById('msgArea').innerHTML = '<div class="empty-state" style="padding:60px 30px"><div class="empty-icon"><svg width="14" height="14" fill="none" stroke="#ccc" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg></div><div class="empty-title">' + t('noMessages') + '</div><div class="empty-desc">' + t('writeFirstMessage') + '</div></div>'; document.getElementById('chatView').classList.add('open'); document.getElementById('bar').style.display = 'none'; loadChatHeaderEmoji(te || null); loadTargetStatus(tid); setTimeout(scrollToBottom, 300) }
        async function loadTargetStatus(tid) { var res = await sb.from('profiles').select('online,last_seen').eq('id', tid).single(); if (res.data) document.getElementById('cStatus').textContent = res.data.online ? t('inOnline') : timeAgo(res.data.last_seen) }
        async function openUserProfile() {
            var tid = null, cn = '', ca = '', co = false, cls = null, ce = null; if (cur && cur.otherId) { tid = cur.otherId; cn = cur.name || ''; ca = cur.avatarUrl || ''; co = cur.online || false; cls = cur.lastSeen || null; ce = cur.emojiUrl || null } else if (curChatTarget && curChatTarget.uid) { tid = curChatTarget.uid; cn = curChatTarget.name || ''; ca = curChatTarget.avatarUrl || ''; ce = curChatTarget.emojiUrl || null } if (!tid) return; viewingUserId = tid; var ub = document.getElementById('upBanner'); ub.style.backgroundImage = ''; ub.style.background = 'linear-gradient(135deg,#1a1a1a,#2a2a2a)'; var ua = document.getElementById('upAva'); if (ca) { ua.style.backgroundImage = 'url(' + ca + ')'; ua.textContent = '' } else { ua.style.backgroundImage = ''; ua.textContent = (cn || 'U')[0].toUpperCase() } document.getElementById('upName').textContent = cn || t('loading') + '...'; var sd = document.getElementById('upStatusDot'), st = document.getElementById('upStatusText'); if (co) { sd.style.background = '#4ade80'; st.textContent = t('online') } else { sd.style.background = '#ccc'; st.textContent = cls ? timeAgo(cls) : '' } document.getElementById('upId').textContent = t('loading'); destroyLottie('up'); destroyLottie('up2'); _upEmojiData = null; _upEmoji2Data = null; _upEmojiOwner = cn || ''; var ue = document.getElementById('upEmoji'); ue.innerHTML = ''; ue.style.display = 'none'; var uvb = document.getElementById('upVerifiedRow'); var uve = document.getElementById('upVerifiedEmoji'); uvb.style.display = 'none'; uve.innerHTML = ''; document.getElementById('userProfileView').classList.add('open');
            var existingChat = chats.find(function (c) { return c.otherId === tid });
            if (existingChat) document.getElementById('upMsgBtn').style.display = 'none';
            else document.getElementById('upMsgBtn').style.display = 'flex';

            if (ce) fetchEmojiData(ce).then(function (d) { if (!d || viewingUserId !== tid) return; _upEmojiData = d; ue.style.display = 'inline-block'; upEmojiAnim = lottie.loadAnimation({ container: ue, renderer: 'canvas', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(d)) }) }); var res = await sb.from('profiles').select('*').eq('id', tid).single(); if (res.error || !res.data || viewingUserId !== tid) return; var u = res.data; if (u.banner_url) { ub.style.backgroundImage = 'url(' + u.banner_url + ')'; ub.style.backgroundSize = 'cover'; ub.style.backgroundPosition = 'center' } if (u.avatar_url) { ua.style.backgroundImage = 'url(' + u.avatar_url + ')'; ua.textContent = '' } _upEmojiOwner = u.name || 'User'; document.getElementById('upName').textContent = u.name || 'User'; if (u.online) { sd.style.background = '#4ade80'; st.textContent = t('online') } else { sd.style.background = '#ccc'; st.textContent = timeAgo(u.last_seen) } if (u.bio && u.bio.trim()) { document.getElementById('upBio').textContent = u.bio; document.getElementById('upBioRow').style.display = '' } else { document.getElementById('upBioRow').style.display = 'none' } if (u.username) { document.getElementById('upUsername').textContent = '@' + u.username; document.getElementById('upUsernameRow').style.display = '' } else { document.getElementById('upUsernameRow').style.display = 'none' } document.getElementById('upId').textContent = u.user_id || '—'; if (u.emoji_url && u.emoji_url !== ce) { destroyLottie('up'); ue.innerHTML = ''; fetchEmojiData(u.emoji_url).then(function (d) { if (d && viewingUserId === tid) { _upEmojiData = d; ue.style.display = 'inline-block'; upEmojiAnim = lottie.loadAnimation({ container: ue, renderer: 'canvas', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(d)) }) } }) }
            if (u.user_id === EMOJI2_OWNER_ID || u.verified) {
                if (!u.emoji2_url && profile.user_id === EMOJI2_OWNER_ID && profile.emoji2_url) {
                    sb.from('profiles').update({ emoji2_url: profile.emoji2_url }).eq('id', tid).then(function () {
                        u.emoji2_url = profile.emoji2_url;
                        uvb.style.display = '';
                        fetchEmojiData(u.emoji2_url).then(function (d) { if (d && viewingUserId === tid) { _upEmoji2Data = d; uve.style.width = '20px'; uve.style.height = '20px'; upEmoji2Anim = lottie.loadAnimation({ container: uve, renderer: 'canvas', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(d)) }) } });
                    });
                }
                uvb.style.display = '';
                uve.onclick = function () { openVerifyPreview(_upEmoji2Data, u.name, false) };
                if (u.emoji2_url) { fetchEmojiData(u.emoji2_url).then(function (d) { if (d && viewingUserId === tid) { _upEmoji2Data = d; uve.style.width = '20px'; uve.style.height = '20px'; upEmoji2Anim = lottie.loadAnimation({ container: uve, renderer: 'canvas', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(d)) }) } }) }
            } else { uvb.style.display = 'none' }
        }
        function closeUserProfile() { document.getElementById('userProfileView').classList.remove('open'); destroyLottie('up'); destroyLottie('up2'); viewingUserId = null; _upEmojiData = null; _upEmoji2Data = null; _upEmojiOwner = ''; document.getElementById('upVerifiedRow').style.display = 'none'; document.getElementById('upVerifiedEmoji').innerHTML = '' }
        async function loadChats() { var uid = myUid(); if (!uid) return; var res = await sb.from('chat_members').select('chat_id').eq('user_id', uid); if (res.error || !res.data || !res.data.length) { chats = []; chatIdsSet.clear(); renderChatList(); return } var cids = res.data.map(function (m) { return m.chat_id }); chatIdsSet = new Set(cids); var r = await Promise.all([sb.from('chat_members').select('chat_id,user_id').in('chat_id', cids), sb.from('messages').select('chat_id,text,created_at,sender_id,delivered,read').in('chat_id', cids).order('created_at', { ascending: false })]); var mr = r[0], mg = r[1], oids = [], cto = {}; if (mr.data) mr.data.forEach(function (m) { if (String(m.user_id) !== uid) { oids.push(m.user_id); cto[m.chat_id] = m.user_id } }); var pm = {}; if (oids.length) { var pr = await sb.from('profiles').select('id,name,online,avatar_url,last_seen,emoji_url').in('id', oids); if (pr.data) pr.data.forEach(function (p) { pm[p.id] = p }) } var lm = {}, um = {}; if (mg.data) mg.data.forEach(function (m) { if (!lm[m.chat_id]) lm[m.chat_id] = m; if (String(m.sender_id) !== uid && !m.read) um[m.chat_id] = (um[m.chat_id] || 0) + 1 }); chats = []; for (var i = 0; i < cids.length; i++) { var cid = cids[i], oid = cto[cid], op = oid ? pm[oid] : null, lmsg = lm[cid] || null; var cn = op ? op.name : t('user'), ini = cn[0].toUpperCase(), on = op ? op.online : false, ls = op ? op.last_seen : null, eu = op ? op.emoji_url : null; var ts = '', lmo = false, lms = 'sent'; if (lmsg) { var d = new Date(lmsg.created_at); ts = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); lmo = String(lmsg.sender_id) === uid; if (lmo) { if (lmsg.read) lms = 'read'; else if (lmsg.delivered) lms = 'delivered'; else lms = 'sent' } } chats.push({ id: cid, otherId: oid, name: cn, initials: ini, online: on, lastSeen: ls, unread: um[cid] || 0, lastMsg: lmsg ? lmsg.text : '', time: ts, avatarUrl: op ? op.avatar_url : null, lastMsgOut: lmo, lastMsgStatus: lms, emojiUrl: eu, lastMsgTimestamp: lmsg ? lmsg.created_at : null }) } sortChats(); cacheChats(chats); renderChatList(); subscribeToChatChannels(); subscribeToProfileChannels() }
        function getMsgStatusHtml(s) { if (s === 'read') return '<span class="msg-status read">' + SVG_CHECK_TWO + '</span>'; if (s === 'delivered') return '<span class="msg-status">' + SVG_CHECK_TWO + '</span>'; return '<span class="msg-status">' + SVG_CHECK_ONE + '</span>' }
        function renderChatList() { var el = document.getElementById('chatList'); var q = (document.getElementById('searchInput').value || '').toLowerCase().trim(); if (q.length >= 3) return; destroyAllListEmojis(); if (!chats.length) { el.innerHTML = '<div class="empty-state"><div class="empty-icon"><svg width="16" height="16" fill="none" stroke="#ccc" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg></div><div class="empty-title">' + t('noChats') + '</div><div class="empty-desc">' + t('findUserByUsername') + '</div></div>'; return } el.innerHTML = chats.map(function (c) { var as = c.avatarUrl ? 'background-image:url(' + c.avatarUrl + ');background-size:cover;background-position:center;' : 'background:' + (c.online ? '#1a1a1a' : '#eee') + ';color:' + (c.online ? '#fff' : '#999') + ';'; var ac = c.avatarUrl ? '' : c.initials; var sh = ''; if (c.lastMsg && c.lastMsgOut) sh = getMsgStatusHtml(c.lastMsgStatus) + ' '; return '<div class="chat-item" onclick="openChat(' + c.id + ')">' + '<div style="position:relative">' + '<div class="ava-sm" style="' + as + '">' + ac + '</div>' + (c.online ? '<div class="dot-online"></div>' : '') + '</div>' + '<div style="flex:1;min-width:0">' + '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2px">' + '<div style="display:flex;align-items:center"><span style="font-size:11px;font-weight:600">' + escHtml(c.name) + '</span><div id="chat-emoji-' + c.id + '" class="inline-emoji" style="display:none"></div></div>' + '<span style="font-size:8px;color:#ccc;display:flex;align-items:center;gap:2px;flex-shrink:0">' + sh + (c.time || '') + '</span>' + '</div>' + '<div style="display:flex;justify-content:space-between;align-items:center">' + '<span class="chat-preview" style="font-size:10px;color:#aaa;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px">' + (c.lastMsg ? formatPreview(c.lastMsg) : t('noChatsMsg')) + '</span>' + (c.unread ? '<div class="badge">' + c.unread + '</div>' : '') + '</div>' + '</div>' + '</div>' }).join(''); loadChatListEmojis() }
        async function openChat(id) { var c = chats.find(function (x) { return x.id === id }); if (!c) return; cur = c; curChatId = id; curChatTarget = null; var ca = document.getElementById('cAva'); if (c.avatarUrl) { ca.style.backgroundImage = 'url(' + c.avatarUrl + ')'; ca.style.backgroundSize = 'cover'; ca.style.backgroundPosition = 'center'; ca.textContent = '' } else { ca.style.backgroundImage = ''; ca.textContent = c.initials; ca.style.background = c.online ? '#1a1a1a' : '#eee'; ca.style.color = c.online ? '#fff' : '#999' } document.getElementById('cName').textContent = c.name; document.getElementById('cStatus').textContent = c.online ? t('inOnline') : timeAgo(c.lastSeen); loadChatHeaderEmoji(c.emojiUrl || null); await loadMessages(id); document.getElementById('chatView').classList.add('open'); document.getElementById('bar').style.display = 'none'; setTimeout(function () { scrollToBottom() }, 100); markMessagesRead(id) }
        async function markMessagesRead(cid) { var uid = myUid(); await sb.from('messages').update({ read: true, delivered: true }).eq('chat_id', cid).neq('sender_id', uid).eq('read', false); var c = chats.find(function (x) { return x.id === cid }); if (c) { c.unread = 0; renderChatList(); cacheChats(chats) } }

        function showToast(msg) {
            var c = document.getElementById('toastContainer');
            var tt = document.createElement('div');
            tt.className = 'toast';
            tt.textContent = msg;
            c.appendChild(tt);
            void tt.offsetWidth;
            tt.classList.add('show');
            setTimeout(function () {
                tt.classList.remove('show');
                setTimeout(function () { try { c.removeChild(tt) } catch (e) { } }, 250);
            }, 3000);
        }

        function formatText(tx) {
            if (!tx) return '';
            let s = tx.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            s = s.replace(/\|\|(.*?)\|\|/g, '<span class="spoiler" onclick="event.stopPropagation();this.classList.toggle(\'visible\')">$1</span>');
            s = s.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
            s = s.replace(/__(.*?)__/g, '<i>$1</i>');
            s = s.replace(/~~(.*?)~~/g, '<s>$1</s>');
            s = s.replace(/`(.*?)`/g, '<code>$1</code>');
            s = s.replace(/@([a-z0-9_]+)/g, '<span class="mention" onclick="event.stopPropagation();handleMentionClick(\'$1\')">@$1</span>');
            return s;
        }

        function formatPreview(tx) {
            if (!tx) return '';
            let s = tx.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            s = s.replace(/\|\|(.*?)\|\|/g, '<span class="spoiler">$1</span>');
            s = s.replace(/\*\*(.*?)\*\*/g, '$1');
            s = s.replace(/__(.*?)__/g, '$1');
            s = s.replace(/~~(.*?)~~/g, '$1');
            s = s.replace(/`(.*?)`/g, '$1');
            return s;
        }

        async function handleMentionClick(username) {
            if (!username) return;
            var cleanUser = username.toLowerCase();
            if (profile.username && cleanUser === profile.username.toLowerCase()) {
                showToast(t('thisIsYou'));
                return;
            }
            var res = await sb.from('profiles').select('id').eq('username', cleanUser).maybeSingle();
            if (!res.data) {
                showToast(t('noSuchAccount'));
                return;
            }
            closeChat();
            setTimeout(function () {
                openUserProfileById(res.data.id);
            }, 150);
        }

        function scrollToMsg(mid) {
            if (!mid) return;
            var cleanId = String(mid).replace(/^msg-/, '');
            var container = document.getElementById('msg-' + cleanId);
            if (!container) container = document.querySelector('[data-mid="' + cleanId + '"]');

            if (container) {
                container.scrollIntoView({ behavior: 'smooth', block: 'center' });
                container.classList.remove('highlight');
                void container.offsetWidth;
                container.classList.add('highlight');
            } else {
                if (cleanId.startsWith('temp-')) showToast(t('msgSending'));
                else showToast(t('msgDeleted'));
            }
        }

        function scrollToBottom() {
            var a = document.getElementById('msgArea');
            if (a) a.scrollTop = a.scrollHeight;
        }

        async function loadMessages(cid) {
            var uid = myUid();
            var res = await sb.from('messages').select('*').eq('chat_id', cid).order('created_at', { ascending: true });
            var a = document.getElementById('msgArea');
            if (!res.data || !res.data.length) {
                a.innerHTML = '<div class="empty-state" style="padding:60px 30px"><div class="empty-icon"><svg width="14" height="14" fill="none" stroke="#ccc" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg></div><div class="empty-title">' + t('noMessages') + '</div><div class="empty-desc">' + t('writeFirstMessage') + '</div></div>';
                return;
            }

            var senderNames = {};
            if (cur) senderNames[cur.otherId] = cur.name;
            senderNames[uid] = profile.name || 'You';

            a.innerHTML = res.data.map(function (m) {
                var io = String(m.sender_id) === uid;
                var d = new Date(m.created_at);
                var ti = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
                var sh = '';
                if (io) {
                    if (m.read) sh = getMsgStatusHtml('read');
                    else if (m.delivered) sh = getMsgStatusHtml('delivered');
                    else sh = getMsgStatusHtml('sent');
                }

                var replyBlock = '';
                if (m.reply_data && m.reply_data.text) {
                    replyBlock = '<div class="msg-reply-preview" onclick="event.stopPropagation();scrollToMsg(\'' + m.reply_data.id + '\')">' +
                        '<div class="msg-reply-name">' + escHtml(m.reply_data.name) + '</div>' +
                        '<div class="msg-reply-text">' + escHtml(m.reply_data.text) + '</div>' +
                        '</div>';
                }

                var senderNameForReply = io ? (profile.name || 'User') : (cur ? cur.name : 'User');

                return '<div class="msg-container" id="msg-' + m.id + '" style="align-items:' + (io ? 'flex-end' : 'flex-start') + '" ' +
                    'data-mid="' + m.id + '" ' +
                    'data-mtext="' + escAttr(m.text) + '" ' +
                    'data-mname="' + escAttr(senderNameForReply) + '" ' +
                    'ontouchstart="handleMsgTouchStart(event)" ' +
                    'ontouchmove="handleMsgTouchMove(event)" ' +
                    'ontouchend="handleMsgTouchEnd(event)">' +
                    '<div class="swipe-reply-icon"><svg width="14" height="14" fill="none" stroke="#999" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg></div>' +
                    '<div class="msg ' + (io ? 'msg-out' : 'msg-in') + '">' +
                    replyBlock +
                    '<span class="markdown">' + formatText(m.text) + '</span>' +
                    '</div>' +
                    '<div class="msg-time" style="text-align:' + (io ? 'right' : 'left') + ';padding:0 4px">' + ti + ' ' + sh + '</div>' +
                    '</div>';
            }).join('');
        }

        var swipeStart = { x: 0, y: 0 };
        var swipeCurrent = null;
        var currentSwipeElem = null;

        function handleMsgTouchStart(e) {
            swipeStart.x = e.touches[0].clientX;
            swipeStart.y = e.touches[0].clientY;
            currentSwipeElem = e.currentTarget;
            currentSwipeElem.style.transition = 'none';
            var d = currentSwipeElem.dataset;
            swipeCurrent = { id: d.mid, text: d.mtext, name: d.mname };
        }

        function handleMsgTouchMove(e) {
            if (!currentSwipeElem) return;
            var dx = e.touches[0].clientX - swipeStart.x;
            var dy = e.touches[0].clientY - swipeStart.y;
            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) < 100) {
                if (dx > 0) {
                    e.preventDefault();
                    currentSwipeElem.style.transform = 'translateX(' + dx + 'px)';
                    if (dx > 40) currentSwipeElem.classList.add('swipe-active');
                    else currentSwipeElem.classList.remove('swipe-active');
                }
            }
        }

        function handleMsgTouchEnd(e) {
            if (!currentSwipeElem) return;
            currentSwipeElem.style.transition = 'transform .2s cubic-bezier(0.2, 0.8, 0.2, 1)';
            currentSwipeElem.style.transform = 'translateX(0)';
            currentSwipeElem.classList.remove('swipe-active');
            var dx = e.changedTouches[0].clientX - swipeStart.x;
            var dy = e.changedTouches[0].clientY - swipeStart.y;
            if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) && dx > 0) {
                replyTo(swipeCurrent);
            }
            currentSwipeElem = null;
            swipeCurrent = null;
        }

        function replyTo(msg) {
            if (!msg) return;
            currentReply = msg;
            document.getElementById('replyBar').style.display = 'flex';
            document.getElementById('replyName').textContent = msg.name;
            document.getElementById('replyText').textContent = msg.text;
            document.getElementById('msgIn').focus();
            scrollToBottom();
        }

        function cancelReply() {
            currentReply = null;
            document.getElementById('replyBar').style.display = 'none';
        }

        function handleRealtimeMessage(cid, pl) {
            var m = pl.new; if (!m) return; var uid = myUid(), io = String(m.sender_id) === uid; if (!io) {
                if (curChatId === cid) {
                    var d = new Date(m.created_at), ti = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0'); var a = document.getElementById('msgArea'); var es = a.querySelector('.empty-state'); if (es) a.innerHTML = '';

                    var replyBlock = '';
                    if (m.reply_data && m.reply_data.text) {
                        replyBlock = '<div class="msg-reply-preview" onclick="event.stopPropagation();scrollToMsg(\'' + m.reply_data.id + '\')"><div class="msg-reply-name">' + escHtml(m.reply_data.name) + '</div><div class="msg-reply-text">' + escHtml(m.reply_data.text) + '</div></div>';
                    }

                    var div = document.createElement('div'); div.className = 'msg-container'; div.style.alignItems = 'flex-start';
                    div.id = 'msg-' + m.id;
                    var senderName = cur ? cur.name : 'User';
                    div.dataset.mid = m.id;
                    div.dataset.mtext = escAttr(m.text);
                    div.dataset.mname = escAttr(senderName);
                    div.setAttribute('ontouchstart', 'handleMsgTouchStart(event)');
                    div.setAttribute('ontouchmove', 'handleMsgTouchMove(event)');
                    div.setAttribute('ontouchend', 'handleMsgTouchEnd(event)');

                    div.innerHTML = '<div class="swipe-reply-icon"><svg width="14" height="14" fill="none" stroke="#999" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg></div><div class="msg msg-in">' + replyBlock + '<span class="markdown">' + formatText(m.text) + '</span></div><div class="msg-time" style="text-align:left;padding:0 4px">' + ti + '</div>'; a.appendChild(div); a.scrollTop = a.scrollHeight; sb.from('messages').update({ read: true, delivered: true }).eq('id', m.id).then(function () { })
                } else { sb.from('messages').update({ delivered: true }).eq('id', m.id).then(function () { }) }
            } var ci = chats.find(function (c) { return c.id === cid }); if (ci) { var d2 = new Date(m.created_at); ci.lastMsg = m.text; ci.time = String(d2.getHours()).padStart(2, '0') + ':' + String(d2.getMinutes()).padStart(2, '0'); ci.lastMsgOut = io; ci.lastMsgTimestamp = m.created_at; if (io) ci.lastMsgStatus = 'sent'; if (!io && curChatId !== cid) ci.unread = (ci.unread || 0) + 1; if (!io && curChatId === cid) ci.unread = 0; sortChats(); renderChatList(); cacheChats(chats) }
        }
        function handleMessageUpdate(cid, pl) { var m = pl.new; if (!m) return; var uid = myUid(); if (String(m.sender_id) === uid) { if (curChatId === cid) loadMessages(cid).then(function () { scrollToBottom() }); var ci = chats.find(function (c) { return c.id === cid }); if (ci && ci.lastMsgOut) { if (m.read) ci.lastMsgStatus = 'read'; else if (m.delivered) ci.lastMsgStatus = 'delivered'; renderChatList(); cacheChats(chats) } } }
        function handleProfileChange(pid, pl) { var p = pl.new; if (!p) return; var ch = false; chats.forEach(function (c) { if (c.otherId === pid) { if (p.online !== undefined && c.online !== p.online) { c.online = p.online; ch = true } if (p.name && c.name !== p.name) { c.name = p.name; c.initials = p.name[0].toUpperCase(); ch = true } if (p.avatar_url !== undefined && c.avatarUrl !== p.avatar_url) { c.avatarUrl = p.avatar_url; ch = true } if (p.last_seen) { c.lastSeen = p.last_seen; ch = true } if (p.emoji_url !== undefined && c.emojiUrl !== p.emoji_url) { c.emojiUrl = p.emoji_url; ch = true } } }); if (ch) { renderChatList(); cacheChats(chats); if (cur && cur.otherId === pid) { document.getElementById('cStatus').textContent = (p.online !== undefined ? p.online : cur.online) ? t('inOnline') : timeAgo(p.last_seen || cur.lastSeen); document.getElementById('cName').textContent = p.name || cur.name; if (p.emoji_url !== undefined) loadChatHeaderEmoji(p.emoji_url) } } }
        async function openUserProfileById(tid) {
            if (tid === myUid()) {
                go('profile');
                return;
            }
            viewingUserId = tid;
            var ub = document.getElementById('upBanner'); ub.style.backgroundImage = ''; ub.style.background = 'linear-gradient(135deg,#1a1a1a,#2a2a2a)';
            var ua = document.getElementById('upAva'); ua.style.backgroundImage = ''; ua.textContent = '...';
            document.getElementById('upName').textContent = t('loading') + '...';
            document.getElementById('upStatusText').textContent = '';
            document.getElementById('upId').textContent = t('loading');
            destroyLottie('up'); destroyLottie('up2');
            document.getElementById('userProfileView').classList.add('open');

            var existingChat = chats.find(function (c) { return c.otherId === tid });
            if (existingChat) document.getElementById('upMsgBtn').style.display = 'none';
            else document.getElementById('upMsgBtn').style.display = 'flex';

            var res = await sb.from('profiles').select('*').eq('id', tid).single();
            if (res.error || !res.data || viewingUserId !== tid) return;
            var u = res.data;
            _upEmojiOwner = u.name || 'User';

            if (u.banner_url) { ub.style.backgroundImage = 'url(' + u.banner_url + ')'; ub.style.backgroundSize = 'cover'; ub.style.backgroundPosition = 'center' }
            if (u.avatar_url) { ua.style.backgroundImage = 'url(' + u.avatar_url + ')'; ua.textContent = '' }
            else { ua.textContent = (u.name || 'U')[0].toUpperCase() }

            document.getElementById('upName').textContent = u.name || 'User';
            var sd = document.getElementById('upStatusDot'), st = document.getElementById('upStatusText');
            if (u.online) { sd.style.background = '#4ade80'; st.textContent = t('online') } else { sd.style.background = '#ccc'; st.textContent = timeAgo(u.last_seen) }

            if (u.bio && u.bio.trim()) { document.getElementById('upBio').textContent = u.bio; document.getElementById('upBioRow').style.display = '' } else { document.getElementById('upBioRow').style.display = 'none' }
            if (u.username) { document.getElementById('upUsername').textContent = '@' + u.username; document.getElementById('upUsernameRow').style.display = '' } else { document.getElementById('upUsernameRow').style.display = 'none' }
            document.getElementById('upId').textContent = u.user_id || '—';

            var ue = document.getElementById('upEmoji'); ue.innerHTML = ''; ue.style.display = 'none';
            if (u.emoji_url) { fetchEmojiData(u.emoji_url).then(function (d) { if (d && viewingUserId === tid) { _upEmojiData = d; ue.style.display = 'inline-block'; upEmojiAnim = lottie.loadAnimation({ container: ue, renderer: 'canvas', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(d)) }) } }) }

            var uvb = document.getElementById('upVerifiedRow'); var uve = document.getElementById('upVerifiedEmoji');
            if (u.user_id === EMOJI2_OWNER_ID || u.verified) {
                uvb.style.display = '';
                uve.onclick = function () { openVerifyPreview(_upEmoji2Data, u.name, false) };
                if (u.emoji2_url) { fetchEmojiData(u.emoji2_url).then(function (d) { if (d && viewingUserId === tid) { _upEmoji2Data = d; uve.style.width = '20px'; uve.style.height = '20px'; upEmoji2Anim = lottie.loadAnimation({ container: uve, renderer: 'canvas', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(d)) }) } }) }
            } else { uvb.style.display = 'none' }
        }

        async function openChatFromProfile() {
            if (!viewingUserId) return;
            var existing = chats.find(function (c) { return c.otherId === viewingUserId });
            closeUserProfile();
            if (existing) {
                openChat(existing.id);
            } else {
                var name = document.getElementById('upName').textContent;
                var uname = document.getElementById('upUsernameRow').style.display !== 'none' ? document.getElementById('upUsername').textContent.replace('@', '') : null;
                var avaStyle = document.getElementById('upAva').style.backgroundImage;
                var avaUrl = avaStyle ? avaStyle.slice(4, -1).replace(/"/g, "") : null;

                curChatTarget = {
                    uid: viewingUserId,
                    name: name,
                    username: uname,
                    avatarUrl: avaUrl,
                    emojiUrl: null
                };
                curChatId = null;
                cur = null;

                var ca = document.getElementById('cAva');
                if (avaUrl) { ca.style.backgroundImage = 'url(' + avaUrl + ')'; ca.textContent = '' }
                else { ca.style.backgroundImage = ''; ca.textContent = (name || 'U')[0].toUpperCase(); ca.style.background = '#eee'; ca.style.color = '#999' }
                document.getElementById('cName').textContent = name;
                document.getElementById('cStatus').textContent = document.getElementById('upStatusText').textContent;
                document.getElementById('msgArea').innerHTML = '<div class="empty-state" style="padding:60px 30px"><div class="empty-icon"><svg width="14" height="14" fill="none" stroke="#ccc" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg></div><div class="empty-title">' + t('noMessages') + '</div><div class="empty-desc">' + t('writeFirstMessage') + '</div></div>';

                document.getElementById('chatView').classList.add('open');
                document.getElementById('bar').style.display = 'none';
                setTimeout(function () {
                    document.getElementById('msgIn').focus();
                }, 300);
            }
        }
        function subscribeToChatChannels() { var ci = new Set(); chats.forEach(function (c) { ci.add(String(c.id)) }); Object.keys(chatChannels).forEach(function (k) { if (!ci.has(k)) { sb.removeChannel(chatChannels[k]); delete chatChannels[k] } }); chats.forEach(function (c) { var k = String(c.id); if (chatChannels[k]) return; chatChannels[k] = sb.channel('chat-' + k).on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages', filter: 'chat_id=eq.' + c.id }, function (pl) { handleRealtimeMessage(c.id, pl) }).on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'messages', filter: 'chat_id=eq.' + c.id }, function (pl) { handleMessageUpdate(c.id, pl) }).subscribe() }) }
        function subscribeToProfileChannels() { var oi = new Set(); chats.forEach(function (c) { if (c.otherId) oi.add(c.otherId) }); Object.keys(profileChannels).forEach(function (k) { if (!oi.has(k)) { sb.removeChannel(profileChannels[k]); delete profileChannels[k] } }); oi.forEach(function (uid) { if (profileChannels[uid]) return; profileChannels[uid] = sb.channel('prof-' + uid).on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'profiles', filter: 'id=eq.' + uid }, function (pl) { handleProfileChange(uid, pl) }).subscribe() }) }
        function setupRealtime() {
            destroyAllChannels(); setConnStatus('connecting'); reconnectAttempts = 0; var uid = myUid();
            globalChannel = sb.channel('global-' + uid)
                .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chat_members', filter: 'user_id=eq.' + uid }, function () { loadChats() })
                .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'notifications', filter: 'user_id=eq.' + uid }, function (pl) {
                    document.getElementById('notifBadge').style.display = 'flex'; document.getElementById('notifBadge').textContent = '!';
                    if (document.getElementById('notificationsModal').classList.contains('open')) loadNotifications();
                })
                .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'verification_requests' }, function () {
                    if (profile.user_id === EMOJI2_OWNER_ID) {
                        document.getElementById('notifBadge').style.display = 'flex'; document.getElementById('notifBadge').textContent = '!';
                        if (document.getElementById('notificationsModal').classList.contains('open')) loadNotifications();
                    }
                });
            globalChannel.subscribe(function (s) { if (s === 'SUBSCRIBED') { setConnStatus('connected'); reconnectAttempts = 0; setOnlineStatus(true) } else if (s === 'CHANNEL_ERROR' || s === 'TIMED_OUT') { setConnStatus('disconnected'); scheduleReconnect() } else if (s === 'CLOSED') { setConnStatus('disconnected') } });
            if (!visibilityBound) { visibilityBound = true; document.addEventListener('visibilitychange', function () { if (!authUid) return; if (document.hidden) setOnlineStatus(false); else { setOnlineStatus(true); if (!rtConnected) scheduleReconnect() } }) } if (!beforeUnloadBound) { beforeUnloadBound = true; window.addEventListener('beforeunload', function () { setOnlineStatus(false, true) }); window.addEventListener('pagehide', function () { setOnlineStatus(false, true) }) }
        }
        function scheduleReconnect() { if (reconnectTimer) return; reconnectAttempts++; setConnStatus('connecting'); reconnectTimer = setTimeout(function () { reconnectTimer = null; if (!authUid || rtConnected) return; setupRealtime(); subscribeToChatChannels(); subscribeToProfileChannels() }, getBackoffDelay()) }
        function closeChat() { var cv = document.getElementById('chatView'); cv.classList.remove('open'); cv.style.height = ''; cv.style.top = ''; cv.style.bottom = ''; document.getElementById('bar').style.display = 'flex'; destroyLottie('chatHeader'); document.getElementById('chatHeaderEmoji').style.display = 'none'; cur = null; curChatId = null; curChatTarget = null; cancelReply() }
        async function send() {
            var inp = document.getElementById('msgIn'), tx = inp.value.trim(); if (!tx || pendingSend) return; pendingSend = true; inp.value = ''; updBtn(); var uid = myUid(), now = new Date(), time = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0'); var a = document.getElementById('msgArea'); var es = a.querySelector('.empty-state'); if (es) a.innerHTML = '';

            var replyBlock = '';
            var replyDataToSend = null;
            if (currentReply) {
                replyDataToSend = {
                    id: currentReply.id,
                    text: currentReply.text,
                    name: currentReply.name
                };
                replyBlock = '<div class="msg-reply-preview" style="border-color:#fff"><div class="msg-reply-name">' + escHtml(currentReply.name) + '</div><div class="msg-reply-text">' + escHtml(currentReply.text) + '</div></div>';
            }

            var div = document.createElement('div'); div.className = 'msg-container'; div.style.alignItems = 'flex-end';

            div.dataset.mid = 'temp-' + Date.now();
            div.dataset.mtext = escAttr(tx);
            div.dataset.mname = escAttr(profile.name || 'You');
            div.setAttribute('ontouchstart', 'handleMsgTouchStart(event)');
            div.setAttribute('ontouchmove', 'handleMsgTouchMove(event)');
            div.setAttribute('ontouchend', 'handleMsgTouchEnd(event)');

            div.innerHTML = '<div class="swipe-reply-icon"><svg width="14" height="14" fill="none" stroke="#999" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg></div><div class="msg msg-out">' + replyBlock + '<span class="markdown">' + formatText(tx) + '</span></div><div class="msg-time" style="text-align:right;padding:0 4px">' + time + ' ' + getMsgStatusHtml('sent') + '</div>'; a.appendChild(div); a.scrollTop = a.scrollHeight;

            var msgObj = { chat_id: curChatId, sender_id: uid, text: tx, delivered: false, read: false };
            if (replyDataToSend) msgObj.reply_data = replyDataToSend;

            if (!curChatId && curChatTarget) {
                try {
                    var cr = await sb.from('chats').insert({}).select('id').single(); if (cr.error) { pendingSend = false; return } var nid = cr.data.id; var mr = await sb.from('chat_members').insert([{ chat_id: nid, user_id: uid }, { chat_id: nid, user_id: curChatTarget.uid }]); if (mr.error) { pendingSend = false; return } curChatId = nid; msgObj.chat_id = curChatId;
                    var sendRes = await sb.from('messages').insert(msgObj).select().single();
                    if (sendRes.data) {
                        // Replace temp message with real ID
                        var tempDiv = document.querySelector('[data-mid="temp-' + div.dataset.mid.replace('temp-', '') + '"]');
                        if (tempDiv) {
                            tempDiv.id = 'msg-' + sendRes.data.id;
                            tempDiv.dataset.mid = sendRes.data.id;
                        }
                    }
                    await loadChats(); cur = chats.find(function (c) { return c.id === nid }); curChatTarget = null
                } catch (e) { }
            }
            else if (curChatId) {
                sb.from('messages').insert(msgObj).select().single().then(function (sendRes) {
                    if (sendRes.data) {
                        // Replace temp message with real ID
                        var tempDiv = document.querySelector('[data-mid="temp-' + div.dataset.mid.replace('temp-', '') + '"]');
                        if (tempDiv) {
                            tempDiv.id = 'msg-' + sendRes.data.id;
                            tempDiv.dataset.mid = sendRes.data.id;
                        }
                    }
                });
            }
            var ci = chats.find(function (c) { return c.id === curChatId }); if (ci) { ci.lastMsg = tx; ci.time = time; ci.lastMsgOut = true; ci.lastMsgStatus = 'sent'; ci.lastMsgTimestamp = now.toISOString(); sortChats(); renderChatList(); cacheChats(chats) } pendingSend = false; cancelReply(); scrollToBottom()
        }
        function updBtn() { document.getElementById('sendBtn').classList.toggle('off', !document.getElementById('msgIn').value.trim()) }
        function escHtml(s) { if (!s) return ''; var d = document.createElement('div'); d.textContent = s; return d.innerHTML }
        function escAttr(s) { if (!s) return ''; return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
        function go(n) { document.querySelectorAll('.view').forEach(function (v) { v.classList.remove('active') }); document.getElementById('v-' + n).classList.add('active'); document.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.toggle('active', b.dataset.t === n) }); if (n === 'profile') { renderProfileEmoji() } else { destroyLottie('profile'); destroyLottie('profile2') } if (n === 'chats') { loadChatListEmojis() } else { destroyAllListEmojis() } }
        function openEmojiPreviewFor() { if (!_upEmojiData) return; showEmojiPreviewModal(_upEmojiData, _upEmojiOwner) }
        function openEmojiPreview(d, n) { var dd = d || profile.emojiData; var nn = n || profile.name || 'Username'; if (!dd) return; showEmojiPreviewModal(dd, nn) }
        function showEmojiPreviewModal(d, n) { document.getElementById('emojiPreviewOwner').textContent = n; var c = document.getElementById('emojiPreviewLottie'); c.innerHTML = ''; destroyLottie('preview'); document.getElementById('emojiPreviewModal').classList.add('open'); setTimeout(function () { emojiPreviewAnim = lottie.loadAnimation({ container: c, renderer: 'svg', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(d)) }) }, 80) }
        function closeEmojiPreview(e) { if (e && e.target !== document.getElementById('emojiPreviewModal')) return; document.getElementById('emojiPreviewModal').classList.remove('open'); destroyLottie('preview') }
        var verifyAnim = null, rejectId = null;
        function openVerifyPreview(data, name, isMe) {
            document.getElementById('verifyPreviewText').textContent = t('verifiedAccount', { name: name });
            // Hide button if I am already verified (profile.verified) or if I am viewing myself (isMe)
            // Actually logic: If I am verified, I don't need the button ever. If I am not, I see it on verified profiles.
            var showBtn = !profile.verified;
            document.getElementById('verifyHowToBtn').style.display = showBtn ? 'block' : 'none';

            var c = document.getElementById('verifyPreviewEmoji'); c.innerHTML = '';
            if (verifyAnim) verifyAnim.destroy();
            document.getElementById('verifyPreviewModal').classList.add('open');
            if (data) setTimeout(function () { verifyAnim = lottie.loadAnimation({ container: c, renderer: 'svg', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(data)) }) }, 100);
        }
        function closeVerifyPreview(e) { if (e && e.target !== document.getElementById('verifyPreviewModal')) return; document.getElementById('verifyPreviewModal').classList.remove('open'); if (verifyAnim) verifyAnim.destroy() }
        function openVerifyRequest() {
            if (profile.verified) return;
            closeVerifyPreview();
            document.getElementById('verifyReason').value = '';
            document.getElementById('verifyCounter').textContent = '0/500';
            document.getElementById('verifyRequestModal').classList.add('open');
        }
        document.getElementById('verifyReason').addEventListener('input', function () { document.getElementById('verifyCounter').textContent = this.value.length + '/500' });
        async function submitVerification() {
            var r = document.getElementById('verifyReason').value.trim();
            if (r.length < 10) { document.getElementById('verifyReason').style.borderColor = '#e55'; setTimeout(function () { document.getElementById('verifyReason').style.borderColor = '' }, 2000); return }
            var btn = document.querySelector('#verifyRequestModal .btn-black');
            if (btn.disabled) return;
            btn.disabled = true; btn.style.opacity = '.5'; btn.textContent = t('sending');
            var ck = await sb.from('verification_requests').select('id').eq('user_id', myUid()).eq('status', 'pending').maybeSingle();
            if (ck.data) { btn.disabled = false; btn.style.opacity = ''; btn.textContent = t('send'); document.getElementById('verifyReason').style.borderColor = '#e55'; setTimeout(function () { document.getElementById('verifyReason').style.borderColor = '' }, 2000); return }
            var res = await sb.from('verification_requests').insert({ user_id: myUid(), reason: r, status: 'pending' });
            if (res.error) { btn.disabled = false; btn.style.opacity = ''; btn.textContent = t('send'); return }
            document.getElementById('verifyRequestModal').classList.remove('open');
            btn.disabled = false; btn.style.opacity = ''; btn.textContent = t('send');
        }
        async function openNotifications() {
            document.getElementById('notificationsModal').classList.add('open');
            loadNotifications();
            sb.from('notifications').update({ read: true }).eq('user_id', myUid()).then(function () { document.getElementById('notifBadge').style.display = 'none' });
        }
        async function loadNotifications() {
            var uid = myUid();
            var list = document.getElementById('notifList');
            list.innerHTML = '<div class="loading-spinner" style="margin:20px auto"></div>';
            if (profile.user_id === EMOJI2_OWNER_ID) {
                var res = await sb.from('verification_requests').select('*').eq('status', 'pending').order('created_at', { ascending: false });
                if (!res.data || !res.data.length) { list.innerHTML = '<div class="empty-state" style="padding:40px 0"><div class="empty-desc">' + t('noRequests') + '</div></div>'; return }
                var userIds = res.data.map(function (r) { return r.user_id });
                var pr = await sb.from('profiles').select('id,name').in('id', userIds);
                var nameMap = {};
                if (pr.data) pr.data.forEach(function (p) { nameMap[p.id] = p.name });
                list.innerHTML = res.data.map(function (r) {
                    var nm = nameMap[r.user_id] || t('user');
                    return '<div class="notif-item"><div class="notif-title">' + t('requestFrom', { name: escHtml(nm) }) + '</div><div class="notif-msg">' + escHtml(r.reason) + '</div><div class="notif-actions"><button class="btn-sm btn-black" onclick="approveRequest(\'' + r.id + '\',\'' + r.user_id + '\')">' + t('accept') + '</button><button class="btn-sm btn-ghost" onclick="rejectRequest(\'' + r.id + '\')">' + t('reject') + '</button></div></div>';
                }).join('');
            } else {
                var res = await sb.from('notifications').select('*').eq('user_id', uid).order('created_at', { ascending: false });
                if (!res.data || !res.data.length) { list.innerHTML = '<div class="empty-state" style="padding:40px 0"><div class="empty-desc">' + t('noNotifications') + '</div></div>'; return }
                list.innerHTML = res.data.map(function (n) {
                    return '<div class="notif-item"><div class="notif-title">' + escHtml(n.title) + '</div><div class="notif-msg">' + escHtml(n.message) + '</div></div>';
                }).join('');
            }
        }
        var _approving = false, _rejecting = false;
        async function approveRequest(rid, uid) {
            if (_approving) return; _approving = true;
            var el = event.target; el.disabled = true; el.textContent = '...';
            try {
                var updates = { verified: true };
                if (profile.emoji2_url) updates.emoji2_url = profile.emoji2_url;
                var r1 = await sb.from('verification_requests').update({ status: 'approved' }).eq('id', rid);
                if (r1.error) throw r1.error;
                var r2 = await sb.from('profiles').update(updates).eq('id', uid);
                if (r2.error) throw r2.error;
                await sb.from('notifications').insert({ user_id: uid, type: 'system', title: t('verification'), message: t('verifyApproved') });
                await sb.from('verification_requests').delete().eq('id', rid);
                loadNotifications();
            } catch (e) {
                alert(t('errorPrefix') + e.message);
            } finally {
                _approving = false;
            }
        }
        function rejectRequest(rid) { rejectId = rid; document.getElementById('rejectReasonModal').classList.add('open') }
        async function submitReject() {
            if (_rejecting) return; _rejecting = true;
            var r = document.getElementById('rejectReason').value.trim();
            if (!r) { _rejecting = false; return }
            var btn = document.querySelector('#rejectReasonModal .btn-black');
            btn.disabled = true; btn.textContent = '...';
            try {
                var res = await sb.from('verification_requests').select('user_id').eq('id', rejectId).single();
                if (res.data) {
                    await sb.from('notifications').insert({ user_id: res.data.user_id, type: 'system', title: t('verification'), message: t('verifyRejected', { reason: r }) });
                    await sb.from('verification_requests').delete().eq('id', rejectId);
                }
                document.getElementById('rejectReasonModal').classList.remove('open');
                loadNotifications();
            } catch (e) {
                alert(e.message);
            } finally {
                btn.disabled = false; btn.textContent = t('send');
                _rejecting = false;
            }
        }

        async function init() {
            try {
                loadLang();
                applyI18n();
                showLoading(); loadCache(); setTimeout(hideLoading, 5000);
                var res = await sb.auth.getSession();
                if (res.data.session && res.data.session.user) {
                    authUid = res.data.session.user.id; cachedToken = res.data.session.access_token;
                    if (cache.profile) applyCacheToProfile(); hideAuth(); hideLoading(); loadCachedChats();
                    await ensureProfile(authUid);
                    await Promise.all([loadProfile(), loadChats()]);
                    setupRealtime(); loadNotifications()
                } else {
                    clearCache(); profile = { name: 'Username', username: null, bio: '', user_id: null, avatar_url: null, banner_url: null, emoji_url: null, emojiData: null, emoji2_url: null, emoji2Data: null };
                    applyProfile(); hideLoading(); showAuth()
                }
            } catch (e) { hideLoading(); showAuth() }
            sb.auth.onAuthStateChange(function (ev, ses) { if (ses) cachedToken = ses.access_token; else cachedToken = null; if (ev === 'SIGNED_OUT') { clearCache(); showAuth() } })
        }
        init();
        var _vpRaf = false, _scrollFixId = null, _msgInputFocused = false;
        function _forceScroll() { window.scrollTo(0, 0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0 }
        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', function () {
                scrollToBottom();
                if (_vpRaf) return; _vpRaf = true; requestAnimationFrame(function () { _vpRaf = false; if (_msgInputFocused) _forceScroll() })
            });
            window.visualViewport.addEventListener('scroll', function () { if (_vpRaf) return; _vpRaf = true; requestAnimationFrame(function () { _vpRaf = false; if (_msgInputFocused) _forceScroll() }) })
        }
        document.getElementById('msgIn').addEventListener('focus', function () { _msgInputFocused = true; _forceScroll(); scrollToBottom(); });
        document.getElementById('msgIn').addEventListener('click', function () { scrollToBottom(); });
        document.getElementById('msgIn').addEventListener('blur', function () { _msgInputFocused = false; if (_scrollFixId) { clearInterval(_scrollFixId); _scrollFixId = null } _forceScroll() });

        // ==================== QUOTE SELECTION ====================
        var quoteTooltip = document.getElementById('quoteTooltip');
        var _quoteData = null;
        var _quoteHideTimer = null;

        function getSelectedQuote() {
            var sel = window.getSelection();
            if (!sel || sel.isCollapsed || !sel.toString().trim()) return null;
            var text = sel.toString().trim();
            var node = sel.anchorNode;
            var msgContainer = null;
            while (node && node !== document.body) {
                if (node.nodeType === 1 && node.classList && node.classList.contains('msg-container')) {
                    msgContainer = node; break;
                }
                node = node.parentNode;
            }
            if (!msgContainer) return null;
            return {
                selectedText: text,
                msgId: msgContainer.dataset.mid,
                fullText: msgContainer.dataset.mtext,
                senderName: msgContainer.dataset.mname
            };
        }

        function showQuoteTooltip(x, y) {
            quoteTooltip.style.left = Math.min(x, window.innerWidth - 100) + 'px';
            quoteTooltip.style.top = Math.max(y - 44, 8) + 'px';
            quoteTooltip.classList.add('show');
        }

        function hideQuoteTooltip() {
            quoteTooltip.classList.remove('show');
            _quoteData = null;
        }

        function handleQuoteClick(e) {
            e.preventDefault();
            e.stopPropagation();
            if (!_quoteData) return;
            currentReply = {
                id: _quoteData.msgId,
                text: _quoteData.selectedText,
                name: _quoteData.senderName
            };
            document.getElementById('replyBar').style.display = 'flex';
            document.getElementById('replyName').textContent = _quoteData.senderName;
            document.getElementById('replyText').textContent = '«' + _quoteData.selectedText + '»';
            document.getElementById('msgIn').focus();
            window.getSelection().removeAllRanges();
            hideQuoteTooltip();
            scrollToBottom();
        }

        document.addEventListener('selectionchange', function () {
            if (_quoteHideTimer) { clearTimeout(_quoteHideTimer); _quoteHideTimer = null }
            var q = getSelectedQuote();
            if (q) {
                _quoteData = q;
                var sel = window.getSelection();
                if (sel.rangeCount > 0) {
                    var rect = sel.getRangeAt(0).getBoundingClientRect();
                    showQuoteTooltip(rect.left + (rect.width / 2) - 50, rect.top - 10);
                }
            } else {
                _quoteHideTimer = setTimeout(hideQuoteTooltip, 200);
            }
        });

        document.addEventListener('contextmenu', function (e) {
            if (e.target.closest('.msg') && window.getSelection().toString().trim()) {
                e.preventDefault();
                e.stopPropagation();
            }
        });

        // Dismiss selection on interaction
        function dismissQuote(e) {
            if (!e.target.closest('#quoteTooltip') && window.getSelection().toString()) {
                window.getSelection().removeAllRanges();
                hideQuoteTooltip();
            }
        }

        document.addEventListener('mousedown', dismissQuote);
        document.addEventListener('touchstart', dismissQuote, { passive: true });

        document.getElementById('msgArea').addEventListener('scroll', function () {
            if (window.getSelection().toString()) {
                window.getSelection().removeAllRanges();
                hideQuoteTooltip();
            }
        }, { passive: true });

        document.getElementById('msgArea').addEventListener('touchstart', function () {
            // On touch start (scrolling), allow clearing if needed, but mainly handled by scroll event
        }, { passive: true });
        // ==================== END QUOTE ====================
