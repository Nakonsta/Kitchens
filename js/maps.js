// Страница "Где купить"
if ($('#office__map').length) {
    
    ymaps.ready(init);

    function init() {
        var toBuyMap;

        toBuyMap = new ymaps.Map("office__map", {
            center: [59.935151, 30.438833],
            zoom: 12,
            controls: []
        });

        toBuyMap.behaviors.disable('scrollZoom');

        toBuyMap.controls.add("zoomControl", {
            position: {top: 15, left: 15}
        });

        function getCoords (coord) {
            return [parseFloat(coord[0]), parseFloat(coord[1])];
        };
    
        $('.address-link').each(function() {
    
            var coordString = $(this).attr('data-place').split(', ');
            var centerMap = getCoords (coordString);
            var adressPoint = $(this).attr('data-adress');
            var phonePoint = $(this).attr('data-phone');
            $(this).on('click', function(evt) {
                evt.preventDefault();
                toBuyMap.setCenter(centerMap);
                //myPlacemark.geometry.setCoordinates(centerMap);
            });
    
            var myPlacemark = new ymaps.Placemark(centerMap , {
                    iconContent: "<span class='map-number'></span>",
                    balloonContent: '<div class="map__ballon">' +
                    '<div class="map__ballon__image">' +
                    '<img src="/local/templates/main/images/ico-point.png" alt="">' +
                    '</div>' +
                    '<address class="map__ballon__address">' + adressPoint + '</address>' +
                    '<a href="tel:+994 (12) 347 79 48" class="map__ballon__phone">' + phonePoint + '</a>' +
                    '</div>'
                },
                { iconLayout: 'default#imageWithContent',
                    iconImageHref: './img/point-large.png',
                    iconImageSize: [44, 44],
                    iconContentOffset: [10, 8],
                    iconImageOffset: [-22, -22],
                    balloonShadow: false,
                    balloonAutoPan: true,
                    hideIconOnBalloonOpen: false
            });

            toBuyMap.geoObjects.add(myPlacemark);
        });
    }
}

// Страница "Контакты"
if ($('#contacts__map').length) {
    ymaps.ready(init);

    function init() {
        var contactsMap;

        contactsMap = new ymaps.Map("contacts__map", {
            center: [59.930553, 30.331633],
            zoom: 15,
            controls: []
        });

        contactsMap.controls.add("zoomControl", {
            position: {top: 15, left: 15}
        });  
    
        var myPlacemark = new ymaps.Placemark([59.930553, 30.331633] , {
                iconContent: "<span class='map-number'></span>",
                balloonContent: '<div class="map__ballon">' +
                '<div class="map__ballon__image">' +
                '<img src="/local/templates/main/images/ico-point.png" alt="">' +
                '</div>' +
                '<address class="map__ballon__address">Санкт-Петербург, ул. Ломоносова, 10</address>' +
                '<a href="tel:+7 (4842) 500-501" class="map__ballon__phone">+7 (4842) 500-501</a>' +
                '</div>'
            },
            { iconLayout: 'default#imageWithContent',
                iconImageHref: './img/point.png',
                iconImageSize: [44, 44],
                iconContentOffset: [10, 8],
                iconImageOffset: [-22, -22],
                balloonShadow: false,
                balloonAutoPan: true,
                hideIconOnBalloonOpen: false
        });

        contactsMap.geoObjects.add(myPlacemark);

        var agencyMap;

        agencyMap = new ymaps.Map("agency__map", {
            center: [59.930553, 30.331633],
            zoom: 15,
            controls: []
        });

        agencyMap.controls.add("zoomControl", {
            position: {top: 15, left: 15}
        });  
    
        var myAgencyPlacemark = new ymaps.Placemark([59.930553, 30.331633] , {
                iconContent: "<span class='map-number'></span>",
                balloonContent: '<div class="map__ballon">' +
                '<div class="map__ballon__image">' +
                '<img src="/local/templates/main/images/ico-point.png" alt="">' +
                '</div>' +
                '<address class="map__ballon__address">Санкт-Петербург, ул. Ломоносова, 10</address>' +
                '<a href="tel:+7 (4842) 500-501" class="map__ballon__phone">+7 (4842) 500-501</a>' +
                '</div>'
            },
            { iconLayout: 'default#imageWithContent',
                iconImageHref: './img/point-large.png',
                iconImageSize: [44, 44],
                iconContentOffset: [10, 8],
                iconImageOffset: [-22, -22],
                balloonShadow: false,
                balloonAutoPan: true,
                hideIconOnBalloonOpen: false
        });

        agencyMap.geoObjects.add(myAgencyPlacemark);
    }
}

