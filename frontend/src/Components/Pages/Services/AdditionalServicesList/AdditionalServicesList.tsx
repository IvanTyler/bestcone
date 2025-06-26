import {FC} from "react";
import style from './AdditionalServicesList.module.scss';
import {AdditionalListServices, servicesListType} from "./additionalServicesList.ts";
import {List} from "../../../List/List.tsx";
import {AdditionalServicesListItem} from "../AdditionalServicesListItem/AdditionalServicesListItem.tsx";


export const AdditionalServicesList: FC = () => {

    return (
        <div className={style.additionalServicesList}>
            <List
                items={AdditionalListServices}
                renderItem={(item: servicesListType) => <AdditionalServicesListItem item={item} key={item.id}/>}
            />
        </div>
    )
}