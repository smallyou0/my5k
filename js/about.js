jQuery(document).ready(function ($) {
    $(".counter1 code").counterUp({
        delay: 10,
        time: 1000,
    });

    const goTopBtn = document.getElementById("goTopBtn");

    // 스크롤 이벤트 핸들러
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            goTopBtn.classList.add("show");
        } else {
            goTopBtn.classList.remove("show");
        }
    });

    // 클릭 이벤트 핸들러
    goTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


});