import {FC} from "react";
import style from './SectionFormFeedback.module.scss';
import {Container} from "@/Components/UI/Container/Container";
import {FormFeedback} from "@/Components/UI/SectionFormFeedback/FormFeedback/FormFeedback";

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
                        <source srcSet="/img/object/callback-img-tab.svg" media="(max-width: 1080px)"/>
                        <img src="/img/object/callback-img.svg" alt=""/>
                    </picture>
                    <FormFeedback/>
                </div>
            </Container>
        </section>
    )
}