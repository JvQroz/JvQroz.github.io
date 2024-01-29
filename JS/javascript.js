const chk = document.getElementById('chk');

function toggleLightMode() {
    document.body.classList.toggle('light');
}

function loadTheme() {
    const darkMode = localStorage.getItem('light');

    if (darkMode === '1') {
        toggleLightMode();
    }
}

loadTheme();

chk.addEventListener('change', () => {
    toggleLightMode();

    if (document.body.classList.contains('light')) {
        localStorage.setItem('light', '1');
    } else {
        localStorage.removeItem('light');
    }
});
