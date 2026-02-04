import {FC} from "react";
import style from './DocumentsItem.module.scss';

import iconPDF from '/src/assets/img/icon-pdf.svg'
import iconWORD from '/src/assets/img/icon-word.svg'
import {DocType} from "@/Api/organizationsData";


interface IDocumentsItem {
    item: DocType;
}

export const DocumentsItem: FC<IDocumentsItem> = ({item}) => {

    const typeDocument = () => {
        switch (item.type) {
            case 'PDF':
                return iconPDF.src;
            case 'WORD':
                return iconWORD.src;
        }
    }

    const isTypeDocument = typeDocument();

    return (
        <a href={item.path} className={style.documentsItem} download>
            <div className={style.documentsItem__wrapperIcon}>
                <img src={isTypeDocument} className={style.documentsItem__icon} alt=""/>
            </div>
            <span className={style.documentsItem__fileName}>{item.fileName}</span>
            <div className={style.documentsItem__wrapperType}>
                <span className={style.documentsItem__type}>
                    {item.type}
                </span>
                <span className={style.documentsItem__size}>
                    {item.size}
                </span>
            </div>
        </a>
    )
}