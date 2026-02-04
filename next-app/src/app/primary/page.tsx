import SwiperSliderBusiness from "@/app/primary/SwiperSliderBusiness/SwiperSliderBusiness";
import ComfortEveryDetail from "@/app/primary/ComfortEveryDetail/ComfortEveryDetail";
import Advantages from "@/app/primary/Advantages/Advantages";
import MobileApp from "@/app/primary/MobileApp/MobileApp";
import Services from "@/Components/UI/Services/Services";
import CleaningServices from "@/app/primary/CleaningServices/CleaningServices";
import ObjectsManagement from "@/app/primary/ObjectsManagement/ObjectsManagement";

export default function MainPage() {
    return (
        <>
            <SwiperSliderBusiness/>
            <ComfortEveryDetail/>
            <Advantages/>
            <MobileApp/>
            <Services/>
            <CleaningServices/>
            <ObjectsManagement/>
        </>
    )
}