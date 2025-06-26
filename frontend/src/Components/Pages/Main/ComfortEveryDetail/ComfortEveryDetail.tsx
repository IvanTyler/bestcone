import {FC} from "react";
import style from './ComfortEveryDetail.module.scss'
import {Container} from "../../../UI/Container/Container.tsx";
import cx from "classnames";

export const ComfortEveryDetail: FC = () => {
    return (
        <section className={style.comfortEveryDetail}>
            <Container className={style.containerComfortEveryDetail}>
                <div className={cx(style.comfortEveryDetail__wrapperImg)}>
                    <img className={cx(style.comfortEveryDetail__img)}
                         src="https://images.unsplash.com/photo-1613545325268-9265e1609167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                         alt="img"/>
                </div>
                <h3 className={style.comfortEveryDetail__title}>
                    <span className={cx(style.comfortEveryDetail__wow, style.slideInDown)}>
                        Комфорт в каждой детали
                    </span>
                </h3>
                <div className={style.comfortEveryDetail__wrapperParagraphs}>
                    <p className={cx(style.comfortEveryDetail__paragraph, style.wowOuter)}>
                        <span className={cx(style.comfortEveryDetail__wow, style.slideInDown)}>
                            Миссия Bestcon Life — наполнять каждый день вашей жизни радостью и спокойствием.
                            В наших домах тепло, чисто и красиво, а во дворах жильцы любого возраста чувствует себя в безопасности.
                        </span>
                    </p>
                    <p className={cx(style.comfortEveryDetail__paragraph, style.wowOuter)}>
                        <span className={cx(style.comfortEveryDetail__wow, style.slideInDown)}>
                            Нам можно доверить любую задачу: от протекающего крана до дизайна целой
                            квартиры и обустройства детской площадки. Если вам нужна помощь,
                            мы на связи круглосуточно.
                        </span>
                    </p>
                </div>
            </Container>
        </section>
    )
}