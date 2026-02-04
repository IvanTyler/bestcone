import {FC} from "react";
import style from './AdvantagesList.module.scss'

export const AdvantagesList: FC = () => {
    return (
        <div className={style.advantagesList}>
            <div className={style.advantagesList__item}>
                <p className="fl-bigmug-line-user144"></p>
                <h2 className={style.advantagesList__title}>
                    Опыт в управлении зданиями
                </h2>
                <p className={style.advantagesList__paragraph}>
                    18 тысяч семей доверили нам управление своими домами.
                    За 10 лет работы ни один из объектов, которые
                    мы обслуживаем, не сменил управляющую компанию.
                </p>
            </div>
            <div className={style.advantagesList__item}>
                <p className="fl-bigmug-line-rectangular78"></p>
                <h2 className={style.advantagesList__title}>
                    Сильная команда
                </h2>
                <p className={style.advantagesList__paragraph}>
                    В Bestcon Life работают только специалисты с профильным
                    образованием и опытом работы от 5 лет. У нас есть своя
                    аварийная бригада, команда для ремонтно-восстановительных
                    работ, альпинисты для работ на высоте и клининговая компания.
                    Собственная техника для уборки мусора и снега позволяет
                    поддерживать порядок в любое время года.
                </p>
            </div>
            <div className={style.advantagesList__item}>
                <p className="fl-bigmug-line-checkmark14"></p>
                <h2 className={style.advantagesList__title}>
                    Круглосуточная поддержка
                </h2>
                <p className={style.advantagesList__paragraph}>
                    У Bestcon Life есть единый диспетчерский пункт для любых обращений.
                    Он работает круглосуточно. Оператор быстро найдёт нужного
                    специалиста или компанию. Вам не нужно записывать десяток
                    номеров сантехников, электриков и других мастеров.
                </p>
            </div>
        </div>
    )
}