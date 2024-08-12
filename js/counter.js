// 모든 카운터 요소를 선택합니다.
let counters = document.querySelectorAll('.counter');

// 각 카운터마다 이벤트 리스너를 설정합니다.
counters.forEach(function(counter) {
    const plusBtn = counter.querySelector('.plus');
    const minusBtn = counter.querySelector('.minus');
    const number = counter.querySelector('span');

    // 플러스 버튼 클릭 시 이벤트
    plusBtn.addEventListener('click', function() {
        let count = Number(number.textContent);
        count = count + 1;
        number.textContent = count;
    });

    // 마이너스 버튼 클릭 시 이벤트
    minusBtn.addEventListener('click', function() {
        let count = Number(number.textContent);
        // 카운트가 0 이하로 내려가지 않도록 제한
        if (count > 0) {
            count = count - 1;
            number.textContent = count;
        }
    });
});


    // 체크박스 전체동의
    // 체크박스 전체 선택
    $(".checkbox_group").on("click", "#check_all", function () {
        $(this).parents(".checkbox_group").find('input').prop("checked", $(this).is(":checked"));
    });

    // 체크박스 개별 선택
    $(".checkbox_group").on("click", ".normal", function() {
        var is_checked = true;

        $(".checkbox_group .normal").each(function(){
            is_checked = is_checked && $(this).is(":checked");
        });

        $("#check_all").prop("checked", is_checked);
    });
