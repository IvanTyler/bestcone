import style from './CleaningServices.module.scss';
import {FC} from "react";
import {Container} from "@/Components/UI/Container/Container";
import {ButtonBlue} from "@/Components/UI/ButtonBlue/ButtonBlue";
import {Map} from "@/app/primary/Map/Map";


const CleaningServices: FC = () => {
    return <section className={style.cleaningServices}>
        <Container className={style.containerCleaningServices}>
            <h2 className={style.cleaningServices__title}>
                Объекты клининговых услуг
            </h2>
            <p className={style.cleaningServices__description}>
                Профессиональная уборка выполняется подготовленным персоналом с
                использованием современной техники и безопасных моющих
                средств. Ведь чистота — это залог здоровья и хорошего настроения.
            </p>
            <ButtonBlue className={style.cleaningServices__services} text='Все услуги' link='/services'/>
            <div className={style.cleaningServices__map}>
                <Map/>
            </div>
        </Container>
    </section>
}

export default CleaningServices;