import {FC} from "react";
import style from './SectionFormFeedback.module.scss';
import {Container} from "../Container/Container.tsx";
import {FormFeedback} from "./FormFeedback/FormFeedback.tsx";

export const SectionFormFeedback: FC = () => {
    return (
        <section className={style.sectionFormFeedback}>
            <Container className={style.containerFormFeedback}>
                <div className={style.sectionFormFeedback__content}>
                    <h2 className={style.sectionFormFeedback__title}>Есть к нам вопросы?</h2>
                    <h3 className={style.sectionFormFeedback__subTitle}>
                        Заполните анкету и мы с вами свяжемся
                        в ближайшее время
                    </h3>
                    <picture className={style.sectionFormFeedback__img}>
                        <source srcSet="/src/assets/img/object/callback-img-tab.svg" media="(max-width: 1080px)"/>
                        <img src="/src/assets/img/object/callback-img.svg" alt=""/>
                    </picture>
                    <FormFeedback/>
                </div>
            </Container>
        </section>
    )
}