import {FC, useEffect} from "react";
import style from './ButtonScrollTop.module.scss';
import cx from "classnames";

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
            <button onClick={() => handleScrollTop()} className={cx(style.buttonScrollTop, isActive && style.active, 'fl-bigmug-line-up107')}></button>
        </>
    )

}