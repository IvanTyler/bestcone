import {FC} from "react";
import style from "./DocumentsItem.module.scss";
import {DocumentsProjectType} from "@/Api/ProjectsData";

import documentsIcon from '/public/img/object/documents-icon.svg';
import download from '/public/icons/download-blue.svg';

interface IDocumentItemsProps {
    item: DocumentsProjectType | any;
}

export const DocumentsItem: FC<IDocumentItemsProps> = ({item}) => {

    return (
        <div className={style.documentsItem}>
            <div className={style.documentsItem__iconWrapper}>
                <img src={documentsIcon.src} alt="" className={style.documentsItem__icon}/>
            </div>
            <a download className={style.documentsItem__textLink} href={item.link}>{item.title}</a>
            <a download className={style.documentsItem__download} href={item.link}>
                <span className={style.documentsItem__text}>Скачать</span>
                <img src={download.src} alt="" className={style.documentsItem__downloadIcon}/>
            </a>
        </div>
    )
}