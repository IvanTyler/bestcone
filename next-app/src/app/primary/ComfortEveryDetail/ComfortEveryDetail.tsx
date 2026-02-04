import {FC} from "react";
import style from './ComfortEveryDetail.module.scss'
import cx from "classnames";
import comfortEveryDetailImg from '../../../assets/img/comfortEveryDetail/comfort-every-detail.png';
import {Container} from "@/Components/UI/Container/Container";

export const ComfortEveryDetail: FC = () => {
    return (
        <section className={style.comfortEveryDetail}>
            <Container className={style.containerComfortEveryDetail}>
                <div className={cx(style.comfortEveryDetail__wrapperImg)}>
                    <img className={cx(style.comfortEveryDetail__img)}
                         src={comfortEveryDetailImg.src}
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

export default ComfortEveryDetail;