// ==================== ANTI-BOT SYSTEM ====================
// Proof-of-Work + Behavioral Analysis + Honeypot

var AntiBot = (function () {
    var _mouseMoves = 0;
    var _keyPresses = 0;
    var _scrolls = 0;
    var _clicks = 0;
    var _touchEvents = 0;
    var _startTime = Date.now();
    var _mousePositions = [];
    var _verified = false;
    var _powSolved = false;
    var _behaviorScore = 0;

    // Собираем события поведения
    function _trackMouse(e) {
        _mouseMoves++;
        if (_mousePositions.length < 50) {
            _mousePositions.push({ x: e.clientX, y: e.clientY, t: Date.now() });
        }
    }
    function _trackKey() { _keyPresses++; }
    function _trackScroll() { _scrolls++; }
    function _trackClick() { _clicks++; }
    function _trackTouch() { _touchEvents++; }

    // Запускаем трекинг
    document.addEventListener('mousemove', _trackMouse, { passive: true });
    document.addEventListener('keydown', _trackKey, { passive: true });
    document.addEventListener('scroll', _trackScroll, { passive: true });
    document.addEventListener('click', _trackClick, { passive: true });
    document.addEventListener('touchstart', _trackTouch, { passive: true });

    // Proof-of-Work: найти nonce, чтобы SHA-256(challenge + nonce) начинался с N нулей
    async function _sha256(text) {
        var encoder = new TextEncoder();
        var data = encoder.encode(text);
        var hash = await crypto.subtle.digest('SHA-256', data);
        var arr = Array.from(new Uint8Array(hash));
        return arr.map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
    }

    // Генерируем уникальный challenge на основе времени + рандома
    function _generateChallenge() {
        var r = crypto.getRandomValues(new Uint8Array(16));
        var hex = Array.from(r).map(function (b) { return b.toString(16).padStart(2, '0'); }).join('');
        return Date.now().toString(36) + '-' + hex;
    }

    // Решаем PoW: ищем nonce, чтобы hash начинался с '0000' (4 нуля = ~65536 итераций)
    async function solvePoW(difficulty) {
        difficulty = difficulty || 4;
        var challenge = _generateChallenge();
        var prefix = '0'.repeat(difficulty);
        var nonce = 0;
        var maxIterations = 1000000;

        while (nonce < maxIterations) {
            var hash = await _sha256(challenge + ':' + nonce);
            if (hash.startsWith(prefix)) {
                _powSolved = true;
                return {
                    challenge: challenge,
                    nonce: nonce,
                    hash: hash,
                    iterations: nonce,
                    time: Date.now() - _startTime
                };
            }
            nonce++;
            // Даём браузеру дышать каждые 1000 итераций
            if (nonce % 1000 === 0) {
                await new Promise(function (r) { setTimeout(r, 0); });
            }
        }
        return null; // Не смогли решить
    }

    // Анализ поведения: считаем score
    function _analyzeBehavior() {
        var timeSpent = (Date.now() - _startTime) / 1000; // секунды
        var score = 0;

        // Время на странице (бот обычно действует мгновенно)
        if (timeSpent > 2) score += 10;
        if (timeSpent > 5) score += 10;
        if (timeSpent > 10) score += 5;

        // Движения мыши (бот не двигает мышь или двигает по прямой)
        if (_mouseMoves > 3) score += 10;
        if (_mouseMoves > 10) score += 5;

        // Нажатия клавиш (ввод пароля/email)
        if (_keyPresses > 5) score += 10;
        if (_keyPresses > 15) score += 5;

        // Клики
        if (_clicks > 1) score += 5;

        // Тач-события (мобильные)
        if (_touchEvents > 0) score += 15;

        // Скроллы
        if (_scrolls > 0) score += 5;

        // Анализ траектории мыши (прямая линия = бот)
        if (_mousePositions.length >= 5) {
            var hasVariation = false;
            for (var i = 2; i < _mousePositions.length; i++) {
                var dx1 = _mousePositions[i].x - _mousePositions[i - 1].x;
                var dy1 = _mousePositions[i].y - _mousePositions[i - 1].y;
                var dx2 = _mousePositions[i - 1].x - _mousePositions[i - 2].x;
                var dy2 = _mousePositions[i - 1].y - _mousePositions[i - 2].y;
                // Разный угол значит не прямая
                if (Math.abs(dx1 * dy2 - dy1 * dx2) > 100) {
                    hasVariation = true;
                    break;
                }
            }
            if (hasVariation) score += 15;
        }

        _behaviorScore = score;
        return score;
    }

    // Проверка timing: слишком быстрое заполнение формы = бот
    function _checkTiming() {
        var elapsed = Date.now() - _startTime;
        // Если прошло меньше 1.5 сек — подозрительно
        return elapsed > 1500;
    }

    // Генерация токена из всех проверок
    function _generateToken(powResult) {
        var data = {
            pow: powResult ? powResult.hash.substring(0, 16) : null,
            bs: _behaviorScore,
            mm: _mouseMoves,
            kp: _keyPresses,
            te: _touchEvents,
            ts: Date.now(),
            r: Math.random().toString(36).substring(2, 8)
        };
        // Простая обфускация (не криптографическая, но достаточная для клиента)
        var json = JSON.stringify(data);
        var encoded = btoa(json).split('').reverse().join('');
        return encoded;
    }

    // Главная функция проверки
    async function verify() {
        var score = _analyzeBehavior();
        var timingOk = _checkTiming();

        // Минимальный порог
        if (score < 15 && !timingOk) {
            return { passed: false, reason: 'behavior', score: score };
        }

        // Решаем PoW (3 нуля = легче для мобильных, ~4096 итераций)
        var powResult = await solvePoW(3);
        if (!powResult) {
            return { passed: false, reason: 'pow_failed' };
        }

        var token = _generateToken(powResult);

        _verified = true;
        return {
            passed: true,
            token: token,
            score: score,
            powIterations: powResult.iterations
        };
    }

    // Быстрая проверка (без PoW, только поведение)
    function quickCheck() {
        var score = _analyzeBehavior();
        return score >= 10;
    }

    // Сброс (после logout)
    function reset() {
        _mouseMoves = 0;
        _keyPresses = 0;
        _scrolls = 0;
        _clicks = 0;
        _touchEvents = 0;
        _startTime = Date.now();
        _mousePositions = [];
        _verified = false;
        _powSolved = false;
        _behaviorScore = 0;
    }

    return {
        verify: verify,
        quickCheck: quickCheck,
        reset: reset,
        isVerified: function () { return _verified; },
        getScore: function () { return _analyzeBehavior(); }
    };
})();
