ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.815803, 37.370906],            
            zoom: 17,
            controls: ['zoomControl'],
            behaviors: ['drag']
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Красногорск, Павшинская пойма, Красногорский бульвар, 13',
            balloonContent: 
            [
                `<div class="map__balloon">
                <img class="map__burger-img" src="./img/logo_mobile.svg" alt="logo"/>
                <p class="map__title-hero">Добро пожаловать в Thai Smile Spa!<span class="map__title-span">Заходите по адресу:</span>Красногорский бульвар, 13
                </p></div>`
            ],
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-pin.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'Красногорский бул., 13 Московская обл.,',
            // balloonContent: 

            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/logo_mobile.png',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});




// =======================
// var placemarks = [
//     {
//         latitude: 55.81,
//         longitude: 37.37,
        // hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
        // balloonContent: [
        //     '<div class="map__balloon">',
        //     '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
        //     'Самые вкусные бургеры у нас! Заходите по адресу: ул. Литераторов, д. 19',
        //     '</div>'
        // ]
    // },
    // {
    //     latitude: 59.94,
    //     longitude: 30.25,
    //     hintContent: '<div class="map__hint">Малый проспект В О, д 64</div>',
    //     balloonContent: [
    //         '<div class="map__balloon">',
    //         '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
    //         'Самые вкусные бургеры у нас! Заходите по адресу: Малый проспект В О, д 64',
    //         '</div>'
    //     ]
    // },
    // {
    //     latitude: 59.93,
    //     longitude: 30.34,
    //     hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
    //     balloonContent: [
    //         '<div class="map__balloon">',
    //         '<img class="map__burger-img" src="img/burger.png" alt="Бургер"/>',
    //         'Самые вкусные бургеры у нас! Заходите по адресу: наб. реки Фонтанки, д. 56',
    //         '</div>'
    //     ]
    // }
// ],
//     geoObjects= [];

// function init() {
//     var map = new ymaps.Map('map', {
//         center: [55.81, 37.37],
//         zoom: 16,
//         controls: ['zoomControl'],
//         behaviors: ['drag']
//     });

    // for (var i = 0; i < placemarks.length; i++) {
    //         geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
    //         {
    //             hintContent: placemarks[i].hintContent,
    //             balloonContent: placemarks[i].balloonContent.join('')
    //         },
    //         {
    //             iconLayout: 'default#image',
    //             iconImageHref: 'img/sprite.png',
    //             iconImageSize: [46, 57],
    //             iconImageOffset: [-23, -57],
    //             iconImageClipRect: [[415, 0], [461, 57]]
    //         });
    // }

    // var clusterer = new ymaps.Clusterer({
    //     clusterIcons: [
    //         {
    //             href: 'img/burger.png',
    //             size: [100, 100],
    //             offset: [-50, -50]
    //         }
    //     ],
    //     clusterIconContentLayout: null
    // });

    // map.geoObjects.add(clusterer);
    // clusterer.add(geoObjects);
// }