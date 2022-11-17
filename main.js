$(document).ready(function() {
    $('button').click(function(e) {
        e.preventDefault();
        const enderecoNovoItem = $('#nova-tarefa').val();
        const novoItem = $(`<li class="novo-item">${enderecoNovoItem}</li>`);
        $(novoItem).appendTo('ol');
        $(novoItem).fadeIn(1000);
        $('#nova-tarefa').val('');
    });
});