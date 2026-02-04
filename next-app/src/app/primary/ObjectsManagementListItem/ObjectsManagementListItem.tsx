import {FC} from "react";
import style from './ObjectsManagementListItem.module.scss'
import Link from "next/link";
import {ProjectsType} from "@/Api/ProjectsData";
import {OrganizationsType} from "@/Api/organizationsData";

type listType = ProjectsType | OrganizationsType;

interface IObjectsManagementListItemProps {
    item: listType;
}

export const ObjectsManagementListItem: FC<IObjectsManagementListItemProps> = ({item}) => {

    return (
        <Link href={`/project/${item.id}`} className={style.objectsManagementListItem__link}>
            <img src={item.photo} alt={item.title} className={style.objectsManagementListItem__img} />
            <span className={style.objectsManagementListItem__text}>{item.title}</span>
        </Link>
    )
}