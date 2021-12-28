$(function (){
    var gnbFlag = false;
    var gnbIndex;

    // nav메뉴에서 마우스 올렸을때
    $(".nav li").on ({
        "mouseenter" : function() {
            // inb show
        if (gnbIndex != undefined) {
            $('.lnb').eq(gnbIndex).css('display', 'none');
        }
        gnbIndex = $(this).index();
        gnbFlag = true;

        $(".lnb_container").removeClass("disappear");
        $(".lnb_container").addClass("appear");
        $(".lnb_container").show();

        $(".lnb").eq(gnbIndex).css("display","block");

        // 액티브 바 show

        $(".active_bar").show();
        // 선택된 li의 left이드를 구해 액티브바의 위치와 길이를 조절
        var listLeft = $(this).offset().left;
        var listWidth = $(this).width();

        $(".active_bar").width(listWidth);
        $(".active_bar").offset({left: listLeft + 17});
        // li 패딩이 이었으므로 17
        }
    });

    // 하위 메뉴 안 보이게 하기

    $(".lnb_container").on ({
        "mouseleave" : function() {
            // inb show
        if (gnbFlag) {
        $(".lnb_container").removeClass("appear");
        $(".lnb_container").addClass("disappear");
        $(".lnb_container").hide();
        $(".active_bar").hide();
        } else {
            return;
        } 
        }
    });

    $(".trigger").on ({
        "click" : function() {
            // 햄버거 메뉴 버튼이 보일때(햄버거 메뉴가 visible 상태인가로 판단)
            if($(".mobile.hamburger").is(":visible")) {
                // 모바일 닫기 버튼 show
                $(".mobile.hamburger").hide();
                $(".mobile.close").show();

                // 모바일 전체메뉴 show
                $("#main_header").height(60);
                $("#main_header #search_box").hide();
                $("#main_content").hide();
                $("#main_footer").hide();

                $("#mobile_menu").empty();
                $(".nav li").eq(3).show();
                $(".nav li").eq(4).show();

                var nav = $(".nav").clone();
                $("#mobile_menu").append(nav);
                $("#mobile_menu").show();

            } else {
                $(".mobile.hamburger").show();
                $(".mobile.close").hide();

                $("#main_header").height(390);
                $("#main_header #search_box").show();
                $("#main_content").show();
                $("#main_footer").show();
                $("#mobile_menu").hide();

            }
        }
    });

    $(window).resize(function() {
        var width = $(window).width();

        if(width >= 767) {
            $(".nav li").eq(3).hide();
            $(".nav li").eq(4).hide();
        }

        if ($("#mobile_menu").is(":visible")) {
            $(".mobile.hamburger").show();
            $(".mobile.close").hide();

            $("#main_header").height(390);
            $("#main_header #search_box").show();
            $("#main_content").show();
            $("#main_footer").show();
            $("#mobile_menu").hide();
        }
    });
});