import {FC} from "react";
import style from './Documents.module.scss'
import {DocType} from "@/Api/organizationsData";
import {List} from "@/Components/List/List";
import {DocumentsItem} from "@/app/organization/DocumentsItem/DocumentsItem";

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