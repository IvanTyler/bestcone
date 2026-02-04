import { FC, useEffect, useRef } from "react";
import style from './Timeline.module.scss';
import {Container} from "@/Components/UI/Container/Container";

import aboutStage1 from '/src/assets/img/about/about-stage-1.webp';
import aboutStage2 from '/src/assets/img/about/about-stage-2.webp';
import aboutStage3 from '/src/assets/img/about/about-stage-3.webp';
import aboutStage4 from '/src/assets/img/about/about-stage-4.webp';
import aboutStage5 from '/src/assets/img/about/about-stage-5.webp';

interface ITimeLineProps {
    setPositionTopSection: (item: number) => void;
}

const Timeline: FC<ITimeLineProps> = ({ setPositionTopSection }) => {

    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        if (ref.current) {
            const positionSectionTop = Math.floor(ref.current!.getBoundingClientRect().top);
            setPositionTopSection(positionSectionTop);
        }
    }, [])


    return (
        <section className={style.timeLine} ref={ref}>
            <Container className={style.containerTimeLine}>
                <div className={style.timeLine__item}>
                    <div className={style.timeLine__wrapperImg}>
                        <img src={aboutStage1.src} alt="" className={style.timeLine__img} />
                    </div>
                    <div className={style.timeLine__wrapperDivider}>
                        <div className={style.timeLine__divider}></div>
                    </div>
                    <div className={style.timeLine__desc}>
                        <h3 className={style.timeLine__title}>Появление компании – 2010</h3>
                        <p className={style.timeLine__paragraph}>
                            Группа компаний Бэсткон создает в своей структуре управляющую компанию
                            «Bestcon life», чтобы контролировать все, что происходит после сдачи объектов.
                            Управляющая компания создана профессионалами в сфере эксплуатации жилой недвижимости.
                        </p>
                    </div>
                </div>
                <div className={style.timeLine__item}>
                    <div className={style.timeLine__wrapperImg}>
                        <img src={aboutStage2.src} alt="" className={style.timeLine__img} />
                    </div>
                    <div className={style.timeLine__wrapperDivider}>
                        <div className={style.timeLine__divider}></div>
                    </div>
                    <div className={style.timeLine__desc}>
                        <h3 className={style.timeLine__title}>
                            Дополнительные услуги – 2016
                        </h3>
                        <p className={style.timeLine__paragraph}>
                            Хотим помочь людям решать основные задачи по дому, не выходя из него
                            и не прилагая усилий. Для этого мы создали линейку дополнительных услуг.
                            Делаем все это максимально доступным и удобным для всех жителей.
                        </p>
                    </div>
                </div>
                <div className={style.timeLine__item}>
                    <div className={style.timeLine__wrapperImg}>
                        <img src={aboutStage3.src} alt="" className={style.timeLine__img} />
                    </div>
                    <div className={style.timeLine__wrapperDivider}>
                        <div className={style.timeLine__divider}></div>
                    </div>
                    <div className={style.timeLine__desc}>
                        <h3 className={style.timeLine__title}>Поддержка жителей – 2019</h3>
                        <p className={style.timeLine__paragraph}>
                            Сформирован отдел по работе с клиентами. Его сотрудники – первые
                            и главные помощники жителей в решении любых вопросов с проживанием.
                        </p>
                    </div>
                </div>
                <div className={style.timeLine__item}>
                    <div className={style.timeLine__wrapperImg}>
                        <img src={aboutStage4.src} alt="" className={style.timeLine__img} />
                    </div>
                    <div className={style.timeLine__wrapperDivider}>
                        <div className={style.timeLine__divider}></div>
                    </div>
                    <div className={style.timeLine__desc}>
                        <h3 className={style.timeLine__title}>
                            Мобильное приложение – 2020
                        </h3>
                        <p className={style.timeLine__paragraph}>
                            Появилось мобильное приложение. Простой и удобный способ подать
                            показания счётчиков, оплатить ЖКУ квитанции, а также вызвать мастера -
                            всё это теперь можно сделать, не выходя из дома.
                        </p>
                    </div>
                </div>
                <div className={style.timeLine__item}>
                    <div className={style.timeLine__wrapperImg}>
                        <img src={aboutStage5.src} alt="" className={style.timeLine__img} />
                    </div>
                    <div className={style.timeLine__wrapperDivider}>
                        <div className={style.timeLine__divider}></div>
                    </div>
                    <div className={style.timeLine__desc}>
                        <h3 className={style.timeLine__title}>
                            Оптимизация операционной деятельности – 2022
                        </h3>
                        <p className={style.timeLine__paragraph}>
                            Продолжается развитие мобильного приложения «Bestcon life», которое становится
                            доступным все большему количеству жителей. Приложение позволит вам вызвать
                            специалистов и мастеров управляющей компании, оформить пропуска на территорию
                            для гостей, просмотреть данные с видеокамер, оплатить коммунальные
                            платежи и первым узнавать важные новости дома и компании.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Timeline