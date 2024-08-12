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
