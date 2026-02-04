import {FC} from "react";
import style from './AboutCompany.module.scss'
import {Container} from "@/Components/UI/Container/Container";
import {Documents} from "@/app/organization/Documents/Documents";
import {DocType} from "@/Api/organizationsData";

interface IAboutCompanyProps {
    desc: string;
    documents?: DocType[];
    photo: string;
}

export const AboutCompany: FC<IAboutCompanyProps> = ({desc, documents, photo}) => {
    console.log('photo', photo)
    return (
        <section className={style.aboutCompany}>
            <Container className={style.containerAboutCompany}>
                <h2 className={style.aboutCompany__title}>
                    О компании
                </h2>
                <div className={style.aboutCompany__wrapperPhoto}>
                    <img className={style.aboutCompany__photo} src={photo} alt={desc}/>
                </div>
                <p className={style.aboutCompany__desc}>
                    {desc}
                </p>

                {documents && <Documents documents={documents} />}
            </Container>
        </section>
    )
}