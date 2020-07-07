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

    // Анимации

    if($('.catalog').length) {
        $(window).scroll(function(){
            if ( $(this).scrollTop() > $('.articles').offset().top - 200 ) {
                $('.articles__item-read-animate').addClass('animated-line');
            }
        });
    }

});