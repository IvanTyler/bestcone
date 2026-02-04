import {FC} from "react";
import style from './Documents.module.scss';
import styleProject from '../Common/Project.module.scss';
import {Container} from "@/Components/UI/Container/Container";
import { clsx } from 'clsx';
import {DocumentsItem} from "@/app/project/DocumentsItem/DocumentsItem";
import {DocumentsProjectType} from "@/Api/ProjectsData";
import {List} from "@/Components/List/List";

interface IDocumentsProps {
    documents: DocumentsProjectType[];
}

export const Documents: FC<IDocumentsProps> = ({documents}) => {

    return (
        <section className={style.documents}>
            <Container className={style.containerDocuments}>
                <h2 className={clsx(style.documents__title, styleProject.title)}>Документы</h2>
                <div className={style.documentsList}>
                    <List items={documents}
                          renderItem={(item: DocumentsProjectType, index: number) =>
                              <DocumentsItem
                                  item={item}
                                  key={index.toString()}
                              />}
                    />
                </div>
            </Container>
        </section>
    )
}