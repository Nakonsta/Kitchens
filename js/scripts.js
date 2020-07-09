$(function(){
    // Плагин для стилизации селектов сортировки и фильтрации на странице каталога
    $('.sort__select-js').selectize();

    //Слайдер статей на главной
    $('.articles__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: $('.articles__prev'),
        nextArrow: $('.articles__next'),
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    })

    // Модалки

    $('.fancy').fancybox();

    // Стилизация input

    $('.input[type="email"]').change(function(){
        if($(this).val()) {
            $(this).closest('.form__row').find('.label').addClass('not-empty');
        } else {
            $(this).closest('.form__row').find('.label').removeClass('not-empty');
        }
    })

    // Табы в форме авторизации

    $('body').on('click', '.modal__tab', function() {
        $('.modal__tab').removeClass('modal__tab--active');
        $(this).addClass('modal__tab--active');
        $('.login-tab__body').hide();
        var selector = '.login-tab__body[data-login="' + $(this).attr('data-login') + '"]';
        $(selector).show();
    })

    // Табы на странице новостей

    $('body').on('click', '.tab', function(evt) {
        evt.preventDefault();
        $('.tab').removeClass('tab--active');
        $(this).addClass('tab--active');
        $('.tab__block').hide();
        var selector = '.tab__block[data-tab="' + $(this).attr('data-tab') + '"]';
        $(selector).show();
    })

    // Валидация форм

    $('.login__auth').validate({
        rules: {
            login__email: {
                required: true,
                email: true
            },
            login__password: {
                required: true
            }
        },
        messages: {
            login__email: {
                email: "Некорректно введен электронный адрес"
            }
        }
    });

    $('.login__auth input').each(function() {
        $(this).keyup(function() {
            if($('.login__auth').valid()) {
                $('.login__auth input[type="submit"]').removeClass('btn--disabled');
            } else {
                $('.login__auth input[type="submit"]').addClass('btn--disabled');
            }
        })
    });

    $('.register').validate({
        rules: {
            register__name: {
                required: true,
                minlength: 2
            },
            register__surname: {
                required: true,
                minlength: 2
            },
            register__email: {
                required: true,
                email: true
            },
            register__phone: {
                required: true
            },
            register__password: {
                required: true,
                minlength: 5
            },
            register__repeate: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            register__name: {
                required: "Пожалуйста, введите имя",
                minlength: "Длина имени не должна быть короче 2-х символов"
            },
            register__surname: {
                required: "Пожалуйста, введите фамилию",
                minlength: "Длина фамилии не должна быть короче 2-х символов"
            },
            register__email: {
                required: "Пожалуйста, введите e-mail",
                email: "Введите корректный e-mail адрес"
            },
            register__phone: {
                required: "Пожалуйста, введите телефон"
            },
            register__password: {
                required: "Пожалуйста, введите пароль",
                minlength: "Длина имени не должна быть короче 5-и символов"
            },
            register__repeate: {
                required: "Пожалуйста, введите пароль",
                minlength: "Длина имени не должна быть короче 5-и символов"
            }
        }
    });

    $('.register input').each(function() {
        $(this).keyup(function() {
            if($('.register').valid()) {
                $('.register input[type="submit"]').removeClass('btn--disabled');
            } else {
                $('.register input[type="submit"]').addClass('btn--disabled');
            }
        })
    });

    // Анимации

    if($('.articles__block').length) {
        $(window).scroll(function(){
            if ( $(this).scrollTop() > $('.articles__block').offset().top - 200 ) {
                $('.articles__item-read-animate').addClass('animated-line');
            }
        });
    }

});