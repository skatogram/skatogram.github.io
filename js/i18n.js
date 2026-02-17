// ==================== i18n SYSTEM ====================
var translations = {
    ru: {
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
        chats: 'Чаты',
        settings: 'Настройки',
        profileTab: 'Профиль',
        notifications: 'Уведомления',
        privacy: 'Конфиденциальность',
        language: 'Язык',
        logout: 'Выйти',
        langRussian: 'Русский',
        langEnglish: 'English',
        online: 'В сети',
        aboutMe: 'О себе',
        username: 'Имя пользователя',
        loading: 'Загрузка',
        accountVerified: 'Аккаунт официально подтверждён',
        accountStatus: 'Статус аккаунта',
        writeMessage: 'Написать',
        msgSending: 'Сообщение ещё отправляется',
        msgDeleted: 'Сообщение не найдено или удалено',
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
        searchByUsername: 'Поиск по юзернейму',
        noMessages: 'Нет сообщений',
        writeFirstMessage: 'Напишите первое сообщение',
        noChats: 'Нет чатов',
        findUserByUsername: 'Найдите пользователя<br>через поиск по юзернейму',
        noChatsMsg: 'Нет сообщений',
        messagePlaceholder: 'Сообщение...',
        nothingFound: 'Ничего не найдено',
        user: 'Пользователь',
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
        close: 'Закрыть',
        howToGet: 'Как получить',
        request: 'Заявка',
        send: 'Отправить',
        verifyDescription: 'Опишите, почему ваш аккаунт должен быть официально подтверждён. Укажите ссылки на ваши ресурсы или причины вашей популярности/значимости.',
        reasonPlaceholder: 'Причина...',
        verifiedAccount: '{name} — подтверждённый аккаунт',
        sending: 'Отправка...',
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
        thisIsYou: 'Это ваш профиль',
        noSuchAccount: 'Нет аккаунта с таким именем',
        msgNotFound: 'Сообщение не найдено',
        fileCorrupted: 'Файл повреждён',
        formatNotRecognized: 'Формат не распознан',
        invalidData: 'Некорректные данные',
        notLottie: 'Не Lottie-анимация',
        noLayers: 'Нет слоёв анимации',
        gifNotSupported: 'GIF не поддерживается',
        quote: 'Цитата',
        langChanged: 'Язык изменён',
        botCheck: 'Проверка...',
        botFailed: 'Проверка не пройдена, попробуйте снова',
        darkMode: 'Темная тема'
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
        langChanged: 'Language changed',
        botCheck: 'Checking...',
        botFailed: 'Verification failed, try again',
        darkMode: 'Dark Mode'
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
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });
    var sub = document.getElementById('langSubtitle');
    if (sub) sub.textContent = currentLang === 'ru' ? 'Русский' : 'English';
    updateAuthTexts();
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
    applyProfile();
    renderProfileEmoji();
    showToast(t('langChanged'));
    setTimeout(closeLangModal, 300);
}
