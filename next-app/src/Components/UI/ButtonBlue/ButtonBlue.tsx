'use client'

import { FC, useEffect } from "react";
import style from './ButtonBlue.module.scss';
import { clsx } from 'clsx';

interface IButtonProps {
    text?: string;
    className?: string;
    link?: string;
    positionTopSection?: number;
}

export const ButtonBlue: FC<IButtonProps> = ({ text, className, link, positionTopSection }) => {

    useEffect(() => {
        if (positionTopSection) scrollTop()
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: positionTopSection,
            behavior: 'smooth'
        })
    }

    return (
        <div onClick={() => scrollTop()} className={clsx(style.button, style.buttonOuter, className)}>
            <a href={link} className={style.button__buttonWinona}>
                <span className={clsx(style.button__buttonWinonaText, style.original)}>{text}</span>
                <span className={clsx(style.button__buttonWinonaText, style.duplicate)}>{text}</span>
            </a>
        </div>
    )
}