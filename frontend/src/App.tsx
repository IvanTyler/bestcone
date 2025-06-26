import './App.scss'
import './normalize.scss'
import {Header} from "./Components/UI/Header/Header.tsx";
import {PreloaderPage} from "./Components/UI/PreloaderPage/PreloaderPage.tsx";
import {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Wrapper} from "./Components/UI/Wrapper/Wrapper.tsx";
import {SwiperSliderBusiness} from "./Components/Pages/Main/SwiperSliderBusiness/SwiperSliderBusiness.tsx";
import {ComfortEveryDetail} from "./Components/Pages/Main/ComfortEveryDetail/ComfortEveryDetail.tsx";
import {MobileApp} from "./Components/Pages/Main/MobileApp/MobileApp.tsx";
import {Services} from "./Components/UI/Services/Services.tsx";
import {CleaningServices} from "./Components/Pages/Main/CleaningServices/CleaningServices.tsx";
import {ObjectsManagement} from "./Components/Pages/Main/ObjectsManagement/ObjectsManagement.tsx";
import {Footer} from "./Components/UI/Footer/Footer.tsx";
import {FetchObjectsManagementView} from "./Components/Pages/Project/ObjectsManagementInfo/FetchObjectsManagementView.tsx";
import {Advantages} from "./Components/Pages/Main/Advantages/Advantages.tsx";
import {ButtonScrollTop} from "./Components/UI/ButtonScrollTop/ButtonScrollTop.tsx";
import {FetchOrganizationInfo} from "./Components/Pages/Organization/OrganizationInfo/FetchOrganizationInfo.tsx";
import {AboutUsMain} from "./Components/Pages/AboutUs/AboutUsMain/AboutUsMain.tsx";
import {ServicesMain} from "./Components/Pages/Services/ServicesMain/ServicesMain.tsx";
import {ContactsMain} from "./Components/Pages/Contacts/ContactsMain/ContactsMain.tsx";


function App() {

    const [isPreloader, setIsPreloader] = useState(true);
    const [isPreloaderSuccess, setIsPreloaderSuccess] = useState(true);
    const [scrollTop, setIsScrollTop] = useState(0)

    const handleLoad = () => {
        setIsPreloader(false);
        setTimeout(() => setIsPreloaderSuccess(false), 400)
    }

    const handleScrollTop = () => {
        const countScrollTop = document.documentElement.scrollTop;
        setIsScrollTop(countScrollTop)
    }

    useEffect(() => {

        handleLoad()
        window.addEventListener('load', handleLoad);

        window.addEventListener('scroll', handleScrollTop)

        return () => {
            window.removeEventListener('load', handleLoad);
            window.removeEventListener('scroll', handleLoad);
        };

    }, [])

    return (
        <BrowserRouter>
            <Wrapper>
                <Header/>

                <main className="main">
                    <Routes>
                        <Route path='/' element={
                            <>
                                <SwiperSliderBusiness/>
                                <ComfortEveryDetail/>
                                <Advantages/>
                                <MobileApp/>
                                <Services/>
                                <CleaningServices/>
                                <ObjectsManagement/>
                            </>
                        }/>

                        <Route path='/objects/:objectId' element={<FetchObjectsManagementView/>}/>
                        <Route path='/organizations/:organizationId' element={<FetchOrganizationInfo/>}/>
                        <Route path='/about-us/' element={<AboutUsMain/>}/>
                        <Route path='/services/' element={<ServicesMain/>}/>
                        <Route path='/contacts/' element={<ContactsMain/>}/>

                    </Routes>
                    <ButtonScrollTop isActive={scrollTop >= 500 ? 'active' : ''}  />
                </main>

                <Footer/>
                {isPreloaderSuccess ? <PreloaderPage isLoaded={isPreloader}/> : null}
            </Wrapper>
        </BrowserRouter>
    )
}

export default App
