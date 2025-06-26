import React, { useEffect } from 'react';

export const MapContacts: React.FC = () => {
    useEffect(() => {
        const init = () => {
            const iconImageHref = "src/assets/img/map/balun-bsl.webp";
            const iconImageSize = [50, 56.25] as [number, number];
            const iconImageOffset = [-25, -56.25] as [number, number];

            const myMap = new (window as any).ymaps.Map("map", {
                center: [55.753361102109174, 37.62170439147948],
                zoom: 10.2
            });

            // Удаление ненужных элементов управления
            const controlsToRemove = [
                'geolocationControl',
                'searchControl',
                'trafficControl',
                'typeSelector',
                'fullscreenControl',
                'zoomControl',
                'rulerControl'
            ];

            controlsToRemove.forEach(control => {
                myMap.controls.remove(control);
            });

            // Добавление элемента управления зумом
            myMap.controls.add('zoomControl', {
                size: "large",
                position: {
                    top: 100,
                    right: 10
                }
            });


            // Добавление меток на карту
                const placemark = new (window as any).ymaps.Placemark([55.784111, 37.560727], {
                    balloonContent: 'Москва, 17-й проезд Марьиной Рощи, 5',
                }, {
                    preset: "islands#circleDotIcon",
                    iconLayout: 'default#imageWithContent',
                    iconImageHref: iconImageHref,
                    iconImageSize: iconImageSize,
                    iconImageOffset: iconImageOffset,
                    zIndex: 800
                });
                myMap.geoObjects.add(placemark);
        };

        (window as any).ymaps.ready(init); // Обеспечивает загрузку ymaps перед инициализацией
    }, []);

    return <div id="map" style={{ width: '100%', height: '400px' }}></div>; // Задает размеры карты
};