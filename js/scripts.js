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
    });

    // Слайдеры фотогалерей

    $('.gallery__slider').slick({
        infinite: false
    });

    $('body').on('click', '.gallery__item-top-plus', function() {
        $(this).closest('.gallery__item').find('.fancy').eq(0).trigger('click');
    })

    // Модалки

    $('.fancy').fancybox();

    $('body').on('click', '.footer__main-round', function() {
        $('.footer__main-feedback').trigger('click');
    })

    // Стилизация input

    $('.input[type="email"]').change(function(){
        if($(this).val()) {
            $(this).closest('.form__row').find('.label').addClass('not-empty');
        } else {
            $(this).closest('.form__row').find('.label').removeClass('not-empty');
        }
    })

    // Маски для телефонов
    $('input[type="tel"]').mask('+7 (000) 000-00-00');

    // Табы для категорий   
    $('body').on('click', '.categories__item', function() {
        $('.categories__item').each(function() {
            $(this).removeClass('categories__item--active');
        });
        $(this).addClass('categories__item--active');
        $('.section-tab').each(function() {
            $(this).removeClass('section-tab--active');
        });
        var selector = '.section-tab[data-category="' + $(this).attr('data-category') + '"]';
        $(selector).addClass('section-tab--active');
        if($(this).closest('.main').find('.gallery').length) {
            $('.gallery__slider').slick('unslick');
            $('.gallery__slider').slick({
                infinite: false
            });
        }
    })

    // Табы в форме авторизации
    $('body').on('click', '.modal__tab', function() {
        $(this).closest('.modal').find('.modal__tab').each(function() {
            $(this).removeClass('modal__tab--active');
        });
        $(this).addClass('modal__tab--active');
        if($(this).attr('data-login') == 'auth') {
            $(this).closest('.modal__flex').addClass('modal__flex--centering');
        } else {
            $(this).closest('.modal__flex').removeClass('modal__flex--centering');
        }
        $(this).closest('.modal').find('.login-tab__body').each(function() {
            $(this).hide();
        });
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
                required: 'Пожалуйста, введите e-mail',
                email: 'Некорректно введен электронный адрес'
            },
            login__password: {
                required: 'Пожалуйста, введите пароль',
            }
        }
    });

    // $('.login__auth input').each(function() {
    //     $(this).keyup(function() {
    //         if($('.login__auth').valid()) {
    //             $('.login__auth input[type="submit"]').removeClass('btn--disabled');
    //         } else {
    //             $('.login__auth input[type="submit"]').addClass('btn--disabled');
    //         }
    //     })
    // });

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

    // $('.register input').each(function() {
    //     $(this).keyup(function() {
    //         if($('.register').valid()) {
    //             $('.register input[type="submit"]').removeClass('btn--disabled');
    //         } else {
    //             $('.register input[type="submit"]').addClass('btn--disabled');
    //         }
    //     })
    // });

    $('.feedback').validate({
        rules: {
            feedback__name: {
                required: true,
                minlength: 2
            },
            feedback__email: {
                required: true,
                email: true
            },
            feedback__phone: {
                required: true
            },
            feedback__textarea: {
                required: true,
                minlength: 20
            }
        },
        messages: {
            feedback__name: {
                required: "Пожалуйста, введите имя",
                minlength: "Длина имени не должна быть короче 2-х символов"
            },
            feedback__email: {
                required: "Пожалуйста, введите e-mail",
                email: "Введите корректный e-mail адрес"
            },
            feedback__phone: {
                required: "Пожалуйста, введите телефон"
            },
            feedback__textarea: {
                required: "Пожалуйста, введите техт комментария",
                minlength: "Минимальная длина комментария — 20 символов"
            }
        }
    });

    $('.forget').validate({
        rules: {
            forget__email: {
                required: true,
                email: true
            }
        },
        messages: {
            forget__email: {
                required: "Пожалуйста, введите e-mail",
                email: "Введите корректный e-mail адрес"
            }
        }
    });

    $('.question__form').validate({
        rules: {
            question__name: {
                required: true,
                minlength: 2
            },
            question__email: {
                required: true,
                email: true
            },
            question__phone: {
                required: true
            },
            question__textarea: {
                required: true,
                minlength: 20
            }
        },
        messages: {
            question__name: {
                required: "Пожалуйста, введите имя",
                minlength: "Длина имени не должна быть короче 2-х символов"
            },
            question__email: {
                required: "Пожалуйста, введите e-mail",
                email: "Введите корректный e-mail адрес"
            },
            question__phone: {
                required: "Пожалуйста, введите телефон"
            },
            question__textarea: {
                required: "Пожалуйста, введите техт комментария",
                minlength: "Минимальная длина комментария — 20 символов"
            }
        }
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