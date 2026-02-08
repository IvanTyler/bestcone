import {FC} from "react";
import img from '/img/breadcrumbs-image-1.jpg';
import {ContactUs} from "@/app/contacts/ContactUs/ContactUs";
import {SectionFormFeedback} from "@/Components/UI/SectionFormFeedback/SectionFormFeedback";
import {SectionBreadCrumbs} from "@/Components/UI/SectionBreadCrumbs/SectionBreadCrumbs";

const ContactsMain: FC = () => {
    return (
        <>
            <SectionBreadCrumbs fon={'/img/breadcrumbs-image-1.jpg'} title='Контакты' navItem='Контакты'/>
            <ContactUs/>
            <SectionFormFeedback />
        </>
    )
}

export default ContactsMain;