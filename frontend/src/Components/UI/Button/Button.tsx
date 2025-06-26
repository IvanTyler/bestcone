import {FC} from "react";
import style from './Button.module.scss';
import cx from "classnames";

interface IButtonProps {
    type?: 'button | submit | reset' | any;
    myClassName: string;
    text: string;
}

export const Button: FC<IButtonProps> = ({myClassName, text, type}) => {
    return (
        <button type={type} className={cx(style.button, myClassName)}>{text}</button>
    )
}