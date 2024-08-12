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