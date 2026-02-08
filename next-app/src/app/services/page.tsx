import {FC} from "react";
import fon from '/img/services/fon-services.jpg';
import {SectionBreadCrumbs} from "@/Components/UI/SectionBreadCrumbs/SectionBreadCrumbs";
import AboutCompany from "@/app/about-us/AboutCompany/AboutCompany";
import {AdditionalServices} from "@/app/services/AdditionalServices/AdditionalServices";
import {QualityService} from "@/app/services/QualityService/QualityService";


const ServicesMain: FC = () => {

    return (
        <>
            <SectionBreadCrumbs fon={'/img/services/fon-services.jpg'} title={'Услуги'} navItem={'Услуги'} />
            <AboutCompany />
            <AdditionalServices />
            <QualityService />
        </>
    )
}

export default ServicesMain;