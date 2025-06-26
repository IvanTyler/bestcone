import {FC} from "react";
import cx from "classnames";
import style from './ButtonBlue.module.scss';

interface IButtonProps {
    text?: string;
    className?: string;
    link?: string;
}

export const ButtonBlue: FC<IButtonProps> = ({text, className, link}) => {
    return (
        <div className={cx(style.button, style.buttonOuter, className)}>
            <a href={link} className={style.button__buttonWinona}>
                <span className={cx(style.button__buttonWinonaText, style.original)}>{text}</span>
                <span className={cx(style.button__buttonWinonaText, style.duplicate)}>{text}</span>
            </a>
        </div>
    )
}