import {v4 as uuidv4} from "uuid";
import { StaticImageData } from 'next/image';

import electrics from '/public/img/services/electrics.webp';
import plumbing from '/public/img/services/plumbing.webp';
import cleaning from '/public/img/services/cleaning.webp';
import repair from '/public/img/services/repair.webp';
import other_services from '/public/img/services/other-services.webp';
import ads_build from '/public/img/services/ads-build.webp';


export type servicesListType = {
    id: string;
    img: StaticImageData | string;
    name: string;
}

export const AdditionalListServices: servicesListType[] = [
    {
        id: uuidv4(),
        img: electrics.src,
        name: 'Электрика',
    },
    {
        id: uuidv4(),
        img: plumbing.src,
        name: 'Сантехника и отопление',
    },
    {
        id: uuidv4(),
        img: cleaning.src,
        name: 'Ремонтно-строительные работы',
    },
    {
        id: uuidv4(),
        img: repair.src,
        name: 'Прочие услуги',
    },
    {
        id: uuidv4(),
        img: other_services.src,
        name: 'Реклама в новостройках',
    },
    {
        id: uuidv4(),
        img: ads_build.src,
        name: 'Реклама в новостройках',
    },
]