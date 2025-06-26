import {FC} from "react";
import {ProjectsType} from "../../../../Api/ProjectsData.ts";
import {OrganizationsType} from "../../../../Api/organizationsData.ts";
import {Link} from "react-router-dom";
import style from './ObjectsManagementListItem.module.scss'

type listType = ProjectsType | OrganizationsType;

interface IObjectsManagementListItemProps {
    item: listType;
}

export const ObjectsManagementListItem: FC<IObjectsManagementListItemProps> = ({item}) => {
    return (
        <Link to={`/objects/${item.id}`} className={style.objectsManagementListItem__link}>
            <img src={item.photo} alt={item.title} className={style.objectsManagementListItem__img} />
            <span className={style.objectsManagementListItem__text}>{item.title}</span>
        </Link>
    )
}