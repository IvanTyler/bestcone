'use client'

import React, { useEffect } from 'react';
import balunIcon from '@/assets/img/map/balun-bsl.webp';

const map_config = {
    center: [55.753361102109174, 37.62170439147948] as [number, number],
    zoom: 10.2
};

const icon_config = {
    href: balunIcon.src,
    size: [50, 56.25] as [number, number],
    offset: [-25, -56.25] as [number, number]
};

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

export const MapContacts: React.FC = () => {
    useEffect(() => {
        const init = () => {

            const myMap = new (window as any).ymaps.Map("map", map_config);

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
                iconImageHref: icon_config.href,
                iconImageSize: icon_config.size,
                iconImageOffset: icon_config.offset,
                zIndex: 800
            });
            myMap.geoObjects.add(placemark);
        };

        (window as any).ymaps.ready(init); // Обеспечивает загрузку ymaps перед инициализацией
    }, []);

    return <div id="map" style={{ width: '100%', height: '400px' }}></div>; // Задает размеры карты
};