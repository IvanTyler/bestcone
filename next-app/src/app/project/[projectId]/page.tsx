'use client'

import {FC, useEffect} from "react";
import {useParams} from "next/navigation";

import {useMutation} from "@tanstack/react-query";
import {submitProjectData} from "@/Api/ProjectsData";
import {queryClient} from "@/Api/queryClient";
import {Preloader} from "@/Components/UI/Preloader/Preloader";
import {ObjectsManagementView} from "@/app/project/ObjectsManagementInfo/ObjectsManagementView";


export const Page: FC = () => {
    const params = useParams();
    const projectId = params.projectId as string;

    console.log('projectId', projectId)

    const submitMutation = useMutation({
        mutationFn: () => submitProjectData(Number(projectId)),
        onError: (error) => {
            console.error('Error submitting project data:', error);
        }
    }, queryClient);

    useEffect(() => {
        submitMutation.mutate();
    }, [projectId]);


    switch (submitMutation.status) {
        case 'pending':
            return <Preloader/>
        case 'success':
            return <ObjectsManagementView projectsInfoList={submitMutation.data}/>
        case 'error':
            return (
                <p>Данных нет</p>
            )
    }
}

export default Page;