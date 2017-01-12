$(".loader_inner").fadeOut();
$(".loader").delay(400).fadeOut("slow");
$(function () {

    //SVG Fallback
    // if(!Modernizr.svg) {
    //  $("img[src*='svg']").attr("src", function() {
    //      return $(this).attr("src").replace(".svg", ".png");
    //  });
    // };
});
$(window).resize(function () {
    // убираем br из параграфов
    if (window.matchMedia("(max-width: 992px)").matches) {
        $(".header .header_title h1 br").remove();

    }

});

//изменяется - для плавной обратной анимации animate.css*/
$(window).scroll(function () {
    $('.animated').each(function () {
        var imagePos = $(this).offset().top;
        var imageHght = $(this).outerHeight();
        var topOfWindow = $(window).scrollTop() + 40;
        var heightOfWindow = $(window).height();
        var animName = $(this).data('anim');
        if (!$(this).data('atop')) {
            var animTop = 0.9;
        } else {
            var animTop = $(this).data('atop');
        }
        if (imagePos < topOfWindow + heightOfWindow * animTop && imagePos + imageHght > topOfWindow) {
            $(this).css('visibility', 'visible').addClass(animName);

        } else if (imagePos + imageHght < topOfWindow || imagePos > topOfWindow + heightOfWindow) {
            $(this).css('visibility', 'hidden').removeClass(animName);
        }
    });
});
/**
 * FastClick
 */

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function () {
        FastClick.attach(document.body);
    }, false);
}


$('.first_number').animateNumber({
        number: 753,
        easing: 'easeInQuad', // требуется jquery.easing

        numberStep: function (now, tween) {
            var floored_number = Math.floor(now),
                target = $(tween.elem);

            target.text(floored_number);
        }
    },
    2200
);
$('.second_number').animateNumber({
        number: 912,
        easing: 'easeInQuad', // требуется jquery.easing

        numberStep: function (now, tween) {
            var floored_number = Math.floor(now),
                target = $(tween.elem);

            target.text(floored_number);
        }
    },
    2300
);
$('.third_number').animateNumber({
        number: 432698,
        easing: 'easeInQuad', // требуется jquery.easing

        numberStep: function (now, tween) {
            var floored_number = Math.floor(now),
                target = $(tween.elem);

            target.text(floored_number);
        }
    },
    2400
);


$("#slider").slider({
    value: 50000,
    min: 100,
    max: 100000,
    step: 100,
    range: "min",
    slide: function (event, ui) {
        $("#contentSlider").val(ui.value.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));

    }
});
$("#contentSlider").val($("#slider").slider("value").toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));

$("#month").slider({
    value: 6,
    min: 1,
    max: 12,
    step: 1,
    range: "min",
    slide: function (event, ui) {
        $("#contentMonth").val(ui.value.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));

    }
});
$("#contentMonth").val($("#month").slider("value").toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));


$("#slider1").slider({
    value: 50000,
    min: 100,
    max: 100000,
    step: 100,
    range: "min",
    slide: function (event, ui) {
        $("#contentSlider1").val(ui.value.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));

    }
});
$("#contentSlider1").val($("#slider").slider("value").toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));

$("#month1").slider({
    value: 6,
    min: 1,
    max: 12,
    step: 1,
    range: "min",
    slide: function (event, ui) {
        $("#contentMonth1").val(ui.value.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));

    }
});
$("#contentMonth1").val($("#month1").slider("value").toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1'));

function money(month, content, elem) {
    content = content.replace(/\s*/g, '');
    var value = ((parseInt(content) * 0.2) * parseInt(month)) + parseInt(content);
    elem.val(value.toString() + " руб.");
}

$(document).ready(function () {
        //анимации
    
        var tl1 = new TimelineMax(); // анимация кругов
        if (window.matchMedia("(min-width: 992px)").matches) {

            tl1.from(".header_item_circle", 2, {drawSVG: "0%"}, 0.4).from(".header_item svg", 2, {autoAlpha: 0}, 0.4).from(".header_bot_txt .header_item strong", 1.5, {autoAlpha: 0, y: 50}, 0.4).from(".header_item p", 1.5, {autoAlpha: 0, y: 50}, 0.4);
        }

        // анимации - animate.css
        if (window.matchMedia("(min-width: 768px)").matches) {
            $(".header_title h1, .header_nav, .header_logo, .header .container .callback, .header_title p, .header_title button").animated("fadeInUp");
            $(".iphone h2, .iphone p, .trade h2, .trade h3, .trade .apple .apple_trade, .trade .apple .apple_text p, .trade .apple .apple_calculate").animated("fadeInUp");
            $(".review h2, .review .rev_item .left_review, .review .rev_item .right_review").animated("fadeInUp");
            $(".review .rev_item .rev_info_block").animated("fadeInRight");
            $(".review .rev_item .rev_info_block_right").animated("fadeInLeft");
            $(".consultation h5 , .consultation p, .consultation button, .table_section h2, .table_section .table tr").animated("fadeInUp");
            $(".question h2, .question p, .question strong , .question .inline_input input, .question .textarea_input textarea, .question button").animated("fadeInUp");
        }

        // инициализация скроллбара
        $(".table_sections_wrap_table").mCustomScrollbar({
            theme: "my-theme",
            axis: "x"
        });

        // убираем br из параграфов
        if (window.matchMedia("(max-width: 992px)").matches) {
            $(".header .header_title h1 br").remove();

        }

        setInterval(function () {
            money($("#contentMonth1").val(), $("#contentSlider1").val(), $('.money1'))
            money($("#contentMonth").val(), $("#contentSlider").val(), $('.money'))
        }, 100)


        var md = new MobileDetect(window.navigator.userAgent);

        if (md.userAgent() == "Safari" && md.mobile() == "iPhone" || md.mobile() == "iPad") {
            $("html,body").css("overflow", "hidden !important");
        }

        // скролл по ссылке с атрибутом href
        $(".header_nav a[href*='#']").on("click", function (e) {
            e.preventDefault();
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 800);
            return false;
        });
        // скролл по ссылке с атрибутом href

        $(".popup.pop3 .dm-modal li a[href*='#']").on("click", function (e) {
            e.preventDefault();
            $(".popup").hide("drop", {direction: "up"}, 200);
            $("body").css({"overflow": "inherit", "padding-right": "0"});
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 500);
            return false;
        });


        // Открываем модальное окно  
        $(".modal").click(function (e) {
            e.preventDefault();
            var id = $(this).data('modal');
            var txt = $(this).data('info');
            //var title =  $(this).data('title'); // для изменения title в модалке
            $(".popup[data-modal=" + id + "]").toggle("fade", 200).find("form").css('display', 'block');
            $(".popup[data-modal=" + id + "] input[name=form_name]").val(txt);
            // $(".popup[data-modal="+id+"] h2").html(title); // прописать в ссылку data-title="нужный title"

            if (window.matchMedia("(min-width: 992px)").matches) {
                $("body").css({"overflow": "hidden", "padding-right": "17px"});
            }
            if (window.matchMedia("(max-width: 992px)").matches) {

                $("body").css({"overflow": "hidden", "padding-right": "0px"});
            }
        });
        // overlay для закрытия
        $(".overlay").click(function () {
            $(this).parent().toggle("drop", {direction: "up"}, 200);
            $("body").css({"overflow": "inherit", "padding-right": "0"});
        });
        // закрываем модальное окно на крестик
        $(".popup .close").click(function (e) {
            e.preventDefault();
            $(this).parents(".popup").hide("drop", {direction: "up"}, 200);
            $("body").css({"overflow": "inherit", "padding-right": "0"});
        });
        //обработчик кнопки на нажатие btn_mnu
        $("#nav-button-label").click(function (e) {
            e.preventDefault();
            $(this).toggleClass('nav-on'); // добавляет класс для анимации самой кнопки
            $(this).next().slideToggle(); // открывает меню main_nav_block, которое было скрыто
            $(this).find('.nav-line').toggleClass('active');
            $(".mnu_dropdown").toggleClass("active");
        });
        // Скрыть элемент при клике за его пределами бутерброд и его выпадающее меню
        $(document).click(function (event) {
            if ($(event.target).closest("#nav-button-label").length)
                return;
            if ($(event.target).closest("[off-canvas]").length)
                return;
            $("#nav-button-label").removeClass("nav-on");
            $("#nav-button-label .nav-line").removeClass("active");

            event.stopPropagation();

        });
        //  Отправка форм
        $("form:not('#form3')").submit(function () { // перехватываем все при событии отправки
            var form = $(this); // запишем форму, чтобы потом не было проблем с this
            var error = [];
            form.find('.modal_form_input').each(function () { // пробежим по каждому полю в форме

                if ($(this).val() == '') { // если находим пустое
                    $(this).siblings().show("fade", 500);
                    error.push(true); // ошибка
                } else if ($(this).val() !== '') { // если находим не пустое
                    $(this).siblings().hide("fade", 500)
                    error.push(false); // нет ошибки
                }
                $(this).focus(function () {
                    $(this).siblings().hide("fade", 500)
                });

            });
            form.find('.modal_form_phone').each(function () { // пробежим по каждому полю в форме
                var pattern = /^(\+|d+)*\d[\d\(\)\-]{4,14}\d$/;
                if ($(this).val() == '') { // если пустое
                    $(this).siblings().show("fade", 500);
                    error.push(true); // ошибка 
                    if ($(this).siblings().hasClass('input_error_phone')) {
                        $(this).siblings().removeClass('input_error_phone').text("").prepend("Заполните поле<div class='modal_error_chest_img modal_error_chest_img_quest'></div><div class='modal_error_triangle modal_error_triangle_quest'></div>");
                    }
                } else if ($(this).val() !== '') {
                    if ($(this).val().match(pattern)) {
                        $(this).siblings().hide("fade", 500);
                        error.push(false); // нет ошибок
                    } else {
                        $(this).siblings().show("fade", 500).addClass('input_error_phone').text("").prepend("Введите правильный телефон<div class='modal_error_chest_img modal_error_chest_img_quest'></div><div class='modal_error_triangle modal_error_triangle_quest'></div>");
                        error.push(true); // ошибка  
                    }
                }
                $(this).focus(function () {
                    $(this).siblings().hide("fade", 500);
                });

            });
            form.find('.modal_form_email').each(function () { // пробежим по каждому полю в форме
                var pattern = /^(([a-zA-Z0-9]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+\.)*([a-zA-Z0-9\-]|[!#$%\*\/\?\|^\{\}`~&'\+=-_])+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]+$/;
                if ($(this).val() == '') { // если пустое
                    $(this).siblings().show("fade", 500);
                    error.push(true); // ошибка
                    if ($(this).siblings().hasClass('input_error_email')) {
                        $(this).siblings().removeClass('input_error_email').text("").prepend("Заполните поле<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                    }

                } else if ($(this).val() !== '') {
                    if ($(this).val().match(pattern)) {
                        $(this).siblings().hide("fade", 500).removeClass('input_error_email');
                        error.push(false); // нет ошибок
                    } else {
                        $(this).siblings().show("fade", 500).addClass('input_error_email').text("").prepend("Введите правильный Email<div class='modal_error_triangle'></div><div class='modal_error_chest_img'></div>");
                        error.push(true); // ошибка  
                    }
                }
                $(this).focus(function () {
                    $(this).siblings().hide("fade", 500);
                });

            });
            var erorr_finish = 0;
            for (var i = 0; i < error.length; i++) {
                if (error[i] == false) {
                    erorr_finish = erorr_finish + 1;
                }
                ;
                // console.log(error[i]);
            }
            //console.log(erorr_finish);
            var size = error.length - 1;
            if (erorr_finish > size) { // в зависимости от полей которые проверяются (в нашем случае 3 поля)
                var data = form.serialize(); // подготавливаем данные
                $.ajax({ // инициализируем ajax запрос
                    type: 'POST', // отправляем в POST формате, можно GET
                    url: 'mail.php', // путь до обработчика, у нас он лежит в той же папке
                    dataType: 'json', // ответ ждем в json формате
                    data: data, // данные для отправки
                    beforeSend: function (data) { // событие до отправки
                        form.find('input[type="submit"]').attr('disabled', 'disabled'); // например, отключим кнопку, чтобы не жали по 100 раз
                    },
                    success: function (data) { // событие после удачного обращения к серверу и получения ответа
                        if (data['error']) { // если обработчик вернул ошибку
                            alert(data['error']); // покажем её текст
                        } else { // если все прошло ок

                            if (data['form_type'] == 'modal') {
                                $('.dm-modal form').hide();
                                $('.dm-modal .close').hide();
                                form.trigger('reset');
                                $('.dm-modal .success_mail').addClass('active'); //пишем что всё ок
                                setTimeout(function () {
                                    form.parents('.popup').hide("fade", 500);
                                    $('.dm-modal .success_mail').removeClass('active');
                                    $('.dm-modal .close').show("fade", 2000);
                                    $("body").css({"overflow": "inherit", "padding-right": "0"});
                                }, 3000);
                            }
                            if (data['form_type'] == 'normal') { //надо писать в обычных формах <input type="hidden" name="form_type" value="normal"> 
                                form.trigger('reset');
                                $('.popup[data-modal=modal-res] .success_mail').addClass('active');
                                $('.popup[data-modal=modal-res]').toggle("fade", 500);
                                //$("body").css({ "overflow": "hidden", "padding-right": "17px" });
                                setTimeout(function () {
                                    $('.popup[data-modal=modal-res]').hide("fade", 500);
                                    $('.dm-modal .success_mail').removeClass('active', 500);
                                    //$("body").css({ "overflow": "inherit", "padding-right": "0" });
                                }, 2000);
                            }
                        }
                    },
                    error: function (xhr, ajaxOptions, thrownError) { // в случае неудачного завершения запроса к серверу
                        alert(xhr.status); // покажем ответ сервера
                        alert(thrownError); // и текст ошибки
                    },
                    complete: function (data) { // событие после любого исхода
                        form.find('input[type="submit"]').prop('disabled', false); // в любом случае включим кнопку обратно
                    }
                });
            }
            return false; // вырубаем стандартную отправку формы
        });
    }
);

