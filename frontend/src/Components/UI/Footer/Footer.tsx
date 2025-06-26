import {FC} from "react";
import style from './Footer.module.scss'
import {Container} from "../Container/Container.tsx";

import imgAppStore from '../../../assets/img/footerAppstore.png';
import imgGooglePlay from '../../../assets/img/footerGoogleplay.png';
import logoImg from '../../../assets/img/logo-bs_life_white.svg';

import {Link} from "react-router-dom";

export const Footer: FC = () => {
    return (
        <footer className={style.footer}>
            <Container className={style.containerFooter}>
                <div className={style.footer__column}>
                    <h3 className={style.footer__title}>О нас</h3>
                    <p className={style.footer__description}>
                        Bestcon Life обслуживает дома и жилые комплексы с 2010 года.
                        Мы решаем любые проблемы жильцов: от протекающего крана
                        до дизайна целой квартиры и обустройства детской площадки.
                    </p>
                </div>
                <div className={style.footer__column}>
                    <h3 className={style.footer__title}>Мы на связи</h3>
                    <ul className={style.footerContactsList}>
                        <li className={style.footerContactsList__item}>
                            <span className="fl-bigmug-line-map87 text-gray-700"></span>
                            <span
                                className={style.footerContactsList__link}>Москва, Ленинградский проспект, д. 31, строение 3</span>
                        </li>
                        <li className={style.footerContactsList__item}>
                            <span className="fl-bigmug-line-phone351 text-gray-700"></span>
                            <a href="tel:+74956458050" className={style.footerContactsList__link}>+7 (495) 645-80-50</a>
                            <span className={style.footerContactsList__subtitle}>Центральный офис</span>
                        </li>
                        <li className={style.footerContactsList__item}>
                            <span className="fl-bigmug-line-phone351 text-gray-700"></span>
                            <a href="tel:+74952499992" className={style.footerContactsList__link}>+7 (495) 249-99-92</a>
                            <span className={style.footerContactsList__subtitle}>Диспетчерская</span>
                        </li>
                        <li className={style.footerContactsList__item}>
                        <span className="fl-bigmug-line-email64 text-gray-700"></span>
                            <a href="mailto:info@bestcon.life"
                               className={style.footerContactsList__link}>info@bestcon.life</a>
                        </li>
                    </ul>
                </div>
                <div className={style.footer__column}>
                    <h3 className={style.footer__title}>Мобильное приложение</h3>
                    <a href="//apps.apple.com/ru/app/bestcon-life/id1512441504" target="_blank">
                        <img src={imgAppStore} alt="App Store"/>
                    </a>
                    <a href="//play.google.com/store/apps/details?id=online.bestcon.bestkon_comfort" target="_blank">
                        <img src={imgGooglePlay} alt="Google Play"/>
                    </a>
                </div>
                <Link to='/' className={style.footer__link}>
                    <img className={style.footer__logoImg} src={logoImg} alt="logo"/>
                </Link>
                <span className={style.footer__rights}>
                    © 2025 Все права защищены
                </span>
            </Container>
        </footer>
    )
}