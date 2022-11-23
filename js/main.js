$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            aceito: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, digite o seu nome completo',
            email: 'Digite um e-mail válido',
            telefone: 'Digite seu telefone com DDD',
            aceito: 'Aceite os termos para prosseguir'
        }
    })
})