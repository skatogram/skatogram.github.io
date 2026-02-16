// ==================== CONFIG ====================
var SUPABASE_URL = 'https://xdexkgyxkkgqqjviwefe.supabase.co';
var SUPABASE_KEY = 'sb_publishable_iFlrQuNOcTw9sfxkDHh0IQ_xkQAOmo9';
var sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
    realtime: { params: { eventsPerSecond: 30 }, heartbeatIntervalMs: 15000, timeout: 25000 },
    global: { headers: { 'X-Client-Info': 'messenger-app' } },
    db: { schema: 'public' },
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false }
});

var EMOJI2_OWNER_ID = '95337179';
var NAME_RE = /^[\p{L}]+(?: [\p{L}]+)*$/u;
var USERNAME_RE = /^[a-z][a-z0-9]*$/;
var PASSWORD_RE = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~ ]+$/;
var SVG_CHECK_ONE = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 8.5l3 3 5-6"/></svg>';
var SVG_CHECK_TWO = '<svg viewBox="0 0 20 16" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 8.5l3 3 5-6"/><path d="M7 8.5l3 3 5-6"/></svg>';

// ==================== STATE ====================
var cache = { profile: null, avatarUrl: null, bannerUrl: null, emojiUrl: null, emojiData: null, emoji2Url: null, emoji2Data: null, chats: null };
var profile = { name: 'Username', username: null, bio: '', user_id: null, avatar_url: null, banner_url: null, emoji_url: null, emojiData: null, emoji2_url: null, emoji2Data: null };
var authUid = null;
var chats = [];
var cur = null;
var curChatId = null;
var curChatTarget = null;
var tempAvaFile = null;
var tempBannerFile = null;
var tempEmojiData = null;
var tempEmojiFile = null;
var profileEmojiAnim = null;
var profileEmoji2Anim = null;
var editEmojiAnim = null;
var emojiPreviewAnim = null;
var upEmojiAnim = null;
var upEmoji2Anim = null;
var chatHeaderEmojiAnim = null;
var isRegister = false;
var chatChannels = {};
var profileChannels = {};
var globalChannel = null;
var hasUsername = false;
var chatIdsSet = new Set();
var pendingSend = false;
var rtConnected = false;
var visibilityBound = false;
var beforeUnloadBound = false;
var lastOnlineStatus = null;
var onlineThrottleTimer = null;
var reconnectAttempts = 0;
var reconnectTimer = null;
var MAX_RECONNECT_DELAY = 60000;
var searchTimer = null;
var viewingUserId = null;
var cachedToken = null;
var emojiCache = {};
var chatListEmojiAnims = [];
var searchEmojiAnims = [];
var _upEmojiData = null;
var _upEmoji2Data = null;
var _upEmojiOwner = '';
var currentReply = null;
var idbParams = { name: 'emoji_store', version: 1 };
var dbPromise = null;
