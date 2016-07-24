console.log('\'Allo \'Allo!');

$('.nav-xs-trigger').on('click',function(){
    $('.nav-xs-panel').addClass('active');
    $('.nav-xs-overlay').addClass('active');
});

$('.nav-xs-overlay').on('click',function(){
    $('.nav-xs-panel').removeClass('active');
    $('.nav-xs-overlay').removeClass('active');
});

$('[toggle-modal]').on('click', function () {
    var a = $(this);
    var b = a.attr('toggle-modal');
    $('#'+b).addClass('visible');
    $('.modal-overlay').addClass('visible');
    $('body').addClass('modal-mode')
});

$('.modal-overlay').on('click', function () {
    $('.modal-panel-lg').removeClass('visible');
    $('.modal-panel').removeClass('visible');
    $('.modal-overlay').removeClass('visible');
    $('body').removeClass('modal-mode')
});

$('#file').change(function () {
    var filename = $(this).val().replace(/.*(\/|\\)/, '');
    $('.form-control-file-text').html(filename)
});