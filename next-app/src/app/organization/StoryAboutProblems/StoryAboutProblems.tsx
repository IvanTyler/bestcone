'use client'

import {FC, useEffect} from "react";
import style from './StoryAboutProblems.module.scss';
import {Container} from "@/Components/UI/Container/Container";

interface IStoryAboutProblemsProps {
    id: number;
}

export const StoryAboutProblems: FC<IStoryAboutProblemsProps> = ({id}) => {

    useEffect(() => {
        widgetGosUslugi()
    }, []);

    const HOST = 'https://pos.gosuslugi.ru/form';
    const bestServiceNumber = 229504;
    const bestServiceRaNumber = 359498;
    const aventaEngineering = 359497;

    function widgetGosUslugi() {
        if (typeof (window as any).Widget === 'function') {
            if (id === 1) (window as any).Widget(HOST, bestServiceNumber);
            if (id === 2) (window as any).Widget(HOST, bestServiceRaNumber);
            if (id === 3) (window as any).Widget(HOST, aventaEngineering);
        } else {
            console.error('Функция Widget не найдена');
        }
    }


    return (
        <section id='js-show-iframe-wrapper' className={style.storyAboutProblems}>
            <Container className={style.containerStoryAboutProblems}>
                <div className={style.storyAboutProblems__left}>
                    <h3 className={style.storyAboutProblems__title}>
                        В квитанциях ошибки, в подъезде мусор, сотрудники управляющей хамят?
                    </h3>
                    <div className={style.storyAboutProblems__subTitle}>
                        Расскажите о проблемах с ЖКХ
                    </div>
                    <button className={style.storyAboutProblems__button}>
                        Написать о проблеме
                    </button>
                </div>
                <div className={style.storyAboutProblems__right}>
                    <div className={style.storyAboutProblems__logoWrap}>
                        <img
                            src="https://pos.gosuslugi.ru/bin/banner-fluid/gosuslugi-logo-blue.svg"
                            alt="Госуслуги" className={style.storyAboutProblems__img}/>
                        <span className={style.storyAboutProblems__slogan}>
                            Решаем вместе
                        </span>
                    </div>
                </div>
            </Container>
        </section>
    )
}