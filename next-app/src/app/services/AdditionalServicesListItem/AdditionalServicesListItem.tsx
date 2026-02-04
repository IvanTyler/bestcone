import {FC} from "react";
import style from './AdditionalServicesListItem.module.scss'
import {servicesListType} from "@/app/services/AdditionalServicesList/additionalServicesList";
import { StaticImageData } from 'next/image';

interface IAdditionalServicesListItemProps {
    item: servicesListType;
}

export const AdditionalServicesListItem: FC<IAdditionalServicesListItemProps> = ({item}) => {
    return (
        <article className={style.additionalServicesListItem}>
            <div className={style.additionalServicesListItem__wrapperImg}>
                <img src={item.img.toString()} alt={item.name} className={style.additionalServicesListItem__img}/>
            </div>
            <span className={style.additionalServicesListItem__title}>{item.name}</span>
        </article>
    )
}