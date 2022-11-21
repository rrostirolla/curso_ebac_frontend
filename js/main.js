$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00.000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: {
                required:'Por favor, informe seu nome'
            },
            email: {
                required:'Por favor, informe seu email'
            },
            telefone: {
                required:'Por favor, informe seu telefone'
            },
            cpf: {
                required:'Por favor, informe seu CPF'
            },
            endereco: {
                required:'Por favor, informe seu endereço'
            },
            cep: {
                required:'Por favor, informe seu CEP'
            }
        }
    })
})