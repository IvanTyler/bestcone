import {FC} from "react";
import style from './Button.module.scss';
import { clsx } from 'clsx';


interface IButtonProps {
    type?: 'button | submit | reset' | any;
    myClassName: string;
    text: string;
}

export const Button: FC<IButtonProps> = ({myClassName, text, type}) => {
    return (
        <button type={type} className={clsx(style.button, myClassName)}>{text}</button>
    )
}