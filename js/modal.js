$('.btn-alert').click(function() {
    $('.layer').addClass('active')
    $('#alertModal1').addClass('active')
})
$('.btn-close').click(function() {
    $('.layer').removeClass('active')
    $('#alertModal1').removeClass('active')
})
// 이용약관 모달 apply-ticket-present-input
$('.btn-look').click(function() {
    $('.layer').addClass('active')
    $('#termsModal').addClass('active')
})
$('.btn-close').click(function() {
    $('.layer').removeClass('active')
    $('#termsModal').removeClass('active')
})
// edit-meminfo
$('.btn-edit').click(function() {
    $('.layer').addClass('active')
    $('#alertModal1').addClass('active')
})
$('.btn-close').click(function() {
    $('.layer').removeClass('active')
    $('#alertModal1').removeClass('active')
})
// apply-ticket-list-detail
// 결제를 취소하시겠습니까?
$('#cancelPayment').click(function() {
    $('.layer').addClass('active')
    $('#alertModal2').addClass('active')
})
$('.btn-close').click(function() {
    $('.layer').removeClass('active')
    $('#alertModal2').removeClass('active')
    $('#alertModal3').removeClass('active')
})
$('.btn-close2').click(function() {
    $('#alertModal2').removeClass('active')
})
$('#btnConfirm').click(function() {
    // $('.layer').removeClass('active')
    $('#alertModal2').removeClass('active')
    $('#alertModal3').addClass('active')
})
// 신청 정보 수정 기간이 지났습니다.
$('#editInfo').click(function() {
    $('.layer').addClass('active')
    $('#alertModal1').addClass('active')
})
$('.btn-close').click(function() {
    $('.layer').removeClass('active')
    $('#alertModal1').removeClass('active')
})
// 참가권 신청 정보 수정이 완료되었습니다.
$('#editInfo').click(function() {
    $('.layer').addClass('active')
    $('#alertModal4').addClass('active')
})
$('.btn-close').click(function() {
    $('.layer').removeClass('active')
    $('#alertModal4').removeClass('active')
})
// apply-ticket-list-edit
// 참가권 신청 정보 수정이 완료되었습니다.
$('#editCompleted').click(function() {
    $('.layer').addClass('active')
    $('#alertModal1').addClass('active')
})
$('.btn-close').click(function() {
    $('.layer').removeClass('active')
    // $('#alertModal1').removeClass('active')
})
// apply-ticket-present-edit
// 참가권 신청 정보 수정이 완료되었습니다.
$('#btnEdit').click(function() {
    $('.layer').addClass('active')
    $('#alertModal1').addClass('active')
})
$('.btn-close').click(function() {
    $('.layer').removeClass('active')
    $('#alertModal1').removeClass('active')
})
// login
// 구매 유형을 선택해 주세요.
$('#btnNonmemPay').click(function() {
    $('.layer').addClass('active')
    $('#alertModal1').addClass('active')
})
$('.btn-close').click(function() {
    $('.layer').removeClass('active')
    $('#alertModal1').removeClass('active')
})




// 팝업 열기 함수 24.05.28 ysy
function modal_type1(comment, button, link) {
    // 기존 모달이 있으면 제거
    if ($(".alert-modal").length > 0) {
        $(".layer, .alert-modal").remove();
    }

    var modalSendHTML =
        '<div class="layer"></div>' +
        '<div class="alert-modal" id="alertModal1">' +
        '<div class="alert-modal__title">' + comment + '</div>' +
        '<button class="btn-close" type="button">' + button + '</button>' +
        '</div>';
  
    $("body").append(modalSendHTML);
    $(".layer").addClass("active");

    // 버튼 클릭 시 링크로 이동하거나 모달을 닫음
    $(".btn-close").on("click", function() {
        if (link) {
            window.location.href = link;
        } else {
            $(".layer, .alert-modal").remove();  // 팝업 닫기
        }
    });
}

function modal_type2(comment, link, button) {
    var modalSendHTML =
        '<div class="alert-modal" id="alertModal2">' +
            '<div class="alert-modal__title">' + comment + '</div>' +
            '<div class="align center mt30 gap12">' +
                '<button class="btn-close2" id="btnConfirm" type="button">' + button + '</button>' +
                '<button class="btn-close gray" type="button">취소</button>' +
            '</div>' +
        '</div>';

    $("body").append(modalSendHTML);
    $(".layer").addClass("active");

    // "확인" 버튼 클릭 시 링크로 이동
    $('#btnConfirm').on('click', function() {
        window.location.href = link;
    });
}


// 모달 닫기
$('.btn-close').click(function() {
    $('.layer').removeClass('active')
    $('.alert-modal').removeClass('active')
})



