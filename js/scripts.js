$(function(){
    // Плагин для стилизации селектов
    $('.sort__select-js').selectize();
    $('.select-js').selectize();

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

    // Слайдер на детальной странице

    if($(window).innerWidth() < 1200) {
        if($('.single-product').length) {
            $('.single-product__pic-360').addClass('fancy')
        }
        $('.single-product__pics-inner').slick({
            infinite: true
        })
    }

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

    // Табы на детальной товара

    $('body').on('click', '.chacteristics__tab', function(evt) {
        evt.preventDefault();
        $('.chacteristics__tab').removeClass('chacteristics__tab--active');
        $(this).addClass('chacteristics__tab--active');
        $('.chacteristics__block').hide();
        var selector = '.chacteristics__block[data-product="' + $(this).attr('data-product') + '"]';
        $(selector).show();
    })

    // Слайдер на детальной продукта

    $('.product-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: '360px',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    centerPadding: '60px',
                }
            },
            {
                breakpoint: 575,
                settings: {
                    centerPadding: '20px',
                }
            }
        ]
    })

    // Скроллы на детальной
    $(window).scroll(function() {
        var sc = $(this).scrollTop();
        if($(window).innerWidth() > 1199) {
            scrollSingleProduct(sc);
        }

        if($('.features').length) {

            var scrollStart = 2665 + $('.chacteristics').innerHeight();

            var scrollBottom = scrollStart + 2500;
        
            if(sc > scrollStart) {
                if(sc < scrollBottom) {
                    $('.features__title').css('bottom', `auto`)
                    $('.features__title').css('top', `${sc - scrollStart}px`)
                    var featureNum = '0' + (Math.floor((sc - scrollStart)/500) + 1);
                    $('.features__scale-num--start').text(featureNum);
                } else {
                    $('.features__title').css('top', `auto`)
                    $('.features__title').css('bottom', `500px`)
                }
            } else {
                $('.features__title').css('top', `0px`)
                $('.features__title').css('bottom', `auto`)
            }
        }
    })

    // Скролл на странице "Где купить"

    $(window).scroll(function() {
        var sc = $(this).scrollTop();

        if($('.to-buy').length) {
            if(sc > 335) {
                if(sc < 500) {
                    $('.to-buy__map-wrapper').css('bottom', `auto`)
                    $('.to-buy__map-wrapper').css('top', `${sc - 335}px`)
                } else {
                    $('.to-buy__map-wrapper').css('top', `auto`)
                    $('.to-buy__map-wrapper').css('bottom', `0px`)
                }
                } else {
                    $('.to-buy__map-wrapper').css('top', `0px`)
                    $('.to-buy__map-wrapper').css('bottom', `auto`)
                }
        }
    })

    // Слайдер в модалке на детальной товара

    $('body').on('click', '.modal-product__tab', function() {
        $('.modal-product__tab').removeClass('modal-product__tab--active');
        $(this).addClass('modal-product__tab--active');
        var picUrl = 'background-image: url(' + $(this).attr('data-url') + ');';
        $('.modal-product__main-photo').attr('style', picUrl);
        var picNum = $(this).attr('data-num');
        $('.modal-product__main-photo').attr('data-num', picNum);
        if($(this).attr('data-around')) {
            $('.modal-product__around').addClass('modal-product__around--active');
        } else {
            $('.modal-product__around').removeClass('modal-product__around--active');
        }
    });

    $('body').on('click', '.modal-product__arrow.arrow-prev', function() {
        var currentSlideNum = $('.modal-product__main-photo').attr('data-num');
        if(currentSlideNum > 1) {
            var newCurrentTab = '.modal-product__tab[data-num="' + (currentSlideNum - 1) + '"]';
            $(newCurrentTab).trigger('click');
        }
    });

    $('body').on('click', '.modal-product__arrow.arrow-next', function() {
        var currentSlideNum = $('.modal-product__main-photo').attr('data-num');
        var slidesQuantity = $('.modal-product__tab').length;        
        if(currentSlideNum < slidesQuantity) {
            var newCurrentTab = '.modal-product__tab[data-num="' + (parseInt(currentSlideNum, 10) + 1) + '"]';
            $(newCurrentTab).trigger('click');
        }
    });

    // Переключатель карта-список
    $('.office__toggler-checkbox').click(function(){
        $('.office__points-inner').toggleClass('office__points-inner--active');
        $('.office__map-wrapper').toggleClass('office__map-wrapper--active');
        $('.office__points').toggleClass('office__points--shadow');
        $('.office__list').toggleClass('office__list--active');
    });

    // Фиксация контактов при скролле

    $(window).scroll(function() {
        var scr = $(this).scrollTop();
        var scrBottom = 1420;
        if ($('.agency').length) {
            scrBottom = 1700;
        }
        if($('.office__list--active').length) {
            scrBottom = 900;
        }
        if($('.contacts-info').length && $(window).innerWidth() > 1439) {
            if  (scr > 320 && scr < scrBottom) {
                $('.contacts-info').addClass('contacts-info--fixed').fadeIn(500);
                $('.contacts-info').css('top', '0');
            } else if (scr > 320 && scr < (scrBottom + 250)) {
                $('.contacts-info').css('top', '-999px');
            } else {
                $('.contacts-info').removeClass('contacts-info--fixed');
                $('.contacts-info').css('top', 'auto');
            }
        }
    })

    // Подробнее на детальной товара

    $('body').on('click', '.chacteristics__block[data-product="chacteristics"] .business__link', function (evt) {
        evt.preventDefault();
        if ($('.business__link.business__link--open').length) {
            $(this).closest('.chacteristics__block').find('.chacteristics__row--more').slideUp(400);
        } else {
            $(this).closest('.chacteristics__block').find('.chacteristics__row--more').slideDown(400);
        }

        $('.business__link').toggleClass('business__link--open');
    });

    // Мобильное главное меню

    $('body').on('click', '.header__burger', function() {
        $('.dropdown-menu').addClass('dropdown-menu--active');
        $('.dropdown-menu').removeClass('dropdown-menu--closed');
        setTimeout(function () {
            $('.dropdown-menu').css('left', '0');
        }, 1500)
    });

    $('body').on('click', '.dropdown-menu__close-link', function(evt) {
        evt.preventDefault();
        $('.dropdown-menu').addClass('dropdown-menu--closed');
        setTimeout(function () {
            $('.dropdown-menu').css('left', '-3000px');
            $('.dropdown-menu').removeClass('dropdown-menu--active');
        }, 1500)
    });

    // Скролл на детальной акции

    $(window).scroll(function() {
        var sc = $(this).scrollTop();
        var scrBottom = 700 + parseInt(Math.round($('.sale-text__desc').innerHeight()/3));

        if($('.sale-text').length) {
            if(sc > 700) {
                if(sc < scrBottom) {
                    $('.sale-text__soc').css('bottom', `auto`)
                    $('.sale-text__soc').css('top', `${sc - 700}px`)
                } else {
                    $('.sale-text__soc').css('top', `auto`)
                    $('.sale-text__soc').css('bottom', `70px`)
                }
                } else {
                    $('.sale-text__soc').css('top', `0px`)
                    $('.sale-text__soc').css('bottom', `auto`)
                }
        }
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

    // Функции

    function scrollSingleProduct(sc) {
        if($('.single-product').length) {
            if(sc > 167) {
            if(sc < 2000) {
                $('.single-product__text').css('bottom', `auto`)
                $('.single-product__text').css('top', `${sc - 167}px`)
            } else {
                $('.single-product__text').css('top', `auto`)
                $('.single-product__text').css('bottom', `0px`)
            }
            } else {
                $('.single-product__text').css('top', `0px`)
                $('.single-product__text').css('bottom', `auto`)
            }
        }
    }

});