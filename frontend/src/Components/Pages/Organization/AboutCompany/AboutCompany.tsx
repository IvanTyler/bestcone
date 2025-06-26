import {FC} from "react";
import style from './AboutCompany.module.scss'
import {Container} from "../../../UI/Container/Container.tsx";
import {DocType} from "../../../../Api/organizationsData.ts";
import {Documents} from "../Documents/Documents.tsx";

interface IAboutCompanyProps {
    desc: string | any;
    documents?: DocType[] | any;
    photo: string | any;
}

export const AboutCompany: FC<IAboutCompanyProps> = ({desc, documents, photo}) => {
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