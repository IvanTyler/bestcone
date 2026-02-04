import {FC, memo, useEffect, useRef} from "react";
import style from "./HeaderListDropdown.module.scss";
import { clsx } from 'clsx';
import {ProjectsType} from "@/Api/ProjectsData";
import {OrganizationsType} from "@/Api/organizationsData";
import Link from "next/link";

type listType = ProjectsType | OrganizationsType

interface IDropdownProps {
    projectsList: listType[],
    isShowDropdown?: boolean,
    maxHeight?: (item: number) => void,
    nameList: string,
}

export const HeaderListDropdown: FC<IDropdownProps> = memo((
    {
        projectsList,
        isShowDropdown,
        maxHeight,
        nameList
    }) => {

    const elementRef = useRef<any>(null);

    useEffect(() => {
        if (elementRef.current) {
            const heightDropdown = Math.floor(elementRef.current.getBoundingClientRect().height);
            if (maxHeight) {
                isShowDropdown && maxHeight(heightDropdown + 52)
            }

        }
    }, [isShowDropdown]);

    const isNameFunc = () => {
        switch (nameList) {
            case 'project':
                return 'project';
            case 'organization':
                return 'organization';
        }
    }

    const isNameList = isNameFunc();


    return (
        <ul ref={elementRef} className={
            isShowDropdown ?
                clsx(style.headerListDropdown, style.show) :
                clsx(style.headerListDropdown)

        }>
            {
                projectsList.map((project: listType) => {
                    return (
                        <li key={project.id.toString()} className={style.headerListDropdown__item}>
                            <Link href={`/${isNameList}/${project.id}`}
                                  className={style.headerListDropdown__link}>{project.title}</Link>
                        </li>
                    )
                })

            }
        </ul>
    );
});