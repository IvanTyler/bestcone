'use client'

import {FC, useState} from "react";
import {ProjectsInfoType} from "@/Api/ProjectsData";
import {SliderProject} from "@/app/project/SliderProject/SliderProject";
import {AboutComplex} from "@/app/project/AboutComplex/AboutComplex";
import {Documents} from "@/app/project/Documents/Documents";
import {SectionFormFeedback} from "@/Components/UI/SectionFormFeedback/SectionFormFeedback";

interface ObjectsManagementViewProps {
    projectsInfoList: ProjectsInfoType;
}

export const ObjectsManagementView: FC<ObjectsManagementViewProps> = ({ projectsInfoList }) => {

    const [positionTopSection, setPositionTopSection] = useState(0);

    return (
        <>
            <SliderProject
                dataSlider={projectsInfoList.home_slider}
                title={projectsInfoList.title}
                positionTopSection={positionTopSection}
            />
            <AboutComplex info={projectsInfoList.info} setPositionTopSection={setPositionTopSection} />
            <Documents documents={projectsInfoList.documents} />
            <SectionFormFeedback />
        </>
    );
}