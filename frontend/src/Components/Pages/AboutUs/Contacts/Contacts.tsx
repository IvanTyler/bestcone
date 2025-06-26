import {FC} from "react";
import style from './Contacts.module.scss';
import {Container} from "../../../UI/Container/Container.tsx";

export const Contacts: FC = () => {
    return (
        <section className={style.contacts}>
            <Container className={style.containerContacts}>
                <div className={style.contacts__item}>
                    <a href="tel:+74956458050" className={style.contacts__link}>+7 (495) 645-80-50</a>
                </div>
                <div className={style.contacts__item}>
                    <a href="mailto:info@bestcon.life" className={style.contacts__link}>info@bestcon.life</a>
                </div>
                <div className={style.contacts__item}>
                    <span className={style.contacts__text}>
                        Москва, Ленинградский проспект, д. 31, строение 3
                    </span>
                </div>
            </Container>
        </section>
    )
}