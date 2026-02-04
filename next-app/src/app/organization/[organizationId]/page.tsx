'use client'

import {FC, useEffect} from "react";
import {useParams} from "next/navigation";
import {useMutation} from "@tanstack/react-query";
import {submitOrganizationInfoData} from "@/Api/organizationsData";
import {queryClient} from "@/Api/queryClient";
import {Preloader} from "@/Components/UI/Preloader/Preloader";
import {OrganizationInfoView} from "@/app/organization/OrganizationInfo/OrganizationInfoView";


const FetchOrganizationInfo: FC = () => {
    const params = useParams();
    const organizationId = params.organizationId as string;

    const submitMutation = useMutation({
        mutationFn: () => submitOrganizationInfoData(Number(organizationId)),
        onError: (error) => {
            console.error('Error submitting opganizations info data:', error);
        }
    }, queryClient);

    useEffect(() => {
        submitMutation.mutate();
    }, [organizationId]);

    switch (submitMutation.status) {
        case 'pending':
            return <Preloader />
        case 'success':
            return <OrganizationInfoView organizationsList={submitMutation.data} />
        case 'error':
            return (
                <p>Данных нет</p>
            )
    }
}

export default FetchOrganizationInfo;