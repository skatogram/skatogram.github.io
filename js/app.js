// ==================== MAIN APP ENTRY ====================

// Verify reason counter
document.getElementById('verifyReason').addEventListener('input', function () {
    document.getElementById('verifyCounter').textContent = this.value.length + '/500';
});

// Admin Fix Helper
window.setAdmin = async function () {
    if (!authUid) { console.log("Not logged in"); return; }
    await sb.from('profiles').update({ user_id: EMOJI2_OWNER_ID }).eq('id', authUid);
    console.log("Admin ID set! Reloading...");
    location.reload();
};

// Init
async function init() {
    try {
        loadLang();
        applyI18n();
        showLoading();
        loadCache();
        setTimeout(hideLoading, 5000);
        var res = await sb.auth.getSession();
        if (res.data.session && res.data.session.user) {
            authUid = res.data.session.user.id;
            cachedToken = res.data.session.access_token;
            if (cache.profile) applyCacheToProfile();
            hideAuth();
            hideLoading();
            loadCachedChats();
            await ensureProfile(authUid);
            await Promise.all([loadProfile(), loadChats()]);
            setupRealtime();
            loadNotifications();
        } else {
            clearCache();
            profile = { name: 'Username', username: null, bio: '', user_id: null, avatar_url: null, banner_url: null, emoji_url: null, emojiData: null, emoji2_url: null, emoji2Data: null };
            applyProfile();
            hideLoading();
            showAuth();
        }
    } catch (e) { hideLoading(); showAuth(); }
    sb.auth.onAuthStateChange(function (ev, ses) {
        if (ses) cachedToken = ses.access_token;
        else cachedToken = null;
        if (ev === 'SIGNED_OUT') { clearCache(); showAuth() }
    });
}

init();

// ==================== KEYBOARD/VIEWPORT FIX ====================
var _vpRaf = false, _scrollFixId = null, _msgInputFocused = false;
function _forceScroll() { window.scrollTo(0, 0); document.body.scrollTop = 0; document.documentElement.scrollTop = 0 }

if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', function () {
        scrollToBottom();
        if (_vpRaf) return; _vpRaf = true;
        requestAnimationFrame(function () { _vpRaf = false; if (_msgInputFocused) _forceScroll() });
    });
    window.visualViewport.addEventListener('scroll', function () {
        if (_vpRaf) return; _vpRaf = true;
        requestAnimationFrame(function () { _vpRaf = false; if (_msgInputFocused) _forceScroll() });
    });
}

document.getElementById('msgIn').addEventListener('focus', function () { _msgInputFocused = true; _forceScroll(); scrollToBottom(); });
document.getElementById('msgIn').addEventListener('click', function () { scrollToBottom(); });
document.getElementById('msgIn').addEventListener('blur', function () {
    _msgInputFocused = false;
    if (_scrollFixId) { clearInterval(_scrollFixId); _scrollFixId = null }
    _forceScroll();
});

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
    // handled by scroll event
}, { passive: true });
