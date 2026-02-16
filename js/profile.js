// ==================== PROFILE ====================

function setOnlineStatus(o, f) {
    if (!authUid) return;
    if (!f && lastOnlineStatus === o) return;
    lastOnlineStatus = o;
    if (onlineThrottleTimer) { clearTimeout(onlineThrottleTimer); onlineThrottleTimer = null }
    if (f || o === false) { doSetOnline(o) } else { onlineThrottleTimer = setTimeout(function () { doSetOnline(o) }, 2000) }
}

function doSetOnline(o) {
    if (!authUid) return;
    var uid = myUid();
    if (!uid) return;
    var token = cachedToken || SUPABASE_KEY;
    if (!o) {
        try {
            fetch(SUPABASE_URL + '/rest/v1/profiles?id=eq.' + uid, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + token, 'Prefer': 'return=minimal' },
                body: JSON.stringify({ online: false, last_seen: new Date().toISOString() }),
                keepalive: true
            }).catch(function () { })
        } catch (e) { }
    } else {
        sb.from('profiles').update({ online: true }).eq('id', uid).then(function () { })
    }
}

async function loadProfile() {
    var uid = myUid();
    if (!uid) return;
    var res = await sb.from('profiles').select('*').eq('id', uid).single();
    if (res.error || !res.data) return;
    var d = res.data;
    profile.name = d.name || 'User';
    profile.username = d.username || null;
    profile.bio = d.bio || '';
    profile.user_id = d.user_id;
    profile.avatar_url = d.avatar_url || null;
    profile.banner_url = d.banner_url || null;
    profile.emoji_url = d.emoji_url || null;
    profile.emoji2_url = d.emoji2_url || null;
    profile.verified = !!d.verified;
    hasUsername = !!d.username;
    updateCache(profile);

    if (d.language && translations[d.language] && d.language !== currentLang) {
        currentLang = d.language;
        localStorage.setItem('app_lang', currentLang);
        applyI18n();
    }

    if (profile.emoji_url) { profile.emojiData = await fetchEmojiData(profile.emoji_url); } else { profile.emojiData = null; }
    if (profile.emoji2_url) { profile.emoji2Data = await fetchEmojiData(profile.emoji2_url); } else { profile.emoji2Data = null; }
    saveCache();
    applyProfile();
    setOnlineStatus(true);
}

function applyProfile() {
    document.getElementById('profileName').textContent = profile.name;
    document.getElementById('settingsName').textContent = profile.name;
    document.getElementById('infoId').textContent = profile.user_id || t('loading');

    var ur = document.getElementById('usernameRow'), iu = document.getElementById('infoUsername');
    if (profile.username) { iu.textContent = '@' + profile.username; ur.style.display = '' } else { ur.style.display = 'none' }

    var be = document.getElementById('infoBio'), br = document.getElementById('bioRow');
    if (profile.bio && profile.bio.trim()) { be.textContent = profile.bio; br.style.display = '' } else { be.textContent = ''; br.style.display = 'none' }

    [document.getElementById('profileAva'), document.getElementById('settingsAva')].forEach(function (el) {
        if (profile.avatar_url) { el.style.backgroundImage = 'url(' + profile.avatar_url + ')'; el.textContent = '' }
        else { el.style.backgroundImage = ''; el.textContent = (profile.name || 'U')[0].toUpperCase() }
    });

    var bn = document.getElementById('profileBanner');
    if (profile.banner_url) { bn.style.backgroundImage = 'url(' + profile.banner_url + ')'; bn.style.backgroundSize = 'cover'; bn.style.backgroundPosition = 'center' }
    else { bn.style.backgroundImage = ''; bn.style.background = 'linear-gradient(135deg,#1a1a1a,#2a2a2a)' }

    var ec = document.getElementById('profileEmoji');
    if (profile.emojiData) { ec.style.display = 'inline-block' } else { ec.style.display = 'none'; ec.innerHTML = ''; destroyLottie('profile') }

    var vr = document.getElementById('verifiedRow');
    if (profile.user_id === EMOJI2_OWNER_ID || profile.verified) {
        vr.style.display = '';
        document.getElementById('verifiedEmoji').onclick = function () { openVerifyPreview(profile.emoji2Data, profile.name, true) }
    } else { vr.style.display = 'none' }
}

function renderProfileEmoji() {
    var c = document.getElementById('profileEmoji');
    destroyLottie('profile');
    c.innerHTML = '';
    if (profile.emojiData) {
        c.style.display = 'inline-block';
        profileEmojiAnim = lottie.loadAnimation({ container: c, renderer: 'canvas', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(profile.emojiData)) });
    } else { c.style.display = 'none' }

    var vr = document.getElementById('verifiedRow');
    var ve = document.getElementById('verifiedEmoji');
    destroyLottie('profile2');
    ve.innerHTML = '';
    if (profile.user_id === EMOJI2_OWNER_ID || profile.verified) {
        vr.style.display = '';
        if (profile.emoji2Data) {
            ve.style.width = '20px';
            ve.style.height = '20px';
            profileEmoji2Anim = lottie.loadAnimation({ container: ve, renderer: 'canvas', loop: true, autoplay: true, animationData: JSON.parse(JSON.stringify(profile.emoji2Data)) });
        }
    } else { vr.style.display = 'none' }
}

async function deleteOldFile(b, p) { try { await sb.storage.from(b).remove([p]) } catch (e) { } }

async function uploadFile(b, p, f) {
    var r = await sb.storage.from(b).upload(p, f, { upsert: true, contentType: f.type || 'application/octet-stream' });
    if (r.error) throw r.error;
    return sb.storage.from(b).getPublicUrl(p).data.publicUrl + '?t=' + Date.now();
}

function handleAvaUpload(e) {
    var f = e.target.files[0];
    if (!f) return;
    if (f.type === 'image/gif' || f.name.toLowerCase().endsWith('.gif')) { alert(t('gifNotSupported')); e.target.value = ''; return }
    tempAvaFile = f;
    var r = new FileReader();
    r.onload = function () { var p = document.getElementById('editAvaPreview'); p.style.backgroundImage = 'url(' + r.result + ')'; p.textContent = '' };
    r.readAsDataURL(f);
    e.target.value = '';
}

function handleBannerUpload(e) {
    var f = e.target.files[0];
    if (!f) return;
    if (f.type === 'image/gif' || f.name.toLowerCase().endsWith('.gif')) { alert(t('gifNotSupported')); e.target.value = ''; return }
    tempBannerFile = f;
    var r = new FileReader();
    r.onload = function () {
        var z = document.getElementById('bannerUploadZone');
        z.style.backgroundImage = 'url(' + r.result + ')';
        z.style.backgroundSize = 'cover';
        z.style.backgroundPosition = 'center';
        z.style.borderColor = '#ccc';
        z.innerHTML = '<p style="background:rgba(0,0,0,.5);color:#fff;padding:2px 6px;border-radius:4px;font-size:9px">' + t('change') + '</p>';
    };
    r.readAsDataURL(f);
    e.target.value = '';
}

function openEditModal() {
    tempAvaFile = null; tempBannerFile = null; tempEmojiData = null; tempEmojiFile = null;
    document.getElementById('editName').value = profile.name || '';
    document.getElementById('editUsername').value = profile.username || '';
    document.getElementById('editBio').value = profile.bio || '';
    updBioCounter();
    document.getElementById('saveError').textContent = '';
    document.getElementById('editNameError').textContent = '';
    document.getElementById('editUsernameError').textContent = '';
    document.getElementById('editBioError').textContent = '';

    var ap = document.getElementById('editAvaPreview');
    if (profile.avatar_url) { ap.style.backgroundImage = 'url(' + profile.avatar_url + ')'; ap.textContent = '' }
    else { ap.style.backgroundImage = ''; ap.textContent = (profile.name || 'U')[0].toUpperCase() }

    var bz = document.getElementById('bannerUploadZone');
    if (profile.banner_url) {
        bz.style.backgroundImage = 'url(' + profile.banner_url + ')';
        bz.style.backgroundSize = 'cover';
        bz.style.backgroundPosition = 'center';
        bz.style.borderColor = '#ccc';
        bz.innerHTML = '<p style="background:rgba(0,0,0,.5);color:#fff;padding:2px 6px;border-radius:4px;font-size:9px">' + t('change') + '</p>';
    } else {
        bz.style.backgroundImage = '';
        bz.style.borderColor = '#ddd';
        bz.innerHTML = '<svg width="14" height="14" fill="none" stroke="#bbb" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg><p>' + t('clickToUpload') + '</p>';
    }

    destroyLottie('edit');
    document.getElementById('editEmojiPreview').innerHTML = '';
    if (profile.emojiData) {
        document.getElementById('emojiStatusText').textContent = t('currentEmoji');
        showEditEmojiStatic(profile.emojiData);
    } else {
        document.getElementById('emojiResultRow').style.display = 'none';
    }
    document.getElementById('editModal').classList.add('open');
}

function closeEditModal() { document.getElementById('editModal').classList.remove('open'); destroyLottie('edit') }

async function saveProfile() {
    var ne = document.getElementById('editNameError'), ue = document.getElementById('editUsernameError');
    var be = document.getElementById('editBioError'), se = document.getElementById('saveError');
    ne.textContent = ''; ue.textContent = ''; be.textContent = ''; se.textContent = '';

    var name = document.getElementById('editName').value.trim();
    var username = document.getElementById('editUsername').value.trim().toLowerCase();
    var bio = document.getElementById('editBio').value.trim();
    var valid = true;

    if (!name || name.length < 1) { ne.textContent = t('enterNameErr'); valid = false }
    else if (name.length > 16) { ne.textContent = t('max16'); valid = false }
    else if (!NAME_RE.test(name)) { ne.textContent = t('onlyLettersSpaces'); valid = false }

    var newUsername = null;
    if (username) {
        if (username.length < 5) { ue.textContent = t('min5'); valid = false }
        else if (username.length > 20) { ue.textContent = t('max20'); valid = false }
        else if (/^[0-9]/.test(username)) { ue.textContent = t('cantStartDigit'); valid = false }
        else if (!USERNAME_RE.test(username)) { ue.textContent = t('onlyAzDigits'); valid = false }
        else newUsername = username;
    } else {
        if (hasUsername) { ue.textContent = t('cantDeleteUsername'); valid = false }
        newUsername = null;
    }

    if (bio && bio.length > 40) { be.textContent = t('max40'); valid = false }
    if (!valid) return;

    var noText = name === profile.name && (newUsername || null) === (profile.username || null) && (bio || '') === (profile.bio || '');
    var noFile = !tempAvaFile && !tempBannerFile && tempEmojiData === null;
    if (noText && noFile) { closeEditModal(); return }

    var uid = myUid();
    if (newUsername && newUsername !== profile.username) {
        var ck = await sb.from('profiles').select('id').eq('username', newUsername).maybeSingle();
        if (ck.data && ck.data.id !== uid) { ue.textContent = t('usernameTaken'); return }
    }

    var updates = { name: name, bio: bio || '', updated_at: new Date().toISOString() };
    if (newUsername !== undefined) updates.username = newUsername;

    try {
        var uploads = [];

        if (tempAvaFile) {
            uploads.push((async function () {
                var op = uid + '/avatar';
                await Promise.all([deleteOldFile('avatars', op + '.jpg'), deleteOldFile('avatars', op + '.png'), deleteOldFile('avatars', op + '.webp'), deleteOldFile('avatars', op + '.jpeg')]);
                var ext = tempAvaFile.name.split('.').pop().toLowerCase();
                var url = await uploadFile('avatars', uid + '/avatar.' + ext, tempAvaFile);
                updates.avatar_url = url;
                profile.avatar_url = url;
            })());
        }

        if (tempBannerFile) {
            uploads.push((async function () {
                var op = uid + '/banner';
                await Promise.all([deleteOldFile('banners', op + '.jpg'), deleteOldFile('banners', op + '.png'), deleteOldFile('banners', op + '.webp'), deleteOldFile('banners', op + '.jpeg')]);
                var ext = tempBannerFile.name.split('.').pop().toLowerCase();
                var url = await uploadFile('banners', uid + '/banner.' + ext, tempBannerFile);
                updates.banner_url = url;
                profile.banner_url = url;
            })());
        }

        if (tempEmojiData === '__remove__') {
            uploads.push((async function () {
                updates.emoji_url = null;
                profile.emoji_url = null;
                profile.emojiData = null;
                cache.emojiData = null;
                await Promise.all([deleteOldFile('emojis', uid + '/emoji.tgs'), deleteOldFile('emojis', uid + '/emoji.json')]);
            })());
        } else if (tempEmojiFile && tempEmojiData && typeof tempEmojiData === 'object') {
            uploads.push((async function () {
                await Promise.all([deleteOldFile('emojis', uid + '/emoji.tgs'), deleteOldFile('emojis', uid + '/emoji.json')]);
                var en = tempEmojiFile.name.toLowerCase();
                var ep = uid + '/emoji' + (en.endsWith('.tgs') ? '.tgs' : '.json');
                var url = await uploadFile('emojis', ep, tempEmojiFile);
                updates.emoji_url = url;
                profile.emoji_url = url;
                profile.emojiData = JSON.parse(JSON.stringify(tempEmojiData));
                cache.emojiData = profile.emojiData;
            })());
        }

        if (uploads.length) await Promise.all(uploads);

        var res = await sb.from('profiles').update(updates).eq('id', uid);
        if (res.error) {
            if (res.error.message && res.error.message.includes('username')) { ue.textContent = t('usernameTaken') }
            else { se.textContent = t('errorPrefix') + res.error.message }
            return;
        }

        profile.name = name;
        profile.username = newUsername;
        profile.bio = bio || '';
        hasUsername = !!newUsername;
        updateCache(profile);
        applyProfile();
        renderProfileEmoji();
        closeEditModal();
    } catch (e) { se.textContent = t('errorPrefix') + e.message }
}
