const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroB = parseInt(document.getElementById('number-b').value)
    const numeroA = parseInt(document.getElementById('number-a').value)
    const mensagemDeSucesso = `O valor <b>B (${numeroB}) <u>é maior</u></b>  que o valor <b>A (${numeroA})</b>`
    const mensagemDeErro = `O valor <b>B (${numeroB}) <u>não</u></b> é maior que o valor <b>A (${numeroA})</b>`
    const mensagemDeIgualdade = `O valor <b>B (${numeroB}) é <u>igual</u></b> o valor <b>A (${numeroA})</b>`
    const containerMensagemErro = document.querySelector('.error-message');
    const containerMensagemSucesso = document.querySelector('.success-message');
    const containerMensagemIgualdade = document.querySelector('.equal-message');
    
    containerMensagemSucesso.style.display = 'none';
    containerMensagemErro.style.display = 'none';
    containerMensagemIgualdade.style.display = 'none';

    if (numeroA < numeroB) {
        containerMensagemSucesso.innerHTML = mensagemDeSucesso
        containerMensagemSucesso.style.display = 'block'
    } else if (numeroA == numeroB){
        containerMensagemIgualdade.innerHTML = mensagemDeIgualdade
        containerMensagemIgualdade.style.display = 'block'
    } else {
        containerMensagemErro.innerHTML = mensagemDeErro
        containerMensagemErro.style.display = 'block' 
    }

    document.getElementById('number-a').value = ''
    document.getElementById('number-b').value = ''
});

