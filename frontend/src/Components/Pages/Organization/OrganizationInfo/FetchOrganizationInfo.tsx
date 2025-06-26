import {FC} from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {fetchOrganizationsList} from "../../../../Api/organizationsData.ts";
import {queryClient} from "../../../../Api/queryClient.ts";
import {Preloader} from "../../../UI/Preloader/Preloader.tsx";
import {OrganizationInfoView} from "./OrganizationInfoView.tsx";


export const FetchOrganizationInfo: FC = () => {
    const {organizationId} = useParams();

    const organizationInfo = useQuery({
        queryFn: fetchOrganizationsList,
        queryKey: ['organizationInfo'],
    }, queryClient)

    switch (organizationInfo.status) {
        case 'pending':
            return <Preloader />
        case 'success':
            return <OrganizationInfoView organizationsList={organizationInfo.data} organizationId={Number(organizationId)} />
        case 'error':
            return (
                <p>Данных нет</p>
            )
    }
}