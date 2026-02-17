// ==================== THEME ====================

var isDark = false;

function initTheme() {
    var saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        setTheme(true);
    } else {
        setTheme(false);
    }
}

function toggleTheme() {
    setTheme(!isDark);
}

function setTheme(dark) {
    isDark = dark;
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    var toggle = document.getElementById('themeToggle');
    if (toggle) {
        if (isDark) toggle.classList.add('on');
        else toggle.classList.remove('on');
    }

    // Update meta theme-color
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = isDark ? '#000000' : '#ffffff';
}
