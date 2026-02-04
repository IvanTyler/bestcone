import {FC} from "react";
import style from './Advantages.module.scss'
import {Container} from "@/Components/UI/Container/Container";
import {AdvantagesList} from "@/app/primary/AdvantagesList/AdvantagesList";

const Advantages: FC = () => {
    return (
        <section className={style.advantages}>
            <Container className={style.advantagesContainer}>
                <AdvantagesList/>
            </Container>
        </section>
    )
}

export default Advantages;