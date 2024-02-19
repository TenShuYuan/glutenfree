$(function () {
    //---漢堡按鈕---

    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');
    });

    // 滑動至錨點位置
    $('.menu a').click(
        function () {
            var btn = $(this).attr('href');
            var pos = $(btn).offset();
            $('html,body').animate({ scrollTop: pos.top }, 1000);
        });

    // 置頂按鈕(滾到最上面)
    $('#gotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });


    // 置頂按鈕淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#gotop').stop().fadeIn('', 1);
        }
        else {
            $('#gotop').stop().fadeOut();
        }

    });

});

// jquery smoove
$('.smoove').smoove({
    offset: '20%'
});


