const chk = document.getElementById('chk');

// Função de alternância de modo claro/escuro
function toggleLightMode() {
    document.body.classList.toggle('light');
}

// Carrega o tema salvo no localStorage
function loadTheme() {
    const darkMode = localStorage.getItem('light');

    if (darkMode === '1') {
        toggleLightMode();
    }
}

loadTheme();

// Adiciona ou remove o modo claro/escuro e salva no localStorage
chk.addEventListener('change', () => {
    toggleLightMode();

    if (document.body.classList.contains('light')) {
        localStorage.setItem('light', '1');
    } else {
        localStorage.removeItem('light');
    }
});