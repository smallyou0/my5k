jQuery(document).ready(function ($) {
    // var isIndexPage = window.location.pathname === '/';

    // if (isIndexPage) {
        // index.php 페이지일 때 경로 설정
        // $('body').prepend('<header></header>');
        // $('body').append('<footer></footer>');
        // $('header').load('./html/header.html');
        // $('footer').load('./html/footer.html');
    // } 
    // else {
        // 그 외 페이지일 때 경로 설정
        $('body').prepend('<header></header>');
        $('body').append('<footer></footer>');
        $('header').load('./header.html');
        $('footer').load('./footer.html');
    // }

    
});



