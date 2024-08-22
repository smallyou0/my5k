$(document).ready(function() {
    // 최대 참여자 수
    const MAX_PARTICIPANTS = 10;
    let participantCount = $('.participant2').length;

    $('#plusParticipant').click(function() {
        if (participantCount >= MAX_PARTICIPANTS) {
            alert('참여자는 최대 ' + MAX_PARTICIPANTS + '명까지 추가할 수 있습니다.');
            return;
        }

        participantCount++;
        
        // 참여자 수 증가
        $('#counter span').text(participantCount);

        // .participant2 복제
        var newParticipant2 = $('.participant2').first().clone();

        // 복제된 요소 내부의 텍스트 입력란 초기화
        newParticipant2.find('input[type="text"]').val('');
        newParticipant2.find('input[class="join_size"]').val('S');
        newParticipant2.find('input[class="join_cnt"]').val('0');
		

        // 참여자 제목 업데이트 (참여자2, 참여자3, ...)
        newParticipant2.find('.participant-title').text('참여자' + participantCount);

        // 참여자2 이상에서는 .chk_box 요소 제거
        if (participantCount > 1) {
            newParticipant2.find('.chk_box').remove();
        } else {
            updateCheckboxAttributes(newParticipant2);
        }

        // 복제된 요소의 라디오 버튼 id, name 값과 for 값 업데이트
        updateRadioAttributes(newParticipant2);

        // 기존의 .participant2 뒤에 새로운 요소를 추가
        $('.participant2').last().after(newParticipant2);

        // 새롭게 추가된 카운터에 대해 이벤트 리스너 재설정
        setCounterListeners(newParticipant2);

        // 참여자 번호 재정렬
        updateParticipantTitles();
    });

    // minus 버튼 클릭 시
    $('#minusParticipant').click(function() {
        if (participantCount > 1) {
            participantCount--;

            $('#counter span').text(participantCount);

            // .participant2 요소가 2개 이상일 때만 제거
            if ($('.participant2').length > 1) {
                $('.participant2').last().remove();
            }

            // 남아있는 참여자의 번호를 다시 정렬
            updateParticipantTitles();
        }
    });

    // 기존의 participant2 요소에 대해 카운터 이벤트 리스너 설정
    setCounterListeners($('.participant2'));

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
				$(this).parents("li").find(".join_cnt").val(count);
            });

            minusBtn.on('click', function() {
                let count = Number(number.text());
                if (count > 0) {
                    count = count - 1;
                    number.text(count);
					$(this).parents("li").find(".join_cnt").val(count);
                }
            });
        });
    }

    // 참여자 번호를 다시 정렬하는 함수
    function updateParticipantTitles() {
        $('.participant2').each(function(index) {
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
