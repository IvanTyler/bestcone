import {FC} from "react";
import style from './AboutCompany.module.scss';
import Image from 'next/image';

import img from '/src/assets/img/services-1-570x368.jpg';
import {Container} from "@/Components/UI/Container/Container";

export const AboutCompany: FC = () => {
    return (
        <section className={style.aboutCompany}>
            <Container className={style.containerAboutCompany}>
                <h2 className={style.aboutCompany__title}>Несколько слов о нас</h2>
                <p className={style.aboutCompany__desc}>
                    Управляющая компания Bestcon life специализируется на обслуживании жилых и коммерческих объектов.
                    Мы стремимся предоставить высококачественный сервис, используя современные технологии.
                    Нами ведётся ежедневное техническое обслуживание зданий, благоустройство территории, поддержание чистоты домов и работа с клиентами по гарантийным, аварийным и техническим вопросам.
                </p>
                <div className={style.aboutCompany__wrapperImg}>
                    <Image src={img.src} alt="about-company" className={style.aboutCompany__img}/>
                </div>
            </Container>
        </section>
    )
}