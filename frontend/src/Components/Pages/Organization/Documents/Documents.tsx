import {FC} from "react";
import {DocType} from "../../../../Api/organizationsData.ts";
import style from './Documents.module.scss'
import {List} from "../../../List/List.tsx";
import {DocumentsItem} from "../DocumentsItem/DocumentsItem.tsx";

interface IDocumentsProps {
    documents: DocType[];
}

export const Documents: FC<IDocumentsProps> = ({documents}) => {
    return (
        <section className={style.documents}>
            <h2 className={style.documents__title}>Документы</h2>

            <div className={style.documentsList}>
                <List
                    items={documents}
                    renderItem={(item: DocType) => <DocumentsItem item={item} key={item.id}/>}
                />
            </div>
        </section>
    )
}