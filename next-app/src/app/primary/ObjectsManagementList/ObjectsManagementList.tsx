'use client'

import {FC} from "react";
import style from './ObjectsManagementList.module.scss'
import {useQuery} from "@tanstack/react-query";
import {fetchProjectsList, ProjectsType} from "@/Api/ProjectsData";
import {OrganizationsType} from "@/Api/organizationsData";
import {queryClient} from "@/Api/queryClient";
import {Preloader} from "@/Components/UI/Preloader/Preloader";
import {List} from "@/Components/List/List";
import {ObjectsManagementListItem} from "@/app/primary/ObjectsManagementListItem/ObjectsManagementListItem";

type listType = ProjectsType | OrganizationsType;

export const ObjectsManagementList: FC = () => {

    const postListQuery = useQuery({
        queryFn: fetchProjectsList,
        queryKey: ['projects'],
    }, queryClient);

    switch (postListQuery.status) {
        case 'pending':
            return <Preloader/>
        case "success":
            return <div className={style.objectsManagementList}>
                <List
                    items={postListQuery.data}
                    renderItem={(item: listType, index: number) => <ObjectsManagementListItem
                        item={item}
                        key={index.toString()}
                    />}
                />
            </div>
        case 'error':
            return (
                <p>Обьектов нет</p>
            )
    }
}