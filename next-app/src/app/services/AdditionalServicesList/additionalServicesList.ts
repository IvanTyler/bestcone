import {v4 as uuidv4} from "uuid";

import electrics from '/src/assets/img/services/electrics.webp';
import plumbing from '/src/assets/img/services/plumbing.webp';
import cleaning from '/src/assets/img/services/cleaning.webp';
import repair from '/src/assets/img/services/repair.webp';
import other_services from '/src/assets/img/services/other-services.webp';
import ads_build from '/src/assets/img/services/ads-build.webp';


export type servicesListType = {
    id: string;
    img: string;
    name: string;
}

export const AdditionalListServices: servicesListType[] = [
    {
        id: uuidv4(),
        img: '/img/services/electrics.webp',
        name: 'Электрика',
    },
    {
        id: uuidv4(),
        img: '/img/services/plumbing.webp',
        name: 'Сантехника и отопление',
    },
    {
        id: uuidv4(),
        img: '/img/services/cleaning.webp',
        name: 'Ремонтно-строительные работы',
    },
    {
        id: uuidv4(),
        img: '/img/services/repair.webp',
        name: 'Прочие услуги',
    },
    {
        id: uuidv4(),
        img: '/img/services/other-services.webp',
        name: 'Реклама в новостройках',
    },
    {
        id: uuidv4(),
        img: '/img/services/ads-build.webp',
        name: 'Реклама в новостройках',
    },
]