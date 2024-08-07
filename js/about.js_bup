// jQuery(document).ready(function ($) {


//     // AOS.init();
//     // // CounterUp 플러그인 초기화
//     // $(".counter1 code").counterUp({
//     //     delay: 10,
//     //     time: 1500
//     // });


//         // AOS 초기화
//         AOS.init();

//         // 카운터 요소가 이미 초기화되었는지 확인하기 위한 변수
//         var isCounted = false;
    
//         // 카운터 초기화 함수
//         function initializeCounter() {
//             if (!isCounted) {
//                 $(".counter1 code").counterUp({
//                     delay: 10,
//                     time: 2000
//                 });
//                 isCounted = true;
//             }
//         }
    
//         // 스크롤 시 카운터 초기화
//         $(window).on('scroll', function() {
//             var $counter = $(".counter1");
//             var windowTop = $(window).scrollTop();
//             var windowHeight = $(window).height();
//             var counterTop = $counter.offset().top;
    
//             if ((windowTop + windowHeight) > counterTop) {
//                 initializeCounter();
//             }
//         });
    
//         // 초기 스크롤 이벤트 트리거
//         $(window).trigger('scroll');

// });


$(document).ready(function() {
    AOS.init();

    // 카운터 초기화 함수
    function initializeCounter(selector, endValue) {
        $({ val: 0 }).animate({ val: endValue }, {
            duration: 2000,
            step: function() {
                $(selector).text(Math.floor(this.val)); // 쉼표 없이 숫자 표시
            },
            complete: function() {
                $(selector).text(Math.floor(this.val)); // 쉼표 없이 숫자 표시
            }
        });
    }

    // 각 카운터에 대해 설정
    var counters = [
        { selector: '.counter1 code.counter1', endValue: 2012 },
        { selector: '.counter1 code.counter2', endValue: 1102 },
        { selector: '.counter1 code.counter3', endValue: 180 }
    ];

    // 각 카운터 요소에 대해 설정
    counters.forEach(function(counter) {
        $(counter.selector).text(counter.endValue); // 초기값 설정
        var waypoint = new Waypoint({
            element: document.querySelector(counter.selector),
            handler: function() {
                initializeCounter(counter.selector, counter.endValue);
                this.destroy(); // 카운터 초기화 후 Waypoint를 파괴하여 다시 호출되지 않도록 합니다
            },
            offset: '75%' // 요소가 화면에 75% 이상 보일 때 카운터를 초기화
        });
    });
});


// });