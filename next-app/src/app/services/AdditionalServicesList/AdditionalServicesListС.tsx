import {FC} from "react";
import style from './AdditionalServicesList.module.scss';
import {List} from "@/Components/List/List";
import {AdditionalListServices, servicesListType} from "@/app/services/AdditionalServicesList/additionalServicesList";
import {AdditionalServicesListItem} from "@/app/services/AdditionalServicesListItem/AdditionalServicesListItem";


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