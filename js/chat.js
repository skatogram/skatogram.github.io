// ==================== CHAT ====================

function handleSearch() {
    var q = document.getElementById('searchInput').value.trim().toLowerCase().replace('@', '');
    var r = document.getElementById('searchResults');
    if (q.length < 3) {
        r.style.display = 'none'; r.innerHTML = '';
        searchEmojiAnims.forEach(function (a) { try { a.destroy() } catch (e) { } });
        searchEmojiAnims = [];
        if (searchTimer) { clearTimeout(searchTimer); searchTimer = null }
        if (!q) renderChatList();
        return;
    }
    if (searchTimer) clearTimeout(searchTimer);
    searchTimer = setTimeout(function () { searchUsers(q) }, 300);
}

async function searchUsers(q) {
    var r = document.getElementById('searchResults'), uid = myUid();
    var res = await sb.from('profiles').select('id,name,username,avatar_url,user_id,online,last_seen,bio,banner_url,emoji_url').ilike('username', '%' + q + '%').neq('id', uid).limit(10);
    if (res.error || !res.data || !res.data.length) {
        r.innerHTML = '<div style="padding:14px;text-align:center;font-size:10px;color:#aaa">' + t('nothingFound') + '</div>';
        r.style.display = 'block';
        return;
    }
    var sd = res.data;
    r.innerHTML = sd.map(function (u, i) {
        var as = u.avatar_url ? 'background-image:url(' + u.avatar_url + ');background-size:cover;background-position:center;' : 'background:#eee;color:#999;';
        var ac = u.avatar_url ? '' : ((u.name || 'U')[0].toUpperCase());
        return '<div class="search-result-item" onclick="openChatWithUser(\'' + u.id + '\',\'' + escHtml(u.name) + '\',\'' + escHtml(u.username || '') + '\',\'' + escHtml(u.avatar_url || '') + '\',\'' + escHtml(u.emoji_url || '') + '\')">' +
            '<div class="ava-sm" style="width:36px;height:36px;font-size:12px;' + as + '">' + ac + '</div>' +
            '<div style="flex:1;min-width:0">' +
            '<div style="display:flex;align-items:center"><span style="font-size:11px;font-weight:600">' + escHtml(u.name) + '</span><div id="search-emoji-' + i + '" class="inline-emoji" style="display:none"></div></div>' +
            (u.username ? '<div style="font-size:9px;color:#aaa">@' + escHtml(u.username) + '</div>' : '') +
            '</div></div>';
    }).join('');
    r.style.display = 'block';
    loadSearchEmojis(sd);
}

async function openChatWithUser(tid, tn, tu, ta, te) {
    document.getElementById('searchResults').style.display = 'none';
    document.getElementById('searchInput').value = '';
    var ex = chats.find(function (c) { return c.otherId === tid });
    if (ex) { openChat(ex.id); return }
    curChatTarget = { uid: tid, name: tn, username: tu, avatarUrl: ta, emojiUrl: te || null };
    curChatId = null; cur = null;
    var ca = document.getElementById('cAva');
    if (ta) { ca.style.backgroundImage = 'url(' + ta + ')'; ca.style.backgroundSize = 'cover'; ca.style.backgroundPosition = 'center'; ca.textContent = '' }
    else { ca.style.backgroundImage = ''; ca.textContent = (tn || 'U')[0].toUpperCase(); ca.style.background = '#eee'; ca.style.color = '#999' }
    document.getElementById('cName').textContent = tn;
    document.getElementById('cStatus').textContent = '';
    document.getElementById('msgArea').innerHTML = '<div class="empty-state" style="padding:60px 30px"><div class="empty-icon"><svg width="14" height="14" fill="none" stroke="#ccc" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg></div><div class="empty-title">' + t('noMessages') + '</div><div class="empty-desc">' + t('writeFirstMessage') + '</div></div>';
    document.getElementById('chatView').classList.add('open');
    document.getElementById('bar').style.display = 'none';
    loadChatHeaderEmoji(te || null);
    loadTargetStatus(tid);
    setTimeout(scrollToBottom, 300);
}

async function loadTargetStatus(tid) {
    var res = await sb.from('profiles').select('online,last_seen').eq('id', tid).single();
    if (res.data) document.getElementById('cStatus').textContent = res.data.online ? t('inOnline') : timeAgo(res.data.last_seen);
}

function renderChatList() {
    var el = document.getElementById('chatList');
    var q = (document.getElementById('searchInput').value || '').toLowerCase().trim();
    if (q.length >= 3) return;
    destroyAllListEmojis();
    if (!chats.length) {
        el.innerHTML = '<div class="empty-state"><div class="empty-icon"><svg width="16" height="16" fill="none" stroke="#ccc" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg></div><div class="empty-title">' + t('noChats') + '</div><div class="empty-desc">' + t('findUserByUsername') + '</div></div>';
        return;
    }
    el.innerHTML = chats.map(function (c) {
        var as = c.avatarUrl ? 'background-image:url(' + c.avatarUrl + ');background-size:cover;background-position:center;' : 'background:' + (c.online ? '#1a1a1a' : '#eee') + ';color:' + (c.online ? '#fff' : '#999') + ';';
        var ac = c.avatarUrl ? '' : c.initials;
        var sh = '';
        if (c.lastMsg && c.lastMsgOut) sh = getMsgStatusHtml(c.lastMsgStatus) + ' ';
        return '<div class="chat-item" onclick="openChat(' + c.id + ')">' +
            '<div style="position:relative"><div class="ava-sm" style="' + as + '">' + ac + '</div>' + (c.online ? '<div class="dot-online"></div>' : '') + '</div>' +
            '<div style="flex:1;min-width:0">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2px">' +
            '<div style="display:flex;align-items:center"><span style="font-size:11px;font-weight:600">' + escHtml(c.name) + '</span><div id="chat-emoji-' + c.id + '" class="inline-emoji" style="display:none"></div></div>' +
            '<span style="font-size:8px;color:#ccc;display:flex;align-items:center;gap:2px;flex-shrink:0">' + sh + (c.time || '') + '</span></div>' +
            '<div style="display:flex;justify-content:space-between;align-items:center">' +
            '<span class="chat-preview" style="font-size:10px;color:#aaa;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px">' + (c.lastMsg ? formatPreview(c.lastMsg) : t('noChatsMsg')) + '</span>' +
            (c.unread ? '<div class="badge">' + c.unread + '</div>' : '') +
            '</div></div></div>';
    }).join('');
    loadChatListEmojis();
}

async function openChat(id) {
    var c = chats.find(function (x) { return x.id === id });
    if (!c) return;
    cur = c; curChatId = id; curChatTarget = null;
    var ca = document.getElementById('cAva');
    if (c.avatarUrl) { ca.style.backgroundImage = 'url(' + c.avatarUrl + ')'; ca.style.backgroundSize = 'cover'; ca.style.backgroundPosition = 'center'; ca.textContent = '' }
    else { ca.style.backgroundImage = ''; ca.textContent = c.initials; ca.style.background = c.online ? '#1a1a1a' : '#eee'; ca.style.color = c.online ? '#fff' : '#999' }
    document.getElementById('cName').textContent = c.name;
    document.getElementById('cStatus').textContent = c.online ? t('inOnline') : timeAgo(c.lastSeen);
    loadChatHeaderEmoji(c.emojiUrl || null);
    await loadMessages(id);
    document.getElementById('chatView').classList.add('open');
    document.getElementById('bar').style.display = 'none';
    setTimeout(function () { scrollToBottom() }, 100);
    markMessagesRead(id);
}

async function markMessagesRead(cid) {
    var uid = myUid();
    await sb.from('messages').update({ read: true, delivered: true }).eq('chat_id', cid).neq('sender_id', uid).eq('read', false);
    var c = chats.find(function (x) { return x.id === cid });
    if (c) { c.unread = 0; renderChatList(); cacheChats(chats) }
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
                '<div class="msg-reply-text">' + escHtml(m.reply_data.text) + '</div></div>';
        }

        var senderNameForReply = io ? (profile.name || 'User') : (cur ? cur.name : 'User');

        return '<div class="msg-container" id="msg-' + m.id + '" style="align-items:' + (io ? 'flex-end' : 'flex-start') + '" ' +
            'data-mid="' + m.id + '" data-mtext="' + escAttr(m.text) + '" data-mname="' + escAttr(senderNameForReply) + '" ' +
            'ontouchstart="handleMsgTouchStart(event)" ontouchmove="handleMsgTouchMove(event)" ontouchend="handleMsgTouchEnd(event)">' +
            '<div class="swipe-reply-icon"><svg width="14" height="14" fill="none" stroke="#999" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg></div>' +
            '<div class="msg ' + (io ? 'msg-out' : 'msg-in') + '">' + replyBlock +
            '<span class="markdown">' + formatText(m.text) + '</span></div>' +
            '<div class="msg-time" style="text-align:' + (io ? 'right' : 'left') + ';padding:0 4px">' + ti + ' ' + sh + '</div></div>';
    }).join('');
}

function closeChat() {
    var cv = document.getElementById('chatView');
    cv.classList.remove('open');
    cv.style.height = '';
    cv.style.top = '';
    cv.style.bottom = '';
    document.getElementById('bar').style.display = 'flex';
    destroyLottie('chatHeader');
    document.getElementById('chatHeaderEmoji').style.display = 'none';
    cur = null; curChatId = null; curChatTarget = null;
    cancelReply();
}

async function send() {
    var inp = document.getElementById('msgIn'), tx = inp.value.trim();
    if (!tx || pendingSend) return;

    // Quick anti-bot check before sending
    if (!AntiBot.quickCheck()) {
        showToast(t('botFailed'));
        return;
    }

    pendingSend = true;
    inp.value = '';
    updBtn();
    var uid = myUid(), now = new Date();
    var time = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
    var a = document.getElementById('msgArea');
    var es = a.querySelector('.empty-state');
    if (es) a.innerHTML = '';

    var replyBlock = '';
    var replyDataToSend = null;
    if (currentReply) {
        replyDataToSend = { id: currentReply.id, text: currentReply.text, name: currentReply.name };
        replyBlock = '<div class="msg-reply-preview" style="border-color:#fff"><div class="msg-reply-name">' + escHtml(currentReply.name) + '</div><div class="msg-reply-text">' + escHtml(currentReply.text) + '</div></div>';
    }

    var div = document.createElement('div');
    div.className = 'msg-container';
    div.style.alignItems = 'flex-end';
    div.dataset.mid = 'temp-' + Date.now();
    div.dataset.mtext = escAttr(tx);
    div.dataset.mname = escAttr(profile.name || 'You');
    div.setAttribute('ontouchstart', 'handleMsgTouchStart(event)');
    div.setAttribute('ontouchmove', 'handleMsgTouchMove(event)');
    div.setAttribute('ontouchend', 'handleMsgTouchEnd(event)');
    div.innerHTML = '<div class="swipe-reply-icon"><svg width="14" height="14" fill="none" stroke="#999" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg></div><div class="msg msg-out">' + replyBlock + '<span class="markdown">' + formatText(tx) + '</span></div><div class="msg-time" style="text-align:right;padding:0 4px">' + time + ' ' + getMsgStatusHtml('sent') + '</div>';
    a.appendChild(div);
    a.scrollTop = a.scrollHeight;

    var msgObj = { chat_id: curChatId, sender_id: uid, text: tx, delivered: false, read: false };
    if (replyDataToSend) msgObj.reply_data = replyDataToSend;

    if (!curChatId && curChatTarget) {
        try {
            var cr = await sb.from('chats').insert({}).select('id').single();
            if (cr.error) { pendingSend = false; return }
            var nid = cr.data.id;
            var mr = await sb.from('chat_members').insert([{ chat_id: nid, user_id: uid }, { chat_id: nid, user_id: curChatTarget.uid }]);
            if (mr.error) { pendingSend = false; return }
            curChatId = nid;
            msgObj.chat_id = curChatId;
            var sendRes = await sb.from('messages').insert(msgObj).select().single();
            if (sendRes.data) {
                var tempDiv = document.querySelector('[data-mid="temp-' + div.dataset.mid.replace('temp-', '') + '"]');
                if (tempDiv) { tempDiv.id = 'msg-' + sendRes.data.id; tempDiv.dataset.mid = sendRes.data.id; }
            }
            await loadChats();
            cur = chats.find(function (c) { return c.id === nid });
            curChatTarget = null;
        } catch (e) { }
    } else if (curChatId) {
        sb.from('messages').insert(msgObj).select().single().then(function (sendRes) {
            if (sendRes.data) {
                var tempDiv = document.querySelector('[data-mid="temp-' + div.dataset.mid.replace('temp-', '') + '"]');
                if (tempDiv) { tempDiv.id = 'msg-' + sendRes.data.id; tempDiv.dataset.mid = sendRes.data.id; }
            }
        });
    }

    var ci = chats.find(function (c) { return c.id === curChatId });
    if (ci) { ci.lastMsg = tx; ci.time = time; ci.lastMsgOut = true; ci.lastMsgStatus = 'sent'; ci.lastMsgTimestamp = now.toISOString(); sortChats(); renderChatList(); cacheChats(chats) }
    pendingSend = false;
    cancelReply();
    scrollToBottom();
}

// Swipe reply
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
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) && dx > 0) { replyTo(swipeCurrent); }
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

async function handleMentionClick(username) {
    if (!username) return;
    var cleanUser = username.toLowerCase();
    if (profile.username && cleanUser === profile.username.toLowerCase()) { showToast(t('thisIsYou')); return; }
    var res = await sb.from('profiles').select('id').eq('username', cleanUser).maybeSingle();
    if (!res.data) { showToast(t('noSuchAccount')); return; }
    closeChat();
    setTimeout(function () { openUserProfileById(res.data.id); }, 150);
}

async function loadChats() {
    var uid = myUid();
    if (!uid) return;
    var res = await sb.from('chat_members').select('chat_id').eq('user_id', uid);
    if (res.error || !res.data || !res.data.length) { chats = []; chatIdsSet.clear(); renderChatList(); return }
    var cids = res.data.map(function (m) { return m.chat_id });
    chatIdsSet = new Set(cids);
    var r = await Promise.all([
        sb.from('chat_members').select('chat_id,user_id').in('chat_id', cids),
        sb.from('messages').select('chat_id,text,created_at,sender_id,delivered,read').in('chat_id', cids).order('created_at', { ascending: false })
    ]);
    var mr = r[0], mg = r[1], oids = [], cto = {};
    if (mr.data) mr.data.forEach(function (m) { if (String(m.user_id) !== uid) { oids.push(m.user_id); cto[m.chat_id] = m.user_id } });
    var pm = {};
    if (oids.length) {
        var pr = await sb.from('profiles').select('id,name,online,avatar_url,last_seen,emoji_url').in('id', oids);
        if (pr.data) pr.data.forEach(function (p) { pm[p.id] = p });
    }
    var lm = {}, um = {};
    if (mg.data) mg.data.forEach(function (m) {
        if (!lm[m.chat_id]) lm[m.chat_id] = m;
        if (String(m.sender_id) !== uid && !m.read) um[m.chat_id] = (um[m.chat_id] || 0) + 1;
    });
    chats = [];
    for (var i = 0; i < cids.length; i++) {
        var cid = cids[i], oid = cto[cid], op = oid ? pm[oid] : null, lmsg = lm[cid] || null;
        var cn = op ? op.name : t('user'), ini = cn[0].toUpperCase(), on = op ? op.online : false, ls = op ? op.last_seen : null, eu = op ? op.emoji_url : null;
        var ts = '', lmo = false, lms = 'sent';
        if (lmsg) {
            var d = new Date(lmsg.created_at);
            ts = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
            lmo = String(lmsg.sender_id) === uid;
            if (lmo) { if (lmsg.read) lms = 'read'; else if (lmsg.delivered) lms = 'delivered'; else lms = 'sent' }
        }
        chats.push({ id: cid, otherId: oid, name: cn, initials: ini, online: on, lastSeen: ls, unread: um[cid] || 0, lastMsg: lmsg ? lmsg.text : '', time: ts, avatarUrl: op ? op.avatar_url : null, lastMsgOut: lmo, lastMsgStatus: lms, emojiUrl: eu, lastMsgTimestamp: lmsg ? lmsg.created_at : null });
    }
    sortChats();
    cacheChats(chats);
    renderChatList();
    subscribeToChatChannels();
    subscribeToProfileChannels();
}
