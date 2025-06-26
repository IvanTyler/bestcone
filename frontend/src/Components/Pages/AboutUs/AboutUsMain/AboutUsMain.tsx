import {FC} from "react";
import {SectionBreadCrumbs} from "../../../UI/SectionBreadCrumbs/SectionBreadCrumbs.tsx";
import fon from '/src/assets/img/about/index.webp'
import {AboutCompany} from "../AboutCompany/AboutCompany.tsx";
import {Timeline} from "../Timeline/Timeline.tsx";
import {Contacts} from "../Contacts/Contacts.tsx";


export const AboutUsMain: FC = () => {
    return (
        <>
            <SectionBreadCrumbs fon={fon} title={'О компании'} navItem={'О нас'}/>
            <AboutCompany/>
            <Timeline />
            <Contacts />
        </>
    )
}