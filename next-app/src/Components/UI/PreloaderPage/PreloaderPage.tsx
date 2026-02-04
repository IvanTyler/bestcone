import {FC} from "react";
import logo from '../../../assets/header/logo.svg';
import style from './Preloader.module.scss'
import { clsx } from 'clsx';
import Image from 'next/image';

interface IPreloaderProps {
    isLoaded: boolean;
}

export const PreloaderPage: FC<IPreloaderProps> = ({isLoaded}) => {

    return (
        <div className={isLoaded ?
            clsx(style.preloader) :
            clsx(style.preloader, style.loaded)
        }>
            <div className={style.preloaderLogo}>
                <Image src={logo.src} alt="" width="161" height="39"/>
            </div>
            <div className={style.preloaderBody}>
                <div id={style.loadingProgressG}>
                    <div className={style.loadingProgressG} id={style.loadingProgressG_1}></div>
                </div>
            </div>
        </div>
    )
}