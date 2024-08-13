$('#btnPayment').click(function() {
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



