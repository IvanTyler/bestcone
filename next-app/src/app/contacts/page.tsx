import {FC} from "react";
import img from '/public/img/breadcrumbs-image-1.jpg';
import {ContactUs} from "@/app/contacts/ContactUs/ContactUs";
import {SectionFormFeedback} from "@/Components/UI/SectionFormFeedback/SectionFormFeedback";
import {SectionBreadCrumbs} from "@/Components/UI/SectionBreadCrumbs/SectionBreadCrumbs";

const ContactsMain: FC = () => {
    return (
        <>
            <SectionBreadCrumbs fon={img.src} title='Контакты' navItem='Контакты'/>
            <ContactUs/>
            <SectionFormFeedback />
        </>
    )
}

export default ContactsMain;