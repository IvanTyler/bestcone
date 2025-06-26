import {FC} from "react";
import {Container} from "../../../UI/Container/Container.tsx";
import style from './QualityService.module.scss'
import {ButtonBlue} from "../../../UI/ButtonBlue/ButtonBlue.tsx";

export const QualityService: FC = () => {
    return (
        <section className={style.qualityService}>
            <Container className={style.containerQualityService}>
                <div className={style.qualityService__left}></div>
                <h3 className={style.qualityService__supTitle}>Самое важное</h3>
                <h2 className={style.qualityService__title}>Качественное обслуживание</h2>
                <p className={style.qualityService__description}>
                    Мы действуем проактивно. Решаем проблемы до их возникновения
                    и предотвращаем аварийные ситуации. Поддерживаем дома
                    и придомовые территории в первозданном виде.
                </p>
                <ButtonBlue className={style.qualityService__button} text='О нас подробнее' />
            </Container>
        </section>
    )
}