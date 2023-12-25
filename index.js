/*

$(function() {
    $('#add-tarefa').on('click', function() {
        var itemText = $('#NovaTarefa').val();
        
        var Tarefa1 = $('<li>' + itemText + '</li>');
        Tarefa1.hide();

        $('ul').prepend(Tarefa1);
        
        Tarefa1.slideDown();
        
    });
});
 */

$(function() {
    $('#add-tarefa').on('click', function() {
        var itemTexto = $('#NovaTarefa').val();
        
        var novaTarefa1 = $('<li class="clickable">' + itemTexto + '</li>');
        novaTarefa1.hide();
        
        $('ul').prepend(novaTarefa1);
        
        novaTarefa1.slideDown();
    });

    $('ul').on('click', '.clickable', function() {
        $(this).toggleClass('completed');
    });
});