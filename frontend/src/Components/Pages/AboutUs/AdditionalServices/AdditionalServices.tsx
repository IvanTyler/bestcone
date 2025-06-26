import {FC} from "react";
import style from './AdditionalServices.module.scss'
import {Container} from "../../../UI/Container/Container.tsx";
import {AdditionalServicesList} from "../../Services/AdditionalServicesList/AdditionalServicesList.tsx";

export const AdditionalServices: FC = () => {
    return (
        <section className={style.additionalServices}>
            <Container className={style.containerAdditionalServices}>
                <h2 className={style.additionalServices__title}>
                    Дополнительные услуги
                </h2>
                <h3 className={style.additionalServices__subTitle}>
                    Мы создаем комфортное условие для проживания. Более 100 услуг
                    по привлекательным ценам с гарантией выполнения работы
                </h3>
                <AdditionalServicesList />
            </Container>
        </section>
    )
}