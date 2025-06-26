import {FC} from "react";
import logo from '../../../assets/header/logo.svg';
import style from './Preloader.module.scss'
import cx from 'classnames';

interface IPreloaderProps {
    isLoaded: boolean;
}

export const PreloaderPage: FC<IPreloaderProps> = ({isLoaded}) => {

    return (
        <div className={isLoaded ?
            cx(style.preloader) :
            cx(style.preloader, style.loaded)
        }>
            <div className={style.preloaderLogo}><img src={logo} alt="" width="161" height="39"/>
            </div>
            <div className={style.preloaderBody}>
                <div id={style.loadingProgressG}>
                    <div className={style.loadingProgressG} id={style.loadingProgressG_1}></div>
                </div>
            </div>
        </div>
    )
}