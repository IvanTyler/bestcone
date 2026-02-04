'use client'

import {FC, useEffect, useRef} from "react";
import style from './AboutComplex.module.scss';
import styleProject from '../Common/Project.module.scss'
import cx from "classnames";
import {Container} from "@/Components/UI/Container/Container";
import {InfoProjectType} from "@/Api/ProjectsData";

import aboutItem1 from '/public/img/object/about-item-1.svg';
import aboutItem2 from '/public/img/object/about-item-2.svg';
import aboutItem3 from '/public/img/object/about-item-3.svg';
import aboutItem4 from '/public/img/object/about-item-4.svg';
import aboutItem5 from '/public/img/object/about-item-5.svg';
import aboutItem6 from '/public/img/object/about-item-6.svg';

interface IAboutComplexProps {
    info: InfoProjectType;
    setPositionTopSection: (item: number) => void;
}

export const AboutComplex: FC<IAboutComplexProps> = ({info, setPositionTopSection}) => {

    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        if (ref.current) {
            const positionSectionTop = Math.floor(ref.current!.getBoundingClientRect().top);
            setPositionTopSection(positionSectionTop);
        }
    }, [])

    return (
        <section ref={ref} className={style.aboutComplex}>
            <Container className={style.containerAboutComplex}>
                <h2 className={cx(style.aboutComplex__title, styleProject.title)}>О комплексе</h2>

                <div className={style.aboutComplexInfo}>
                    <div className={style.aboutComplexInfo__item}>
                        <div className={style.aboutComplexInfo__iconWrapper}>
                            <img src={aboutItem1.src} alt="date"
                                 className={style.aboutComplexInfo__icon}/>
                        </div>
                        <span className={style.aboutComplexInfo__title}>Дата постройки</span>
                        <div className={style.aboutComplexInfo__subTitle}>{info.date_construction}</div>
                    </div>
                    <div className={style.aboutComplexInfo__item}>
                        <div className={style.aboutComplexInfo__iconWrapper}>
                            <img src={aboutItem2.src} alt="date"
                                 className={style.aboutComplexInfo__icon}/>
                        </div>
                        <span className={style.aboutComplexInfo__title}>Управляющая компания</span>
                        <div className={style.aboutComplexInfo__subTitle}>{info.management_company}</div>
                    </div>
                    <div className={style.aboutComplexInfo__item}>
                        <div className={style.aboutComplexInfo__iconWrapper}>
                            <img src={aboutItem3.src} alt="date"
                                 className={style.aboutComplexInfo__icon}/>
                        </div>
                        <span className={style.aboutComplexInfo__title}>Класс</span>
                        <div className={style.aboutComplexInfo__subTitle}>{info.class}</div>
                    </div>
                    <div className={style.aboutComplexInfo__item}>
                        <div className={style.aboutComplexInfo__iconWrapper}>
                            <img src={aboutItem4.src} alt="date"
                                 className={style.aboutComplexInfo__icon}/>
                        </div>
                        <span className={style.aboutComplexInfo__title}>Этажность</span>
                        <div className={style.aboutComplexInfo__subTitle}>{info.floors}</div>
                    </div>
                    <div className={style.aboutComplexInfo__item}>
                        <div className={style.aboutComplexInfo__iconWrapper}>
                            <img src={aboutItem5.src} alt="date"
                                 className={style.aboutComplexInfo__icon}/>
                        </div>
                        <span className={style.aboutComplexInfo__title}>Корпусов</span>
                        <div className={style.aboutComplexInfo__subTitle}>{info.corpus}</div>
                    </div>
                    <div className={style.aboutComplexInfo__item}>
                        <div className={style.aboutComplexInfo__iconWrapper}>
                            <img src={aboutItem6.src} alt="date"
                                 className={style.aboutComplexInfo__icon}/>
                        </div>
                        <span className={style.aboutComplexInfo__title}>Варианты парковки</span>
                        <div className={style.aboutComplexInfo__subTitle}>{info.parking}</div>
                    </div>
                </div>

                <p className={style.aboutComplex__description}>
                    {info.desc}
                </p>
            </Container>
        </section>
    )
}