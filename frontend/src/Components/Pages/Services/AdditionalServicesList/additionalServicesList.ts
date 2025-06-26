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
        img: electrics,
        name: 'Электрика',
    },
    {
        id: uuidv4(),
        img: plumbing,
        name: 'Сантехника и отопление',
    },
    {
        id: uuidv4(),
        img: cleaning,
        name: 'Ремонтно-строительные работы',
    },
    {
        id: uuidv4(),
        img: repair,
        name: 'Прочие услуги',
    },
    {
        id: uuidv4(),
        img: other_services,
        name: 'Реклама в новостройках',
    },
    {
        id: uuidv4(),
        img: ads_build,
        name: 'Реклама в новостройках',
    },
]