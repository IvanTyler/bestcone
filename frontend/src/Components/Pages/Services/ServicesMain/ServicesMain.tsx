import {FC} from "react";
import {SectionBreadCrumbs} from "../../../UI/SectionBreadCrumbs/SectionBreadCrumbs.tsx";
import fon from '/src/assets/img/services/fon-services.jpg';
import {AboutCompany} from "../AboutCompany/AboutCompany.tsx";
import {AdditionalServices} from "../../AboutUs/AdditionalServices/AdditionalServices.tsx";
import {QualityService} from "../QualityService/QualityService.tsx";

export const ServicesMain: FC = () => {
    return (
        <>
            <SectionBreadCrumbs fon={fon} title={'Услуги'} navItem={'Услуги'} />
            <AboutCompany />
            <AdditionalServices />
            <QualityService />
        </>
    )
}