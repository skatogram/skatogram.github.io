// ==================== UI HELPERS ====================

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
function generateUserId() { var id = ''; for (var i = 0; i < 8; i++) id += Math.floor(Math.random() * 10); return id }

function escHtml(s) { if (!s) return ''; var d = document.createElement('div'); d.textContent = s; return d.innerHTML }
function escAttr(s) { if (!s) return ''; return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

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

function go(n) {
    document.querySelectorAll('.view').forEach(function (v) { v.classList.remove('active') });
    document.getElementById('v-' + n).classList.add('active');
    document.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.toggle('active', b.dataset.t === n) });
    if (n === 'profile') { renderProfileEmoji() } else { destroyLottie('profile'); destroyLottie('profile2') }
    if (n === 'chats') { loadChatListEmojis() } else { destroyAllListEmojis() }
}

function getMsgStatusHtml(s) {
    if (s === 'read') return '<span class="msg-status read">' + SVG_CHECK_TWO + '</span>';
    if (s === 'delivered') return '<span class="msg-status">' + SVG_CHECK_TWO + '</span>';
    return '<span class="msg-status">' + SVG_CHECK_ONE + '</span>';
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

function updBioCounter() { document.getElementById('bioCounter').textContent = document.getElementById('editBio').value.length + '/40' }
function updBtn() { document.getElementById('sendBtn').classList.toggle('off', !document.getElementById('msgIn').value.trim()) }
function scrollToBottom() { var a = document.getElementById('msgArea'); if (a) a.scrollTop = a.scrollHeight; }

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

// Cache helpers
function saveCache() { try { localStorage.setItem('mc', JSON.stringify(cache)) } catch (e) { } }
function loadCache() { try { var d = localStorage.getItem('mc'); if (d) cache = JSON.parse(d) } catch (e) { } }
function updateCache(p) { cache.profile = { name: p.name, username: p.username, bio: p.bio, user_id: p.user_id }; cache.avatarUrl = p.avatar_url; cache.bannerUrl = p.banner_url; cache.emojiUrl = p.emoji_url; cache.emoji2Url = p.emoji2_url; saveCache() }
function clearCache() { cache = { profile: null, avatarUrl: null, bannerUrl: null, emojiUrl: null, emojiData: null, emoji2Url: null, emoji2Data: null, chats: null }; try { localStorage.removeItem('mc') } catch (e) { } }
function cacheChats(c) { try { cache.chats = c.map(function (ch) { return { id: ch.id, otherId: ch.otherId, name: ch.name, initials: ch.initials, online: ch.online, unread: ch.unread, lastMsg: ch.lastMsg, lastMsgOut: ch.lastMsgOut, lastMsgStatus: ch.lastMsgStatus, time: ch.time, avatarUrl: ch.avatarUrl, lastSeen: ch.lastSeen, emojiUrl: ch.emojiUrl || null, lastMsgTimestamp: ch.lastMsgTimestamp || null } }); saveCache() } catch (e) { } }
function loadCachedChats() { if (cache.chats && cache.chats.length) { chats = cache.chats; chatIdsSet = new Set(chats.map(function (c) { return c.id })); sortChats(); renderChatList() } }
function sortChats() { chats.sort(function (a, b) { var ta = a.lastMsgTimestamp ? new Date(a.lastMsgTimestamp).getTime() : 0; var tb = b.lastMsgTimestamp ? new Date(b.lastMsgTimestamp).getTime() : 0; return tb - ta }) }
function applyCacheToProfile() { if (!cache.profile) return; profile.name = cache.profile.name || 'User'; profile.username = cache.profile.username || null; profile.bio = cache.profile.bio || ''; profile.user_id = cache.profile.user_id || null; profile.avatar_url = cache.avatarUrl || null; profile.banner_url = cache.bannerUrl || null; profile.emoji_url = cache.emojiUrl || null; profile.emoji2_url = cache.emoji2Url || null; hasUsername = !!cache.profile.username; if (cache.emojiData) profile.emojiData = cache.emojiData; if (cache.emoji2Data) profile.emoji2Data = cache.emoji2Data; applyProfile() }
