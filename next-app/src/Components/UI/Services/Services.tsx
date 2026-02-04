import {FC} from "react";
import style from './Services.module.scss';
import {Container} from "@/Components/UI/Container/Container";

const Services: FC = () => {
    return (
        <section className={style.services}>
            <Container className={style.containerServices}>
                <h2 className={style.services__title}>
                    Услуги
                </h2>
                <div className={style.servicesList}>
                    <div className={style.servicesList__item}>
                        <div className="fl-bigmug-line-checkmark14"></div>
                        <h4 className={style.servicesList__title}>Аудит</h4>
                        <ul className={style.servicesDescriptionList}>
                            <li className={style.servicesDescriptionList__item}>проверим все системы перед заселением</li>
                            <li className={style.servicesDescriptionList__item}>пообщаемся с контролирующими инстанциями</li>
                            <li className={style.servicesDescriptionList__item}>наберём и обучим обслуживающий персонал</li>
                            <li className={style.servicesDescriptionList__item}>составим инструкции по эксплуатации</li>
                            <li className={style.servicesDescriptionList__item}>оптимизируем расходы на «коммуналку»</li>
                            <li className={style.servicesDescriptionList__item}>проверим и согласуем проект инженерных
                                систем
                            </li>
                            <li className={style.servicesDescriptionList__item}>проведём технический надзор</li>
                        </ul>
                    </div>
                    <div className={style.servicesList__item}>
                        <div className="fl-bigmug-line-wrench66"></div>
                        <h4 className={style.servicesList__title}>Электричество</h4>
                        <ul className={style.servicesDescriptionList}>
                            <li className={style.servicesDescriptionList__item}>установим/заменим счётчики и другие
                                устройства
                            </li>
                            <li className={style.servicesDescriptionList__item}>подадим напряжение для пусконаладки</li>
                            <li className={style.servicesDescriptionList__item}>подключим субабонентов</li>
                            <li className={style.servicesDescriptionList__item}>включим электричество после отключения</li>
                        </ul>
                    </div>
                    <div className={style.servicesList__item}>
                        <div className="fl-bigmug-line-cloud255"></div>
                        <h4 className={style.servicesList__title}>Климат и вода
                        </h4>
                        <ul className={style.servicesDescriptionList}>
                            <li className={style.servicesDescriptionList__item}>подключим и отключим</li>
                            <li className={style.servicesDescriptionList__item}>поставим новые счётчики или заменим старые</li>
                            <li className={style.servicesDescriptionList__item}>починим или заменим трубы и краны</li>
                            <li className={style.servicesDescriptionList__item}>устраним засоры в трубах и сантехнике</li>
                            <li className={style.servicesDescriptionList__item}>установим кондиционеры</li>
                            <li className={style.servicesDescriptionList__item}>проследим, чтобы всё работало бесперебойно
                            </li>
                        </ul>
                    </div>
                    <div className={style.servicesList__item}>
                        <div className="fl-bigmug-line-lock64"></div>
                        <h4 className={style.servicesList__title}>Безопасность</h4>
                        <ul className={style.servicesDescriptionList}>
                            <li className={style.servicesDescriptionList__item}>установим и подключим пожарную сигнализацию</li>
                            <li className={style.servicesDescriptionList__item}>поставим домофон или видеодомофон, сделаем ключи</li>
                            <li className={style.servicesDescriptionList__item}>повесим и подключим камеры</li>
                            <li className={style.servicesDescriptionList__item}>наймём и обучим консьержей и охрану</li>
                            <li className={style.servicesDescriptionList__item}>проследим за движением авто и паркингом</li>
                        </ul>
                    </div>
                    <div className={style.servicesList__item}>
                        <div className="fl-bigmug-line-two317"></div>
                        <h4 className={style.servicesList__title}>Клининг</h4>
                        <ul className={style.servicesDescriptionList}>
                            <li className={style.servicesDescriptionList__item}>наведём чистоту во внутренних помещениях</li>
                            <li className={style.servicesDescriptionList__item}>обеспечим уход за прилегающей территорией</li>
                            <li className={style.servicesDescriptionList__item}>помоем окна и фасады</li>
                            <li className={style.servicesDescriptionList__item}>наведём порядок после строительства и ремонта</li>
                        </ul>
                    </div>
                    <div className={style.servicesList__item}>
                        <div className="fl-bigmug-line-clipboard68"></div>
                        <h4 className={style.servicesList__title}>Бесперебойная работа
                        </h4>
                        <ul className={style.servicesDescriptionList}>
                            <li className={style.servicesDescriptionList__item}>проверим проводку, отопление, трубы, лифты, камеры и телеком</li>
                            <li className={style.servicesDescriptionList__item}>наладим или заменим до того, как сломается</li>
                            <li className={style.servicesDescriptionList__item}>если всё-таки сломалось — починим сразу</li>
                            <li className={style.servicesDescriptionList__item}>спланируем капитальный ремонт</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Services;