    // 비밀번호 보기, 숨기기
    $(".toggle-password").click(function() {
        var input = $(this).siblings("input");
        var isPassword = input.attr("type") === "password";
        
        // input의 타입 변경
        input.attr("type", isPassword ? "text" : "password");
        
        // 버튼의 클래스 토글
        $(this).toggleClass("active");
    });
