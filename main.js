const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroB = parseInt(document.getElementById('number-b').value)
    const numeroA = parseInt(document.getElementById('number-a').value)
    const mensagemDeSucesso = `O valor <b>B (${numeroB}) <u>é maior</u></b>  que o valor <b>A (${numeroA})</b>`
    const mensagemDeErro = `O valor <b>B (${numeroB}) <u>não</u></b> é maior que o valor <b>A (${numeroA})</b>`
    
    if (numeroA < numeroB) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemDeSucesso
        containerMensagemSucesso.style.display = 'block'

    } else {
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemDeErro
        containerMensagemErro.style.display = 'block' 
    }

    numeroA = ''
    numeroB = ''
});

