$(function(){
    // Плагин для стилизации селектов сортировки и фильтрации на странице каталога
    $('.sort__select-js').selectize();

    //Слайдер статей на главной
    $('.articles__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: $('.articles__prev'),
        nextArrow: $('.articles__next')
    })
});