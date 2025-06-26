import {FC, useEffect} from "react";
import style from './ButtonWhite.module.scss'
import cx from "classnames";

interface IButtonWhiteProps {
    myClassName?: string;
    text: string;
    positionTopSection?: number;
}

export const ButtonWhite: FC<IButtonWhiteProps> = ({myClassName, text, positionTopSection}) => {

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
        <button onClick={() => scrollTop()} className={cx(style.button, myClassName)}>
            {text ? text : 'Подробнее'}
        </button>
    )
}