import {FC} from "react";
import {SectionBreadCrumbs} from "../../../UI/SectionBreadCrumbs/SectionBreadCrumbs.tsx";
import img from '/src/assets/img/breadcrumbs-image-1.jpg';
import {ContactUs} from "../ContactUs/ContactUs.tsx";
import {SectionFormFeedback} from "../../../UI/SectionFormFeedback/SectionFormFeedback.tsx";

export const ContactsMain: FC = () => {
    return (
        <>
            <SectionBreadCrumbs fon={img} title='Контакты' navItem='Контакты'/>
            <ContactUs/>
            <SectionFormFeedback />
        </>
    )
}