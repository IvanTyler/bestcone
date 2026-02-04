import { FC } from "react";
import {OrganizationsType} from "@/Api/organizationsData";
import {SectionBreadCrumbs} from "@/Components/UI/SectionBreadCrumbs/SectionBreadCrumbs";
import {StoryAboutProblems} from "@/app/organization/StoryAboutProblems/StoryAboutProblems";
import {AboutCompany} from "@/app/organization/AboutCompany/AboutCompany";

interface IOrganizationInfoProps {
    organizationsList: OrganizationsType;
}

export const OrganizationInfoView: FC<IOrganizationInfoProps> = ({ organizationsList }) => {

    return (
        <>
            <SectionBreadCrumbs
                fon={organizationsList?.fon}
                title={organizationsList.title}
                navItem={organizationsList.title}
            />
            {organizationsList.id === 1 || organizationsList.id === 2 || organizationsList.id === 3 ? <StoryAboutProblems id={organizationsList.id} /> : null}
            <AboutCompany
                desc={organizationsList.desc}
                documents={organizationsList.doc}
                photo={organizationsList.photo}
            />
        </>
    )
}