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

export const Map: React.FC = () => {
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

            // Определение меток на карте
            const placemarks = [
                { coordinates: [55.807703, 37.610709], content: 'Москва, 17-й проезд Марьиной Рощи, 5' },
                { coordinates: [55.65019, 37.61441], content: 'Москва, Артековская улица, 5А' },
                { coordinates: [55.690111, 37.560386], content: 'Москва, улица Вавилова, 57к1' },
                { coordinates: [55.745123, 37.647864], content: 'Москва, Верхняя Радищевская улица, 4с2' },
                { coordinates: [55.640187, 37.671229], content: 'Москва, улица Кошкина, 10к1с2' },
                { coordinates: [55.783316, 37.572944], content: 'Москва, Ленинградский проспект, 26к1' },
                { coordinates: [55.806616, 37.466566], content: 'Москва, улица Маршала Василевского, 13к1' },
                { coordinates: [55.655478, 37.721328], content: 'Москва, улица Нижние Поля, 134с1' },
                { coordinates: [55.778664, 37.742564], content: 'Москва, Окружной проезд, 25' }
            ];

            // Добавление меток на карту
            placemarks.forEach(({ coordinates, content }) => {
                const placemark = new (window as any).ymaps.Placemark(coordinates, {
                    balloonContent: content,
                }, {
                    preset: "islands#circleDotIcon",
                    iconLayout: 'default#imageWithContent',
                    iconImageHref: icon_config.href,
                    iconImageSize: icon_config.size,
                    iconImageOffset: icon_config.offset,
                    zIndex: 800
                });
                myMap.geoObjects.add(placemark);
            });
        };

        (window as any).ymaps.ready(init); // Обеспечивает загрузку ymaps перед инициализацией
    }, []);

    return <div id="map" style={{ width: '100%', height: '500px' }}></div>; // Задает размеры карты
};