import {FC} from "react";
import {servicesListType} from "../AdditionalServicesList/additionalServicesList.ts";
import style from './AdditionalServicesListItem.module.scss'

interface IAdditionalServicesListItemProps {
    item: servicesListType;
}

export const AdditionalServicesListItem: FC<IAdditionalServicesListItemProps> = ({item}) => {
    return (
        <article className={style.additionalServicesListItem}>
            <div className={style.additionalServicesListItem__wrapperImg}>
                <img src={item.img} alt={item.name} className={style.additionalServicesListItem__img}/>
            </div>
            <span className={style.additionalServicesListItem__title}>{item.name}</span>
        </article>
    )
}