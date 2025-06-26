import {FC} from "react";
import {OrganizationsType} from "../../../../Api/organizationsData.ts";
import {StoryAboutProblems} from "../StoryAboutProblems/StoryAboutProblems.tsx";
import {AboutCompany} from "../AboutCompany/AboutCompany.tsx";
import {SectionBreadCrumbs} from "../../../UI/SectionBreadCrumbs/SectionBreadCrumbs.tsx";

interface IOrganizationInfoProps {
    organizationsList: OrganizationsType[];
    organizationId: number;
}

export const OrganizationInfoView: FC<IOrganizationInfoProps> = ({organizationsList, organizationId}) => {

    const currentProject: OrganizationsType | undefined = organizationsList.find((el: OrganizationsType) => el.id === organizationId);

    return (
        <>
            <SectionBreadCrumbs fon={currentProject?.fon} title={currentProject?.title} navItem={currentProject?.title} />
            {currentProject?.id === 1 || currentProject?.id === 2 || currentProject?.id === 3 ? <StoryAboutProblems id={currentProject?.id}/> : null}
            <AboutCompany desc={currentProject?.desc} documents={currentProject?.doc} photo={currentProject?.photo} />
        </>
    )
}