import {FC} from "react";
import style from "./SectionBreadCrumbs.module.scss";
import {Container} from "../Container/Container.tsx";
import {BreadcrumbsCustomPath} from "../BreadcrumbsCustomPath/BreadcrumbsCustomPath.tsx";

interface ISectionBreadCrumbsProps {
    fon: string | any;
    title: string | any;
    navItem?: string | any;
}

export const SectionBreadCrumbs: FC<ISectionBreadCrumbsProps> = ({fon, title, navItem}) => {
    return (
        <section className={style.sectionBreadCrumbs} style={{backgroundImage: `url(${fon})`}}>
            <Container className={style.containerBreadCrumbs}>
                <h6 className={style.sectionBreadCrumbs__titleDecorated}>Bestcon Life</h6>
                <h1 className={style.sectionBreadCrumbs__title}>{title}</h1>
                <BreadcrumbsCustomPath title={navItem} name={navItem}/>
            </Container>
        </section>
    )
}