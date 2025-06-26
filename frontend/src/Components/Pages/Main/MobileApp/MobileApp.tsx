import {FC} from "react";
import {Container} from "../../../UI/Container/Container.tsx";
import style from './MobileApp.module.scss';
import imgMobileApp from '../../../../assets/img/banner-app-mobile.webp';
import imgAppStore from '../../../../assets/img/footerAppstore.png';
import imgGooglePlay from '../../../../assets/img/footerGoogleplay.png';


export const MobileApp: FC = () => {
    return (
        <section className={style.mobileApp}>
            <Container className={style.containerMobileApp}>
                <div className={style.mobileApp__wrapperImg}>
                    <img src={imgMobileApp} alt="mobileApp" className={style.mobileApp__img}/>
                </div>
                <h2 className={style.mobileApp__title}>
                    Мобильное приложение Bestcon Life
                </h2>
                <p className={style.mobileApp__description}>
                    Оплачивайте коммунальные услуги, вызывайте ремонтников,
                    участвуйте в жизни дома и будьте в курсе всех новостей.
                </p>
                <div className={style.mobileApps}>
                    <a href="//apps.apple.com/ru/app/bestcon-life/id1512441504" className={style.mobileApps__link}>
                        <img src={imgAppStore} alt="App Store" className={style.mobileApps__img}/>
                    </a>
                    <a href="//play.google.com/store/apps/details?id=online.bestcon.bestkon_comfort"
                       className={style.mobileApps__link}>
                        <img src={imgGooglePlay} alt="Google Play" className={style.mobileApps__img}/>
                    </a>
                </div>
            </Container>
        </section>
    )
}