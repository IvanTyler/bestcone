import {FC} from "react";
import style from './Advantages.module.scss'
import {Container} from "../../../UI/Container/Container.tsx";
import {AdvantagesList} from "../AdvantagesList/AdvantagesList.tsx";

export const Advantages: FC = () => {
    return (
        <section className={style.advantages}>
            <Container className={style.advantagesContainer}>
                <AdvantagesList />
            </Container>
        </section>
    )
}