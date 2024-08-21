$(document).ready(function() {
    // 최대 참여자 수
    const MAX_PARTICIPANTS = 10;
    let participantCount = $('.participant').length;

    $('#plusParticipant').click(function() {
        if (participantCount >= MAX_PARTICIPANTS) {
            alert('참여자는 최대 ' + MAX_PARTICIPANTS + '명까지 추가할 수 있습니다.');
            return;
        }

        participantCount++;
        
        // 참여자 수 증가
        $('#counter span').text(participantCount);

        // 현재 .participant의 복제본을 생성
        var newParticipant = $('.participant').first().clone();

        // 복제된 요소의 id 속성을 제거해서 동일한 id가 존재하지 않도록 처리
        newParticipant.removeAttr('id');

        // 복제된 요소 내부의 텍스트 입력란 초기화
        newParticipant.find('input[type="text"]').val('');

        // 참여자 제목 업데이트 (참여자2, 참여자3, ...)
        newParticipant.find('.participant-title').text('참여자' + participantCount);

        // 복제된 요소의 라디오 버튼 id, name 값과 for 값 업데이트
        updateRadioAttributes(newParticipant);

        // "구매자 정보와 동일" 체크박스의 id 및 for 속성 업데이트
        updateCheckboxAttributes(newParticipant);

        // 기존의 .participant 뒤에 새로운 요소를 추가
        $('.participant').last().after(newParticipant);

        // 새롭게 추가된 카운터에 대해 이벤트 리스너 재설정
        setCounterListeners(newParticipant);

        // 참여자 번호 재정렬
        updateParticipantTitles();
    });

    // minus 버튼 클릭 시
    $('#minusParticipant').click(function() {
        if (participantCount > 1) {
            participantCount--;

            $('#counter span').text(participantCount);

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
        let counters = participant.find('.counter');

        counters.each(function() {
            const plusBtn = $(this).find('.plus');
            const minusBtn = $(this).find('.minus');
            const number = $(this).find('span');

            plusBtn.on('click', function() {
                let count = Number(number.text());
                count = count + 1;
                number.text(count);
            });

            minusBtn.on('click', function() {
                let count = Number(number.text());
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

    // 라디오 버튼의 id, name, for 값을 고유하게 업데이트하는 함수
    function updateRadioAttributes(participant) {
        let sizeRadio = participant.find('.size-radio');
        sizeRadio.find('input[type="radio"]').each(function(index) {
            const baseId = 'size' + (index + 1);
            const newId = baseId + '-' + participantCount; // 고유 ID 생성
            const newName = 'size' + participantCount; // 고유 Name 생성
            $(this).attr('id', newId);
            $(this).attr('name', newName);
            $(this).siblings('label').attr('for', newId);
        });
    }

    // 체크박스의 id와 for 값을 고유하게 업데이트하는 함수
    function updateCheckboxAttributes(participant) {
        const checkbox = participant.find('input[type="checkbox"]');
        const label = participant.find('label[for="agree"]');
        const newId = 'agree' + participantCount; // 고유 ID 생성
        checkbox.attr('id', newId);
        label.attr('for', newId);
    }  


});
