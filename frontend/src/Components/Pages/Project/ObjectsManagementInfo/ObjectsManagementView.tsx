import {FC, useState} from "react";
import { ProjectsInfoType } from "../../../../Api/ProjectsData.ts";
import { SliderProject } from "../SliderProject/SliderProject.tsx";
import { AboutComplex } from "../AboutComplex/AboutComplex.tsx";
import { Documents } from "../Documents/Documents.tsx";

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
        </>
    );
}