import {FC} from "react";
import style from './ContactUs.module.scss';
import cx from "classnames";
import {Container} from "@/Components/UI/Container/Container";
import {MapContacts} from "@/app/contacts/MapContacts/MapContacts";

export const ContactUs: FC = () => {
    return (
        <section className={style.contactsUs}>
            <Container className={style.containerContactsUs}>
                <h2 className={style.contactsUs__title}>Связаться с нами</h2>

                <ul className={style.contactsUsList}>
                    <li className={cx(style.contactsUsList__item, 'fl-bigmug-line-map87')}>
                        <a href={'#'} className={style.contactsUsList__link}>
                            Москва, Ленинградский проспект, д. 31, строение 3
                        </a>
                    </li>
                    <li className={cx(style.contactsUsList__item, 'fl-bigmug-line-phone351')}>
                        <a href="tel:+74956458050" className={style.contactsUsList__link}>+7 (495) 645-80-50</a>
                        <span className={style.contactsUsList__subText}>Центральный офис</span>
                    </li>
                    <li className={cx(style.contactsUsList__item, 'fl-bigmug-line-phone351')}>
                        <a href="tel:+74952499992" className={style.contactsUsList__link}>+7 (495) 249-99-92</a>
                        <span className={style.contactsUsList__subText}>Диспетчерская</span>
                    </li>
                    <li className={cx(style.contactsUsList__item, 'fl-bigmug-line-email64')}>
                        <a href="mailto:info@bestcon.life" className={style.contactsUsList__link}>info@bestcon.life</a>
                    </li>
                </ul>
                <div className={style.contactsUs__wrapperMap}>
                    <MapContacts/>
                </div>
            </Container>
        </section>
    )
}