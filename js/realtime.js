// ==================== REALTIME & USER PROFILES ====================

function handleRealtimeMessage(cid, pl) {
    var m = pl.new; if (!m) return;
    var uid = myUid(), io = String(m.sender_id) === uid;
    if (!io) {
        if (curChatId === cid) {
            var d = new Date(m.created_at), ti = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
            var a = document.getElementById('msgArea');
            var es = a.querySelector('.empty-state');
            if (es) a.innerHTML = '';

            var replyBlock = '';
            if (m.reply_data && m.reply_data.text) {
                replyBlock = '<div class="msg-reply-preview" onclick="event.stopPropagation();scrollToMsg(\'' + m.reply_data.id + '\')"><div class="msg-reply-name">' + escHtml(m.reply_data.name) + '</div><div class="msg-reply-text">' + escHtml(m.reply_data.text) + '</div></div>';
            }

            var div = document.createElement('div');
            div.className = 'msg-container';
            div.style.alignItems = 'flex-start';
            div.id = 'msg-' + m.id;
            var senderName = cur ? cur.name : 'User';
            div.dataset.mid = m.id;
            div.dataset.mtext = escAttr(m.text);
            div.dataset.mname = escAttr(senderName);
            div.setAttribute('ontouchstart', 'handleMsgTouchStart(event)');
            div.setAttribute('ontouchmove', 'handleMsgTouchMove(event)');
            div.setAttribute('ontouchend', 'handleMsgTouchEnd(event)');
            div.innerHTML = '<div class="swipe-reply-icon"><svg width="14" height="14" fill="none" stroke="#999" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg></div><div class="msg msg-in">' + replyBlock + '<span class="markdown">' + formatText(m.text) + '</span></div><div class="msg-time" style="text-align:left;padding:0 4px">' + ti + '</div>';
            a.appendChild(div);
            a.scrollTop = a.scrollHeight;
            sb.from('messages').update({ read: true, delivered: true }).eq('id', m.id).then(function () { });
        } else {
            sb.from('messages').update({ delivered: true }).eq('id', m.id).then(function () { });
        }
    }
    var ci = chats.find(function (c) { return c.id === cid });
    if (ci) {
        var d2 = new Date(m.created_at);
        ci.lastMsg = m.text;
        ci.time = String(d2.getHours()).padStart(2, '0') + ':' + String(d2.getMinutes()).padStart(2, '0');
        ci.lastMsgOut = io;
        ci.lastMsgTimestamp = m.created_at;
        if (io) ci.lastMsgStatus = 'sent';
        if (!io && curChatId !== cid) ci.unread = (ci.unread || 0) + 1;
        if (!io && curChatId === cid) ci.unread = 0;
        sortChats();
        renderChatList();
        cacheChats(chats);
    }
}

function handleMessageUpdate(cid, pl) {
    var m = pl.new; if (!m) return;
    var uid = myUid();
    if (String(m.sender_id) === uid) {
        if (curChatId === cid) loadMessages(cid).then(function () { scrollToBottom() });
        var ci = chats.find(function (c) { return c.id === cid });
        if (ci && ci.lastMsgOut) {
            if (m.read) ci.lastMsgStatus = 'read';
            else if (m.delivered) ci.lastMsgStatus = 'delivered';
            renderChatList();
            cacheChats(chats);
        }
    }
}

function handleProfileChange(pid, pl) {
    var p = pl.new; if (!p) return;
    var ch = false;
    chats.forEach(function (c) {
        if (c.otherId === pid) {
            if (p.online !== undefined && c.online !== p.online) { c.online = p.online; ch = true }
            if (p.name && c.name !== p.name) { c.name = p.name; c.initials = p.name[0].toUpperCase(); ch = true }
            if (p.avatar_url !== undefined && c.avatarUrl !== p.avatar_url) { c.avatarUrl = p.avatar_url; ch = true }
            if (p.last_seen) { c.lastSeen = p.last_seen; ch = true }
            if (p.emoji_url !== undefined && c.emojiUrl !== p.emoji_url) { c.emojiUrl = p.emoji_url; ch = true }
        }
    });
    if (ch) {
        renderChatList();
        cacheChats(chats);
        if (cur && cur.otherId === pid) {
            document.getElementById('cStatus').textContent = (p.online !== undefined ? p.online : cur.online) ? t('inOnline') : timeAgo(p.last_seen || cur.lastSeen);
            document.getElementById('cName').textContent = p.name || cur.name;
            if (p.emoji_url !== undefined) loadChatHeaderEmoji(p.emoji_url);
        }
    }
}

function subscribeToChatChannels() {
    var ci = new Set();
    chats.forEach(function (c) { ci.add(String(c.id)) });
    Object.keys(chatChannels).forEach(function (k) { if (!ci.has(k)) { sb.removeChannel(chatChannels[k]); delete chatChannels[k] } });
    chats.forEach(function (c) {
        var k = String(c.id);
        if (chatChannels[k]) return;
        chatChannels[k] = sb.channel('chat-' + k)
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages', filter: 'chat_id=eq.' + c.id }, function (pl) { handleRealtimeMessage(c.id, pl) })
            .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'messages', filter: 'chat_id=eq.' + c.id }, function (pl) { handleMessageUpdate(c.id, pl) })
            .subscribe();
    });
}

function subscribeToProfileChannels() {
    var oi = new Set();
    chats.forEach(function (c) { if (c.otherId) oi.add(c.otherId) });
    Object.keys(profileChannels).forEach(function (k) { if (!oi.has(k)) { sb.removeChannel(profileChannels[k]); delete profileChannels[k] } });
    oi.forEach(function (uid) {
        if (profileChannels[uid]) return;
        profileChannels[uid] = sb.channel('prof-' + uid)
            .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'profiles', filter: 'id=eq.' + uid }, function (pl) { handleProfileChange(uid, pl) })
            .subscribe();
    });
}

function setupRealtime() {
    destroyAllChannels();
    setConnStatus('connecting');
    reconnectAttempts = 0;
    var uid = myUid();
    globalChannel = sb.channel('global-' + uid)
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'chat_members', filter: 'user_id=eq.' + uid }, function () { loadChats() })
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'notifications', filter: 'user_id=eq.' + uid }, function (pl) {
            document.getElementById('notifBadge').style.display = 'flex';
            document.getElementById('notifBadge').textContent = '!';
            if (document.getElementById('notificationsModal').classList.contains('open')) loadNotifications();
        })
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'verification_requests' }, function () {
            if (profile.user_id === EMOJI2_OWNER_ID) {
                document.getElementById('notifBadge').style.display = 'flex';
                document.getElementById('notifBadge').textContent = '!';
                if (document.getElementById('notificationsModal').classList.contains('open')) loadNotifications();
            }
        });
    globalChannel.subscribe(function (s) {
        if (s === 'SUBSCRIBED') { setConnStatus('connected'); reconnectAttempts = 0; setOnlineStatus(true) }
        else if (s === 'CHANNEL_ERROR' || s === 'TIMED_OUT') { setConnStatus('disconnected'); scheduleReconnect() }
        else if (s === 'CLOSED') { setConnStatus('disconnected') }
    });

    if (!visibilityBound) {
        visibilityBound = true;
        document.addEventListener('visibilitychange', function () {
            if (!authUid) return;
            if (document.hidden) setOnlineStatus(false);
            else { setOnlineStatus(true); if (!rtConnected) scheduleReconnect() }
        });
    }
    if (!beforeUnloadBound) {
        beforeUnloadBound = true;
        window.addEventListener('beforeunload', function () { setOnlineStatus(false, true) });
        window.addEventListener('pagehide', function () { setOnlineStatus(false, true) });
    }
}

function destroyAllChannels() {
    if (globalChannel) { sb.removeChannel(globalChannel); globalChannel = null }
    Object.keys(chatChannels).forEach(function (k) { sb.removeChannel(chatChannels[k]) });
    chatChannels = {};
    Object.keys(profileChannels).forEach(function (k) { sb.removeChannel(profileChannels[k]) });
    profileChannels = {};
    rtConnected = false;
    setConnStatus('disconnected');
}

function scheduleReconnect() {
    if (reconnectTimer) return;
    reconnectAttempts++;
    setConnStatus('connecting');
    reconnectTimer = setTimeout(function () {
        reconnectTimer = null;
        if (!authUid || rtConnected) return;
        setupRealtime();
        subscribeToChatChannels();
        subscribeToProfileChannels();
    }, getBackoffDelay());
}

// ==================== USER PROFILE VIEW ====================

async function openUserProfile() {
    var tid = null, cn = '', ca = '', co = false, cls = null, ce = null;
    if (cur && cur.otherId) { tid = cur.otherId; cn = cur.name || ''; ca = cur.avatarUrl || ''; co = cur.online || false; cls = cur.lastSeen || null; ce = cur.emojiUrl || null }
    else if (curChatTarget && curChatTarget.uid) { tid = curChatTarget.uid; cn = curChatTarget.name || ''; ca = curChatTarget.avatarUrl || ''; ce = curChatTarget.emojiUrl || null }
    if (!tid) return;
    viewingUserId = tid;

    var ub = document.getElementById('upBanner');
    ub.style.backgroundImage = '';
    ub.style.background = 'linear-gradient(135deg,#1a1a1a,#2a2a2a)';
    var ua = document.getElementById('upAva');
    if (ca) { ua.style.backgroundImage = 'url(' + ca + ')'; ua.textContent = '' }
    else { ua.style.backgroundImage = ''; ua.textContent = (cn || 'U')[0].toUpperCase() }
    document.getElementById('upName').textContent = cn || t('loading') + '...';

    var sd = document.getElementById('upStatusDot'), st = document.getElementById('upStatusText');
    if (co) { sd.style.background = '#4ade80'; st.textContent = t('online') }
    else { sd.style.background = '#ccc'; st.textContent = cls ? timeAgo(cls) : '' }
    document.getElementById('upId').textContent = t('loading');

    destroyLottie('up'); destroyLottie('up2');
    _upEmojiData = null; _upEmoji2Data = null; _upEmojiOwner = cn || '';
    var ue = document.getElementById('upEmoji'); ue.innerHTML = ''; ue.style.display = 'none';
    var uvb = document.getElementById('upVerifiedRow');
    var uve = document.getElementById('upVerifiedEmoji');
    uvb.style.display = 'none'; uve.innerHTML = '';
    document.getElementById('userProfileView').classList.add('open');

    var existingChat = chats.find(function (c) { return c.otherId === tid });
    if (existingChat) document.getElementById('upMsgBtn').style.display = 'none';
    else document.getElementById('upMsgBtn').style.display = 'flex';

    if (ce) fetchEmojiData(ce).then(function (d) {
        if (!d || viewingUserId !== tid) return;
        _upEmojiData = d;
        ue.style.display = 'inline-block';
        upEmojiAnim = lottie.loadAnimation({ container: ue, renderer: 'canvas', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(d)) });
    });

    var res = await sb.from('profiles').select('*').eq('id', tid).single();
    if (res.error || !res.data || viewingUserId !== tid) return;
    var u = res.data;
    if (u.banner_url) { ub.style.backgroundImage = 'url(' + u.banner_url + ')'; ub.style.backgroundSize = 'cover'; ub.style.backgroundPosition = 'center' }
    if (u.avatar_url) { ua.style.backgroundImage = 'url(' + u.avatar_url + ')'; ua.textContent = '' }
    _upEmojiOwner = u.name || 'User';
    document.getElementById('upName').textContent = u.name || 'User';
    if (u.online) { sd.style.background = '#4ade80'; st.textContent = t('online') }
    else { sd.style.background = '#ccc'; st.textContent = timeAgo(u.last_seen) }

    if (u.bio && u.bio.trim()) { document.getElementById('upBio').textContent = u.bio; document.getElementById('upBioRow').style.display = '' }
    else { document.getElementById('upBioRow').style.display = 'none' }
    if (u.username) { document.getElementById('upUsername').textContent = '@' + u.username; document.getElementById('upUsernameRow').style.display = '' }
    else { document.getElementById('upUsernameRow').style.display = 'none' }
    document.getElementById('upId').textContent = u.user_id || '—';

    if (u.emoji_url && u.emoji_url !== ce) {
        destroyLottie('up'); ue.innerHTML = '';
        fetchEmojiData(u.emoji_url).then(function (d) {
            if (d && viewingUserId === tid) {
                _upEmojiData = d;
                ue.style.display = 'inline-block';
                upEmojiAnim = lottie.loadAnimation({ container: ue, renderer: 'canvas', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(d)) });
            }
        });
    }

    if (u.user_id === EMOJI2_OWNER_ID || u.verified) {
        if (!u.emoji2_url && profile.user_id === EMOJI2_OWNER_ID && profile.emoji2_url) {
            sb.from('profiles').update({ emoji2_url: profile.emoji2_url }).eq('id', tid).then(function () {
                u.emoji2_url = profile.emoji2_url;
                uvb.style.display = '';
                fetchEmojiData(u.emoji2_url).then(function (d) {
                    if (d && viewingUserId === tid) { _upEmoji2Data = d; uve.style.width = '20px'; uve.style.height = '20px'; upEmoji2Anim = lottie.loadAnimation({ container: uve, renderer: 'canvas', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(d)) }) }
                });
            });
        }
        uvb.style.display = '';
        uve.onclick = function () { openVerifyPreview(_upEmoji2Data, u.name, false) };
        if (u.emoji2_url) {
            fetchEmojiData(u.emoji2_url).then(function (d) {
                if (d && viewingUserId === tid) { _upEmoji2Data = d; uve.style.width = '20px'; uve.style.height = '20px'; upEmoji2Anim = lottie.loadAnimation({ container: uve, renderer: 'canvas', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(d)) }) }
            });
        }
    } else { uvb.style.display = 'none' }
}

function closeUserProfile() {
    document.getElementById('userProfileView').classList.remove('open');
    destroyLottie('up'); destroyLottie('up2');
    viewingUserId = null; _upEmojiData = null; _upEmoji2Data = null; _upEmojiOwner = '';
    document.getElementById('upVerifiedRow').style.display = 'none';
    document.getElementById('upVerifiedEmoji').innerHTML = '';
}

async function openUserProfileById(tid) {
    if (tid === myUid()) { go('profile'); return; }
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
    if (u.bio && u.bio.trim()) { document.getElementById('upBio').textContent = u.bio; document.getElementById('upBioRow').style.display = '' }
    else { document.getElementById('upBioRow').style.display = 'none' }
    if (u.username) { document.getElementById('upUsername').textContent = '@' + u.username; document.getElementById('upUsernameRow').style.display = '' }
    else { document.getElementById('upUsernameRow').style.display = 'none' }
    document.getElementById('upId').textContent = u.user_id || '—';

    var ue = document.getElementById('upEmoji'); ue.innerHTML = ''; ue.style.display = 'none';
    if (u.emoji_url) {
        fetchEmojiData(u.emoji_url).then(function (d) {
            if (d && viewingUserId === tid) { _upEmojiData = d; ue.style.display = 'inline-block'; upEmojiAnim = lottie.loadAnimation({ container: ue, renderer: 'canvas', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(d)) }) }
        });
    }

    var uvb = document.getElementById('upVerifiedRow'); var uve = document.getElementById('upVerifiedEmoji');
    if (u.user_id === EMOJI2_OWNER_ID || u.verified) {
        uvb.style.display = '';
        uve.onclick = function () { openVerifyPreview(_upEmoji2Data, u.name, false) };
        if (u.emoji2_url) {
            fetchEmojiData(u.emoji2_url).then(function (d) {
                if (d && viewingUserId === tid) { _upEmoji2Data = d; uve.style.width = '20px'; uve.style.height = '20px'; upEmoji2Anim = lottie.loadAnimation({ container: uve, renderer: 'canvas', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(d)) }) }
            });
        }
    } else { uvb.style.display = 'none' }
}

async function openChatFromProfile() {
    if (!viewingUserId) return;
    var existing = chats.find(function (c) { return c.otherId === viewingUserId });
    closeUserProfile();
    if (existing) { openChat(existing.id); }
    else {
        var name = document.getElementById('upName').textContent;
        var uname = document.getElementById('upUsernameRow').style.display !== 'none' ? document.getElementById('upUsername').textContent.replace('@', '') : null;
        var avaStyle = document.getElementById('upAva').style.backgroundImage;
        var avaUrl = avaStyle ? avaStyle.slice(4, -1).replace(/"/g, "") : null;
        curChatTarget = { uid: viewingUserId, name: name, username: uname, avatarUrl: avaUrl, emojiUrl: null };
        curChatId = null; cur = null;
        var ca = document.getElementById('cAva');
        if (avaUrl) { ca.style.backgroundImage = 'url(' + avaUrl + ')'; ca.textContent = '' }
        else { ca.style.backgroundImage = ''; ca.textContent = (name || 'U')[0].toUpperCase(); ca.style.background = '#eee'; ca.style.color = '#999' }
        document.getElementById('cName').textContent = name;
        document.getElementById('cStatus').textContent = document.getElementById('upStatusText').textContent;
        document.getElementById('msgArea').innerHTML = '<div class="empty-state" style="padding:60px 30px"><div class="empty-icon"><svg width="14" height="14" fill="none" stroke="#ccc" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg></div><div class="empty-title">' + t('noMessages') + '</div><div class="empty-desc">' + t('writeFirstMessage') + '</div></div>';
        document.getElementById('chatView').classList.add('open');
        document.getElementById('bar').style.display = 'none';
        setTimeout(function () { document.getElementById('msgIn').focus(); }, 300);
    }
}

// ==================== VERIFICATION ====================

var verifyAnim = null, rejectId = null;

function openVerifyPreview(data, name, isMe) {
    document.getElementById('verifyPreviewText').textContent = t('verifiedAccount', { name: name });
    var showBtn = !profile.verified;
    document.getElementById('verifyHowToBtn').style.display = showBtn ? 'block' : 'none';
    var c = document.getElementById('verifyPreviewEmoji'); c.innerHTML = '';
    if (verifyAnim) verifyAnim.destroy();
    document.getElementById('verifyPreviewModal').classList.add('open');
    if (data) setTimeout(function () { verifyAnim = lottie.loadAnimation({ container: c, renderer: 'svg', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(data)) }) }, 100);
}

function closeVerifyPreview(e) {
    if (e && e.target !== document.getElementById('verifyPreviewModal')) return;
    document.getElementById('verifyPreviewModal').classList.remove('open');
    if (verifyAnim) verifyAnim.destroy();
}

function openVerifyRequest() {
    if (profile.verified) return;
    closeVerifyPreview();
    document.getElementById('verifyReason').value = '';
    document.getElementById('verifyCounter').textContent = '0/500';
    document.getElementById('verifyRequestModal').classList.add('open');
}

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
    } catch (e) { alert(t('errorPrefix') + e.message); }
    finally { _approving = false; }
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
    } catch (e) { alert(e.message); }
    finally { btn.disabled = false; btn.textContent = t('send'); _rejecting = false; }
}
