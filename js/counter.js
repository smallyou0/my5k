$(document).ready(function() {
    // 최대 참여자 수
    const MAX_PARTICIPANTS = 10;

    // plus 버튼 클릭 시
    $('#plusParticipant').click(function() {
        var count = parseInt($('#counter span').text());

        // 현재 참여자 수가 최대치를 초과하는 경우
        if (count >= MAX_PARTICIPANTS) {
            alert('참여자는 최대 ' + MAX_PARTICIPANTS + '명까지 추가할 수 있습니다.');
            return;
        }

        // 참여자 수 증가
        $('#counter span').text(count + 1);

        // 현재 .participant의 복제본을 생성
        var newParticipant = $('.participant').first().clone();

        // 복제된 요소의 id 속성을 제거해서 동일한 id가 존재하지 않도록 처리
        newParticipant.removeAttr('id');

        // 복제된 요소 내부의 텍스트 입력란 초기화
        newParticipant.find('input[type="text"]').val('');

        // 참여자 제목 업데이트 (참여자2, 참여자3, ...)
        newParticipant.find('.participant-title').text('참여자' + (count + 1));

        // 기존의 .participant 뒤에 새로운 요소를 추가
        $('.participant').last().after(newParticipant);

        // 새롭게 추가된 카운터에 대해 이벤트 리스너 재설정
        setCounterListeners(newParticipant);

        // 참여자 번호 재정렬
        updateParticipantTitles();
    });

    // minus 버튼 클릭 시
    $('#minusParticipant').click(function() {
        var count = parseInt($('#counter span').text());

        // 숫자가 1 이상일 때만 감소시킴
        if (count > 1) {
            $('#counter span').text(count - 1);

            // .participant 요소가 2개 이상일 때만 제거
            if ($('.participant').length > 1) {
                $('.participant').last().remove();
            }

            // 남아있는 참여자의 번호를 다시 정렬
            updateParticipantTitles();
        }
    });

    // 기존의 participant 요소에 대해 카운터 이벤트 리스너 설정
    setCounterListeners($('.participant'));

    // 카운터 이벤트 리스너를 설정하는 함수
    function setCounterListeners(participant) {
        // 모든 카운터 요소를 선택합니다.
        let counters = participant.find('.counter2');

        // 각 카운터마다 이벤트 리스너를 설정합니다.
        counters.each(function() {
            const plusBtn = $(this).find('.plus');
            const minusBtn = $(this).find('.minus');
            const number = $(this).find('span');

            // 플러스 버튼 클릭 시 이벤트
            plusBtn.on('click', function() {
                let count = Number(number.text());
                count = count + 1;
                number.text(count);
            });

            // 마이너스 버튼 클릭 시 이벤트
            minusBtn.on('click', function() {
                let count = Number(number.text());
                // 카운트가 0 이하로 내려가지 않도록 제한
                if (count > 0) {
                    count = count - 1;
                    number.text(count);
                }
            });
        });
    }

    // 참여자 번호를 다시 정렬하는 함수
    function updateParticipantTitles() {
        $('.participant').each(function(index) {
            $(this).find('.participant-title').text('참여자' + (index + 1));
        });
    }
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
