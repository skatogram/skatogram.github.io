// ==================== EMOJI SYSTEM ====================

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

async function fetchEmojiData(url) {
    if (!url) return null;
    if (emojiCache[url]) return emojiCache[url];
    var cached = await getEmojiFromDB(url);
    if (cached) { emojiCache[url] = cached; return cached; }
    try {
        var r = await fetch(url);
        var b = await r.arrayBuffer();
        var d = parseLottie(b);
        emojiCache[url] = d;
        saveEmojiToDB(url, d);
        return d;
    } catch (e) { return null }
}

function parseLottie(buf) {
    var json, u8 = new Uint8Array(buf);
    if (u8[0] === 0x1f && u8[1] === 0x8b) {
        try { json = JSON.parse(pako.inflate(u8, { to: 'string' })) }
        catch (e) { throw new Error(t('fileCorrupted')) }
    } else {
        try { json = JSON.parse(new TextDecoder().decode(u8)) }
        catch (e) {
            try { json = JSON.parse(pako.inflate(u8, { to: 'string' })) }
            catch (e2) { throw new Error(t('formatNotRecognized')) }
        }
    }
    if (!json || typeof json !== 'object') throw new Error(t('invalidData'));
    if (!json.v && !json.layers) throw new Error(t('notLottie'));
    if (!json.layers || !Array.isArray(json.layers)) throw new Error(t('noLayers'));
    return json;
}

function renderInlineEmoji(c, d, s) {
    if (!c || !d) return null;
    c.innerHTML = '';
    c.style.display = 'inline-block';
    c.style.width = s + 'px';
    c.style.height = s + 'px';
    return lottie.loadAnimation({ container: c, renderer: 'canvas', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(d)) });
}

function destroyLottie(w) {
    if (w === 'profile' && profileEmojiAnim) { profileEmojiAnim.destroy(); profileEmojiAnim = null }
    if (w === 'profile2' && profileEmoji2Anim) { profileEmoji2Anim.destroy(); profileEmoji2Anim = null }
    if (w === 'edit' && editEmojiAnim) { editEmojiAnim.destroy(); editEmojiAnim = null }
    if (w === 'preview' && emojiPreviewAnim) { emojiPreviewAnim.destroy(); emojiPreviewAnim = null }
    if (w === 'up' && upEmojiAnim) { upEmojiAnim.destroy(); upEmojiAnim = null }
    if (w === 'up2' && upEmoji2Anim) { upEmoji2Anim.destroy(); upEmoji2Anim = null }
    if (w === 'chatHeader' && chatHeaderEmojiAnim) { chatHeaderEmojiAnim.destroy(); chatHeaderEmojiAnim = null }
}

function destroyAllListEmojis() {
    chatListEmojiAnims.forEach(function (a) { try { a.destroy() } catch (e) { } });
    chatListEmojiAnims = [];
    searchEmojiAnims.forEach(function (a) { try { a.destroy() } catch (e) { } });
    searchEmojiAnims = [];
}

function loadChatListEmojis() {
    chatListEmojiAnims.forEach(function (a) { try { a.destroy() } catch (e) { } });
    chatListEmojiAnims = [];
    chats.forEach(function (c) {
        if (c.emojiUrl) {
            var el = document.getElementById('chat-emoji-' + c.id);
            if (el) fetchEmojiData(c.emojiUrl).then(function (d) {
                if (!d) return;
                var a = renderInlineEmoji(el, d, 16);
                if (a) chatListEmojiAnims.push(a);
            })
        }
    });
}

function loadSearchEmojis(results) {
    searchEmojiAnims.forEach(function (a) { try { a.destroy() } catch (e) { } });
    searchEmojiAnims = [];
    results.forEach(function (u, i) {
        if (u.emoji_url) {
            var el = document.getElementById('search-emoji-' + i);
            if (el) fetchEmojiData(u.emoji_url).then(function (d) {
                if (!d) return;
                var a = renderInlineEmoji(el, d, 16);
                if (a) searchEmojiAnims.push(a);
            })
        }
    });
}

function loadChatHeaderEmoji(url) {
    destroyLottie('chatHeader');
    var el = document.getElementById('chatHeaderEmoji');
    el.innerHTML = '';
    el.style.display = 'none';
    if (!url) return;
    fetchEmojiData(url).then(function (d) {
        if (!d) return;
        el.style.display = 'inline-block';
        chatHeaderEmojiAnim = lottie.loadAnimation({ container: el, renderer: 'canvas', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(d)) });
    });
}

function fileToArrayBuffer(f) {
    return new Promise(function (r, j) {
        var rd = new FileReader();
        rd.onload = function () { r(rd.result) };
        rd.onerror = j;
        rd.readAsArrayBuffer(f);
    });
}

function showEditEmojiStatic(d) {
    var c = document.getElementById('editEmojiPreview'), r = document.getElementById('emojiResultRow');
    destroyLottie('edit');
    c.innerHTML = '';
    if (d && d !== '__remove__') {
        r.style.display = 'flex';
        document.getElementById('emojiStatusText').textContent = t('emojiLoaded');
        editEmojiAnim = lottie.loadAnimation({ container: c, renderer: 'canvas', loop: false, autoplay: false, animationData: JSON.parse(JSON.stringify(d)) });
        editEmojiAnim.addEventListener('DOMLoaded', function () { editEmojiAnim.goToAndStop(0, true) });
    } else { r.style.display = 'none' }
}

function removeEmoji() {
    tempEmojiData = '__remove__';
    tempEmojiFile = null;
    destroyLottie('edit');
    document.getElementById('editEmojiPreview').innerHTML = '';
    document.getElementById('emojiResultRow').style.display = 'none';
}

async function handleEmojiUpload(e) {
    var f = e.target.files[0];
    if (!f) return;
    try {
        var b = await fileToArrayBuffer(f);
        var p = parseLottie(b);
        tempEmojiData = p;
        tempEmojiFile = f;
        showEditEmojiStatic(p);
    } catch (err) { alert(t('errorPrefix') + err.message) }
    e.target.value = '';
}

// Emoji preview modals
function openEmojiPreviewFor() {
    if (!_upEmojiData) return;
    showEmojiPreviewModal(_upEmojiData, _upEmojiOwner);
}

function openEmojiPreview(d, n) {
    var dd = d || profile.emojiData;
    var nn = n || profile.name || 'Username';
    if (!dd) return;
    showEmojiPreviewModal(dd, nn);
}

function showEmojiPreviewModal(d, n) {
    document.getElementById('emojiPreviewOwner').textContent = n;
    var c = document.getElementById('emojiPreviewLottie');
    c.innerHTML = '';
    destroyLottie('preview');
    document.getElementById('emojiPreviewModal').classList.add('open');
    setTimeout(function () {
        emojiPreviewAnim = lottie.loadAnimation({ container: c, renderer: 'svg', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(d)) });
    }, 80);
}

function closeEmojiPreview(e) {
    if (e && e.target !== document.getElementById('emojiPreviewModal')) return;
    document.getElementById('emojiPreviewModal').classList.remove('open');
    destroyLottie('preview');
}
