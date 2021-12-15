$(function() {
    $toggle_btn = $('.toggle_btn');
    $header = $('#header');
    $buttons = $('.buttons');
    $header_global_nav = $('#header .global_nav');
    var header_height = $header.outerHeight();
    var window_height = $(window).height();
    var switch_adjust = 400;
    var shop_adjust = 600;
    var on_footer_adjust = 2000;

    /* scroll over header height, change header style */
    $(window).on('scroll', function() {
        if (header_height < $(window).scrollTop()) {
            $header.addClass('fixed');
        } else {
            $header.removeClass('fixed');
        }
    });

    /* scroll over adjust px, switch scroll arrow with page_top button */
    $(window).on('scroll', function() {
        if (switch_adjust < $(window).scrollTop()) {
            $buttons.addClass('fixed');
        } else {
            $buttons.removeClass('fixed');
        }
    });

    /* scroll over adjust px, change shopping button style */
    $(window).on('scroll', function() {
        if (shop_adjust < $(window).scrollTop()) {
            $buttons.addClass('shop_fixed');
        } else {
            $buttons.removeClass('shop_fixed');
        }
    });

    /* scroll over on footer, change page_top button style*/
    $(window).on('scroll', function() {
        if (on_footer_adjust < $(window).scrollTop()) {
            $buttons.addClass('on_footer');
        } else {
            $buttons.removeClass('on_footer');
        }
    });


    /* toggle button clicked, show global navigation
    $toggle_btn.click(function() {
        $global_nav.slideToggle();
        $toggle_btn.toggleClass('show');
    });
    */
});