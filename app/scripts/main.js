// ####################
// Navigation
// ####################

$('.nav-xs-trigger').on('click',function(){
    $('.nav-xs-panel').addClass('active');
    $('.nav-xs-overlay').addClass('active');
});

$('.nav-xs-overlay').on('click',function(){
    $('.nav-xs-panel').removeClass('active');
    $('.nav-xs-overlay').removeClass('active');
});

// ####################
// File
// ####################

$('#file').change(function () {
    var filename = $(this).val().replace(/.*(\/|\\)/, '');
    $('.form-control-file-text').html(filename)
});