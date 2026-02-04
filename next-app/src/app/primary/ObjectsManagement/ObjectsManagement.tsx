import {FC} from "react";
import style from './ObjectsManagement.module.scss'
import {Container} from "@/Components/UI/Container/Container";
import {ObjectsManagementList} from "@/app/primary/ObjectsManagementList/ObjectsManagementList";

const ObjectsManagement: FC = () => {
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

export default ObjectsManagement;