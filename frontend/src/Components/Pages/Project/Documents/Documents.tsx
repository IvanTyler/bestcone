import {FC} from "react";
import style from './Documents.module.scss';
import styleProject from '../Common/Project.module.scss';
import {DocumentsProjectType} from "../../../../Api/ProjectsData.ts";
import {Container} from "../../../UI/Container/Container.tsx";
import cx from "classnames";
import {List} from "../../../List/List.tsx";
import {DocumentsItem} from "../DocumentsItem/DocumentsItem.tsx";

interface IDocumentsProps {
    documents: DocumentsProjectType[] | any;
}

export const Documents: FC<IDocumentsProps> = ({documents}) => {

    return (
        <section className={style.documents}>
            <Container className={style.containerDocuments}>
                <h2 className={cx(style.documents__title, styleProject.title)}>Документы</h2>
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