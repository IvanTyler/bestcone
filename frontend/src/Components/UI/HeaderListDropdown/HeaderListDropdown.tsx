import {FC, useEffect, useRef} from "react";
import style from "./HeaderListDropdown.module.scss";
import {ProjectsType} from "../../../Api/ProjectsData.ts";
import cx from "classnames";
import {Link} from "react-router-dom";
import {OrganizationsType} from "../../../Api/organizationsData.ts";

type listType = ProjectsType | OrganizationsType

interface IDropdownProps {
    projectsList: listType[],
    isShowDropdown?: boolean,
    maxHeight?: (item: number) => void,
    nameList: string,
}

export const HeaderListDropdown: FC<IDropdownProps> = (
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
            case 'projects':
                return 'objects';
            case 'organizations':
                return 'organizations';
        }
    }

    const isNameList = isNameFunc();


    return (
        <ul ref={elementRef} className={
            isShowDropdown ?
                cx(style.headerListDropdown, style.show) :
                cx(style.headerListDropdown)

        }>
            {
                projectsList.map((project: listType) => {
                    return (
                        <li key={project.id.toString()} className={style.headerListDropdown__item}>
                            <Link to={`/${isNameList}/${project.id}`}
                                  className={style.headerListDropdown__link}>{project.title}</Link>
                        </li>
                    )
                })

            }
        </ul>
    );
}