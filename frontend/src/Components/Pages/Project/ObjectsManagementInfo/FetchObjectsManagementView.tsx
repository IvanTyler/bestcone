import {FC, useEffect} from "react";
import {submitProjectData} from "../../../../Api/ProjectsData.ts";
import {queryClient} from "../../../../Api/queryClient.ts";
import {Preloader} from "../../../UI/Preloader/Preloader.tsx";
import {ObjectsManagementView} from "./ObjectsManagementView.tsx";
import {useParams} from "react-router-dom";
import { useMutation } from "@tanstack/react-query";



export const FetchObjectsManagementView: FC = () => {
    const {objectId} = useParams();

    const submitMutation = useMutation({
        mutationFn: () => submitProjectData(+objectId),
        onError: (error) => {
            console.error('Error submitting project data:', error);
        }
    }, queryClient);

    useEffect(() => {
        submitMutation.mutate();
    }, [objectId]);


    switch (submitMutation.status) {
        case 'pending':
            return <Preloader/>
        case 'success':
            return <ObjectsManagementView projectsInfoList={submitMutation.data} objectId={Number(objectId)}/>
        case 'error':
            return (
                <p>Данных нет</p>
            )
    }
}