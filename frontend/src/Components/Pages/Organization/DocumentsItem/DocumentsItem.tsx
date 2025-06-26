import {FC} from "react";
import {DocType} from "../../../../Api/organizationsData.ts";
import style from './DocumentsItem.module.scss';

import iconPDF from '/src/assets/img/icon-pdf.svg'
import iconWORD from '/src/assets/img/icon-word.svg'


interface IDocumentsItem {
    item: DocType;
}

export const DocumentsItem: FC<IDocumentsItem> = ({item}) => {

    const typeDocument = () => {
        switch (item.type) {
            case 'PDF':
                return iconPDF;
            case 'WORD':
                return iconWORD;
        }
    }

    const isTypeDocument = typeDocument();


    return (
        <a href={item.path} className={style.documentsItem} download>
            <div className={style.documentsItem__wrapperIcon}>
                <img src={isTypeDocument} className={style.documentsItem__icon}/>
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