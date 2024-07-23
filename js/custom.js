jQuery(document).ready(function ($) {
    $('body').prepend('<header></header>');
    $('body').append('<footer></footer>');
    $('header').load('./header.html');
    $('footer').load('./footer.html');

});



