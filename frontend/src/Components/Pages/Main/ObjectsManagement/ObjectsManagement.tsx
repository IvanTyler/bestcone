import {FC} from "react";
import style from './ObjectsManagement.module.scss'
import {Container} from "../../../UI/Container/Container.tsx";
import {ObjectsManagementList} from "../ObjectsManagementList/ObjectsManagementList.tsx";

export const ObjectsManagement: FC = () => {

    return (
        <section className={style.objectsManagement}>
            <Container className={style.containerObjectsManagement}>
                <h2 className={style.objectsManagement__title}>
                    Объекты в управлении
                </h2>
                <ObjectsManagementList />
            </Container>
        </section>
    )
}