import {FC} from "react";
import style from './AboutCompany.module.scss';
import {Container} from "../../../UI/Container/Container.tsx";
import {ButtonBlue} from "../../../UI/ButtonBlue/ButtonBlue.tsx";

import img from '/src/assets/img/large-features-1-470x334.png';

export const AboutCompany: FC = () => {
    return (
        <section className={style.aboutCompany}>
            <Container className={style.containerAboutCompany}>
                <h2 className={style.aboutCompany__title}>О компании</h2>
                <p className={style.aboutCompany__desc}>
                    Управляющая компания «Bestcon life» создана в рамках группы компаний «Бэсткон» для комплексного
                    обслуживания и улучшения условий проживания жителей многоквартирных домов.
                    Эффективность эксплуатации повышается, так как конструкции и коммуникации домов понятны и знакомы.
                </p>
                <ButtonBlue className={style.aboutCompany__button} text={'Наша история'} />
                <div className={style.aboutCompany__wrapperImg}>
                    <img src={img} alt="about-company" className={style.aboutCompany__img}/>
                </div>
            </Container>
        </section>
    )
}