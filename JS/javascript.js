// Inicialização EmailJS
(function(){
    emailjs.init("LZcrkAwucARaxIWel");
})();

const chk = document.getElementById('chk');

function toggleLightMode() {
    document.body.classList.toggle('light');
}

function loadTheme() {
    const lightMode = localStorage.getItem('light');
    if (lightMode === '1') {
        toggleLightMode();
        chk.checked = true;
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

//validação de email
function validar(event) {
    event.preventDefault();

    const name = document.getElementById('from_name').value.trim();
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const message = document.getElementById('msg').value.trim();
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    let errors = [];

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '') {
        errors.push('Preencha o nome.');
    }
    if (email === '') {
        errors.push('Preencha o e-mail.');
    } else if (!emailPattern.test(email)) {
        errors.push('O e-mail deve estar no formato correto.');
    }
    if (assunto === '') {
        errors.push('Preencha o assunto.');
    }
    if (message === '') {
        errors.push('Preencha a mensagem.');
    }

    if (errors.length > 0) {
        errorMessage.innerHTML = errors.join('<br>');
        errorMessage.style.display = 'inline';
        successMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'none';
        successMessage.style.display = 'inline';
        successMessage.textContent = 'E-mail enviado com sucesso!';

        // Envio do e-mail via EmailJS
        emailjs.sendForm('service_xv6rvjz', 'template_o7cy6zn', '#contact-form')
            .then(function(response) {
                console.log('Success:', response);
            }, function(error) {
                console.log('Error:', error);
            });
    }
}