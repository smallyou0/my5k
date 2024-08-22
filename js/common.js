//loading bar
function fnLoadingOpen() {
  $("#dim-layer").show();
  $("#spinner").show();
}
function fnLoadingClose() {
  $("#dim-layer").hide();
  $("#spinner").hide();
}

//경고창과 확인이 나오는 함수
function alert_confirm(comment) {
  var modalSendHTML =
    '<div class="layer"></div>' +
    '<dialog class="dialog modal_dialog" open>' +
    "<p>" +
    comment +
    "</p>" +
    '<button class="btn-confirm" type="button" onclick="modal_close()">확인</button>' +
    "</dialog>";
  $("body").append(modalSendHTML);
  $(".layer").addClass("active");
}

//경고창과 확인(링크)이 나오는 함수
function alert_link(comment, link) {
  var modalSendHTML = `<div class="layer"></div>
    <div class="popup-container modal_dialog">
      <div class="popup-content-container">
        <div class="popup-content">
          <p>${comment}</p>
        </div>
      </div>
      <div class="button-container">
        <button class="confirm-button">확인</button>
      </div>
    </div>`;

  $("body").append(modalSendHTML);
  $(".layer").addClass("active");

  // 확인 버튼에 클릭 이벤트 핸들러 추가
  $(".confirm-button").click(function () {
    modal_close_link(link);
  });
}

//경고창과 취소, 확인(링크)이 나오는 함수
function alert_link_cancel(title='', comment, link) {
  var modalSendHTML =
    '<div class="layer"></div>' +
    '<div class="withdraw-popup-container modal_dialog">' +
    '<div class="withdraw-popup-content-container">' +
    '<div class="withdraw-popup-content">';
    
    if (title!=''){
      modalSendHTML += '<div class="withdraw_txt">' + title + '</div>';
    }
    
    modalSendHTML += "<p>" +
    comment +
    "</p>" +
    "</div>" +
    "</div>" +
    '<div class="withdraw-button-container">' +
    '<button class="withdraw-close-button bg-white" onclick="modal_close()">취소</button>' +
    '<button class="withdraw-confirm-button bg-white" onclick="modal_close_link(\'' +
    link +
    "')\">확인</button>" +
    "</div>" +
    "</div>";

  $("body").append(modalSendHTML);
  $(".layer").addClass("active");
}

function modal_close() {
  $(".modal_dialog").remove();
  $(".layer").remove();
}

function modal_close_link(link) {
  window.location.href = link;
}

// 쿠키 설정 함수
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// 쿠키 가져오기 함수
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// 팝업 열기 함수 24.05.28 ysy
function popup_link(name, img, link) {
  var modalSendHTML =
    '<div class="layer"></div>' +
    '<div class="withdraw-popup-container modal_dialog">' +
    '<div class="withdraw-popup-content-container">' +
    
    '<p><a href="'+link+'"><img src="/upload/popup/'+img+'"></a></p>' +
    
    '</div>' +
    '<div class="withdraw-button-container">' +
    '<button class="withdraw-close-button bg-white" onclick="close_modal_do_not_show(\'' + name + '\')">다시보지 않기</button>' +
    '<button class="withdraw-confirm-button bg-white" onclick="close_modal()">확인</button>' +
    '</div>' +
    '</div>';

  $("body").append(modalSendHTML);
  $(".layer").addClass("active");
}

// 모달 닫기 함수 (다시보지 않기)
function close_modal_do_not_show(name) {
  setCookie(name, 'true', 7); // 쿠키를 7일 동안 설정
  $(".layer, .withdraw-popup-container").remove();
}

// 모달 닫기 함수 (확인 버튼)
function close_modal(link) {
  $(".layer, .withdraw-popup-container").remove();
}
// 팝업 열기 함수 24.05.28 ysy end //////////////


// 앱 접근 권한 안내
function alert_app_permission_confirm() {
  var modalAccessHTML =
    '<div class="layer active"></div>' +
    '<dialog id="modal" class="dialog dialog6 access-rights" open>' +
    "<div>" +
    '<strong class="text-center pb10">앱 접근권한 안내</strong>' +
    '<div class="txt-type5 text-center pb30">서비스 이용을 위해 권한 허용을 해주시기 바랍니다.</div>' +
    '<ul class="access-rights__list">' +
    "<li>" +
    '<a href="" class="access-rights__link align vm ico1">' +
    '<div class="">' +
    '<div class="txt-type3">카메라 (필수)</div>' +
    '<div class="txt-type4">무게 측량 및 차량번호 촬영을 위한 권한</div>' +
    "</div>" +
    "</a>" +
    "</li>" +
    "<li>" +
    '<a href="" class="access-rights__link align vm ico2">' +
    '<div class="">' +
    '<div class="txt-type3">위치 (필수)</div>' +
    '<div class="txt-type4">서비스를 위한 디바이스 위치 안내</div>' +
    "</div>" +
    "</a>" +
    "</li>" +
    "<li>" +
    '<a href="" class="access-rights__link align vm ico3">' +
    '<div class="">' +
    '<div class="txt-type3">주소록 (필수)</div>' +
    '<div class="txt-type4">연락처 검색 및 파일 공유를 위한 권한</div>' +
    "</div>" +
    "</a>" +
    "</li>" +
    "<li>" +
    '<a href="" class="access-rights__link align vm ico4">' +
    '<div class="">' +
    '<div class="txt-type3">저장공간 (필수)</div>' +
    '<div class="txt-type4">계근 기록 저장 및 파일 첨부를 위한 권한</div>' +
    "</div>" +
    "</a>" +
    "</li>" +
    "<li>" +
    '<a href="" class="access-rights__link align vm ico5">' +
    '<div class="">' +
    '<div class="txt-type3">카메라 (필수)</div>' +
    '<div class="txt-type4">시세 알림, 게시판 등 소식알림을 위한 권한</div>' +
    "</div>" +
    "</a>" +
    "</li>" +
    "</ul>" +
    "</div>" +
    '<button id="btn-confirm" class="btn-confirm">확인</button>' +
    "</dialog>";

  $("body").append(modalAccessHTML);

  //모달 닫기
  $(".btn-confirm").each(function () {
    $(this).click(function () {
      var modal = $(this).closest(".dialog");
      var layer = modal.prev(".layer");

      modal.hide();
      layer.removeClass("active");
    });
  });
}

function alert_share() {
  var modalSendHTML =
    '<div class="layer active"></div>' +
    '<div class="dialog4 active">' +
    '<div class="dialog4__header">' +
    "<div>" +
    "<strong>전농자원</strong>" +
    "<p>12루1234</p>" +
    "<p>알루미늄</p>" +
    "</div>" +
    "</div>" +
    '<ul class="dialog4__list">' +
    '<li><button class="btn-send" type="button">PDF 저장하기</button></li>' +
    '<li><button class="btn-send" type="button">메일 전송</button></li>' +
    '<li><button class="btn-send" type="button">카카오톡 전송</button></li>' +
    '<li><button class="btn-send" type="button">문자 전송</button></li>' +
    "</ul>" +
    "</div>";
  $("body").append(modalSendHTML);

  $(".layer").click(function () {
    $(this).hide();
    $(".dialog4").hide();
  });
}

function onPageLoad() {
  var currentPage = window.location.href; // 현재 페이지의 절대 URL을 가져옴

  // 각 페이지에 맞는 body 스타일 설정
  if (currentPage.includes("index.php") || currentPage.includes("customer-manage.php")) {
    document.body.style.backgroundColor = "#f8f8f8";
    document.querySelector(".header-sub > div").style.backgroundColor = "#f8f8f8";
  
  } else if (currentPage.includes("buy-coin.php")) {
    document.body.style.backgroundColor = "#f8f8f8";
    document.querySelector(".content").style.padding = 0;
  
  } else if (currentPage.includes("weighing-confirm-completed.php")) {
    var alertMessage = document.createElement("div"); // div 요소 생성
    alertMessage.className = "alert-type1"; // 클래스 추가
    alertMessage.textContent = "문서 생성에 50코인을 사용하였습니다"; // 텍스트 추가

    document.body.appendChild(alertMessage); // body에 요소 추가

    // 알림 메시지가 나타날 때 스르르 사라지도록 애니메이션 적용
    alertMessage.style.opacity = "0"; // 초기 투명도 설정

    // 100ms 후에 애니메이션 시작
    setTimeout(function () {
      alertMessage.style.transition = "opacity 1s ease"; // 애니메이션 속성 설정
      alertMessage.style.opacity = "1"; // 투명도를 1로 변경하여 나타나도록 함
    }, 100);

    // 3초 후에 알림 메시지 사라지도록 설정
    setTimeout(function () {
      alertMessage.style.opacity = "0"; // 투명도를 0으로 변경하여 사라지도록 함
      // 애니메이션 종료 후에 요소를 제거
      setTimeout(function () {
        document.body.removeChild(alertMessage);
      }, 1000);
    }, 3000);

  } else if (currentPage.includes("trading-statement-completed.php")) {
    var alertMessage = document.createElement("div"); // div 요소 생성
    alertMessage.className = "alert-type1"; // 클래스 추가
    alertMessage.textContent = "문서 생성에 50코인을 사용하였습니다"; // 텍스트 추가

    document.body.appendChild(alertMessage); // body에 요소 추가

    // 알림 메시지가 나타날 때 스르르 사라지도록 애니메이션 적용
    alertMessage.style.opacity = "0"; // 초기 투명도 설정

    // 100ms 후에 애니메이션 시작
    setTimeout(function () {
      alertMessage.style.transition = "opacity 1s ease"; // 애니메이션 속성 설정
      alertMessage.style.opacity = "1"; // 투명도를 1로 변경하여 나타나도록 함
    }, 100);

    // 3초 후에 알림 메시지 사라지도록 설정
    setTimeout(function () {
      alertMessage.style.opacity = "0"; // 투명도를 0으로 변경하여 사라지도록 함
      // 애니메이션 종료 후에 요소를 제거
      setTimeout(function () {
        document.body.removeChild(alertMessage);
      }, 1000);
    }, 3000);
  }
}

$(document).ready(function () {

  // 고정버튼 있을시 body에 padding-bottom값 생기도록
  const fixE1 = document.querySelector(".fix-bottom");
  const body = document.body;

  if (fixE1) {
    const fixE1Height = fixE1.offsetHeight;
    body.style.paddingBottom = fixE1Height + 40 + "px";
  }
  
  // 페이지 로드 이벤트 함수 호출
  onPageLoad();

  // 클릭 이벤트 핸들러 추가
  $(".list-type3 li a").click(function () {
    $(".list-type3 li a").removeClass("active");
    $(this).toggleClass("active");
  });

  // 24.04.08 ysy 카메라내 클릭 플로우
  $(".cam-write").click(function () {
    $(".cam-wrap").removeClass("cam-shot");
    $(".cam-wrap").addClass("cam-next");
    $(this).hide();
  });

  //24.04.08 ysy 업로드 버튼 클릭시 팝업 뜨도록
  $('.btn-upload').click(function() {
    $('#dialogSend').show()
    $('#weighingLayer').show()
  });

  $('#weighingLayer').click(function() {
    $('#dialogSend').hide()
    $('#weighingLayer').hide()
  })

  //테이블 행 클릭시 color효과
  $(".table-type2 tr").click(function () {
    var isActive = $(this).hasClass("active");

    $(this).toggleClass("active", !isActive);
    $(".btn-main-off i").addClass("active");
    $(".btn-off").addClass("active");
  });
  
});

//숫자 포멧
function formatCurrency(num) {
  var inputValue = num.replace(/,/g, '');
  var formattedValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return formattedValue;
}

//지금 시간의 시:분 출력
function getCurrentTime() {
  const now = new Date();
  const minutes = now.getMinutes().toString().padStart(2, '0'); // 분을 두 자리 숫자로 변환
  const seconds = now.getSeconds().toString().padStart(2, '0'); // 초를 두 자리 숫자로 변환
  return `${minutes}:${seconds}`;
}

//timestamp에서 시:분 출력
function extractTime(dateTimeString) {
  if (dateTimeString === null){
    return '';
  }

  // dateTimeString에서 시간 부분을 추출 (인덱스 11부터 16까지)
  var timePart = dateTimeString.slice(11, 16); // HH:mm 형식의 시간 부분 추출
  return timePart; // 추출된 시간 부분 반환
}

//스크롤이동
function scrollToDiv(divId) {
  // 해당 divId를 가진 요소의 위치를 파악
  var targetDiv = $('#' + divId);
  if (targetDiv.length) { // 해당 요소가 존재하는 경우
      var offsetTop = targetDiv.offset().top;

      // 스크롤 위치 이동
      $('html, body').animate({
          scrollTop: offsetTop - 70
      }, 1000); // 스크롤 이동 애니메이션 시간 (밀리초)

      // 해당 요소에 포커스 설정 (포커스 가능한 요소일 경우)
      targetDiv.focus();
  }
}

function gpsSet(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      $('#sGpsLocation').val(latitude+","+longitude);
    });
  }
}

function kakaoshare(link, sort){
  if (sort == 'weighing'){
    var docu = '계근증명서';
  }else if(sort == 'trading'){
    var docu = '거래명세서';
  }

  Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: docu+'가 공유되었습니다.',
      imageUrl:
      'https://re-man.co.kr/images/kakao_share2.png',
      link: {
      mobileWebUrl: 'https://re-man.co.kr/'+link,
      webUrl: 'https://re-man.co.kr/'+link,
      },
    },
    buttons: [
      {
      title: 'PDF 열기',
      link: {
        mobileWebUrl: 'https://re-man.co.kr/'+link,
        webUrl: 'https://re-man.co.kr/'+link,
      },
      },
    ],
  });

}