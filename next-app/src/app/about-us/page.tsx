'use client'

import {FC, useState} from "react";
import fon from '/src/assets/img/about/index.webp'
import {SectionBreadCrumbs} from "@/Components/UI/SectionBreadCrumbs/SectionBreadCrumbs";
import AboutCompany from "./AboutCompany/AboutCompany";
import Timeline from "./Timeline/Timeline";
import Contacts from "./Contacts/Contacts";


const AboutUsPage: FC = () => {

    const [positionTopSection, setPositionTopSection] = useState(0);

    return (
        <>
            <SectionBreadCrumbs fon={fon.src} title='О компании' navItem='О нас' />
            <AboutCompany positionTopSection={positionTopSection} />
            <Timeline setPositionTopSection={setPositionTopSection}/>
            <Contacts />
        </>
    )
}

export default AboutUsPage;