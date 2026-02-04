import {FC, useEffect} from "react";
import style from './ButtonScrollTop.module.scss';
import { clsx } from 'clsx';


interface IButtonScrollTopProps {
    isActive: string;
}

export const ButtonScrollTop: FC<IButtonScrollTopProps> = ({isActive}) => {

    const handleScrollTop = () => {
        document.documentElement.scrollTop = 0;
    }

    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', handleScrollTop);
        };
    }, []);

    return (
        <>
            <button onClick={() => handleScrollTop()} className={clsx(style.buttonScrollTop, isActive && style.active, 'fl-bigmug-line-up107')}></button>
        </>
    )

}