$(function() {
    $toggle_btn = $('.toggle_btn');
    $header = $('#header');
    $buttons = $('.buttons');
    $shop_btn_text = $('.shop_btn a div');
    $header_global_nav = $('#header .global_nav');
    var header_height = $header.outerHeight();
    var window_height = $(window).height();
    var switch_adjust = 400;
    var shop_adjust = 600;
    var on_footer_adjust = 2000;

    /* letter_span : テキストを1字ずつ区切ってspanで囲む*/
    $.fn.letter_span = function() {
        $(this).each(function() {
            var text = $.trim(this.textContent),
                i = 0,
                html = "";
            
            text.split("").forEach(function(v) {
                html += "<span id=" + "'char_" + i + "'>" + v + "</span>";
                i++;
            });
            this.innerHTML = html;
        });
    };
    $shop_btn_text.letter_span();

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

    /* scroll over on footer, change page_top button style */
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