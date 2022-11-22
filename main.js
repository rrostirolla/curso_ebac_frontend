$(document).ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        const enderecoNovoItem = $('#nova-tarefa').val();
        const novoItem = $(`<li class="novo-item">${enderecoNovoItem}</li>`);
        $(novoItem).appendTo('ol');
        $(novoItem).fadeIn(1000);
        $('#nova-tarefa').val('');
    });

    $('ol').on('click', 'li', function (e) {
        $(this).css('text-decoration', 'line-through');
    });
});