import {FC} from "react";
import { StaticImageData } from 'next/image';
import style from "./SectionBreadCrumbs.module.scss";
import {Container} from "@/Components/UI/Container/Container";
import {BreadcrumbsCustomPath} from "@/Components/UI/BreadcrumbsCustomPath/BreadcrumbsCustomPath";

interface ISectionBreadCrumbsProps {
    fon: StaticImageData | string;
    title?: string;
    navItem?: string;
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