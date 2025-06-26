import {FC} from "react";
import {List} from "../../../List/List.tsx";
import {fetchProjectsList, ProjectsType} from "../../../../Api/ProjectsData.ts";
import {ObjectsManagementListItem} from "../ObjectsManagementListItem/ObjectsManagementListItem.tsx";
import {OrganizationsType} from "../../../../Api/organizationsData.ts";
import style from './ObjectsManagementList.module.scss'
import {useQuery} from "@tanstack/react-query";
import {Preloader} from "../../../UI/Preloader/Preloader.tsx";
import {queryClient} from "../../../../Api/queryClient.ts";

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