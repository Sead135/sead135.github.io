/* MMenu NASKA 2020 */
jQuery(document).ready(function () {
    var $ = jQuery;

    var events = {
        leftMenuClick: function(isOpen){
            var event=$.Event('leftMenuClick');
            event.args={'lefMenuOpen': isOpen};
            $(document.body).trigger(event);
        }
    }

    //Флаги-телефоны
    var flags = $('.flag'), phones = $('.phone'), old_flag = flags[0], old_phone = phones[0];
    $.each(flags, function(i, v){
        $(v).click(function(e){
            $(old_flag).removeClass('flag-active');
            $(v).addClass('flag-active');
            old_flag = v;
            //
            $(old_phone).removeClass('phone-active');
            $(phones[i]).addClass('phone-active');
            old_phone = phones[i];
        });
    });

    //menu
    var mobi = (screen.width < 481 ? true : false);
    $(document.body).addClass('push-body');

    $('.toggle-menu').click(function(e){
        e.stopPropagation();
        e.preventDefault();
        if (!$(document.body).hasClass('push-body-toright'))
        {
            $('.cbp-spmenu').addClass('menu-open');
            if (!mobi) $(document.body).addClass('push-body-toright');
            events.leftMenuClick.apply(document.body, [true]);
        } else {
            $('.cbp-spmenu').removeClass('menu-open');
            if (!mobi) $(document.body).removeClass('push-body-toright');
            events.leftMenuClick.apply(document.body, [false]);
        }
    });

    $('.cbp-spmenu h3').click(function(e){
        e.stopPropagation();
        e.preventDefault();
        $('.cbp-spmenu').removeClass('menu-open');
        if (!mobi) $(document.body).removeClass('push-body-toright');
        events.leftMenuClick.apply(document.body, [false]);
    });

    var ua = window.navigator.userAgent;
    var isIE_11 = ua.match(/MSIE|Trident\/7\.0/);
    if (isIE_11 !== null)
    {
        console.log(isIE_11);
        var al_msg = '<div tab-index=1 class="cont">\
        <div class="msg-title">Ваш браузер устарел!</div>\
        <div class="msg-text">Некоторое содержимое этого сайта может отображаться в нем некорретно. Установите один из актуальных браузеров</div>\
        <div class="msg-tab">\
        <div class="msg-tab-td"><a target=_blank href="https://www.mozilla.org/ru/"><img src="/wp-content/plugins/naska-menu/assets/img/firefox-browser.png"></a></div>\
        <div class="msg-tab-td"><a target=_blank href="https://www.microsoft.com/ru-ru/edge"><img src="/wp-content/plugins/naska-menu/assets/img/edge-browser.png"></a></div>\
        <div class="msg-tab-td"><a target=_blank href="https://www.opera.com/ru/download"><img src="/wp-content/plugins/naska-menu/assets/img/opera-browser.png"></a></div>\
        <div class="msg-tab-td"><a target=_blank href="https://browser.yandex.ru/"><img src="/wp-content/plugins/naska-menu/assets/img/yandex-browser.png"></a></div>\
        <div class="msg-tab-td"><a target=_blank href="https://www.google.ru/intl/ru/chrome/"><img src="/wp-content/plugins/naska-menu/assets/img/chrome-browser.png"></a></div>\
        </div>\
        </div>';

        var m = $(al_msg);
        var f_jwnd = $('<div></div>').jwnd({
            form_obj: m,
            focusElClass: 'cont',
            height: '320px',
            width: '600px',
        });
 
        $(document.body).append(f_jwnd);
        $(f_jwnd).jwnd('show');
    }

});