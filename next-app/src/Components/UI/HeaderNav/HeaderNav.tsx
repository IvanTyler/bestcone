import {FC, memo, useEffect, useState} from "react";
import style from "./HeaderNav.module.scss";
import { clsx } from 'clsx';
import {useQuery} from "@tanstack/react-query";
import {fetchProjectsList} from "@/Api/ProjectsData";
import {fetchOrganizationsList} from "@/Api/organizationsData";
import {queryClient} from "@/Api/queryClient";
import {HeaderListDropdown} from "@/Components/UI/HeaderListDropdown/HeaderListDropdown";
import Link from "next/link";


interface IStateDropdown {
    projects: boolean,
    organizations: boolean,
}

interface IHeaderNavProps {
    isOpenMenu: boolean,
    windowWidth: number,
    mounted: boolean,
}

export const HeaderNav: FC<IHeaderNavProps> = memo(({isOpenMenu, windowWidth, mounted}) => {

    const postListQuery = useQuery({
        queryFn: fetchProjectsList,
        queryKey: ['projects'],
    }, queryClient);

    const organizationsListQuery = useQuery({
        queryFn: () => fetchOrganizationsList(),
        queryKey: ['organizations'],
    }, queryClient);

    const [isShowDropdown, setIsShowDropdown] = useState<IStateDropdown>({projects: false, organizations: false});
    const [isMaxHeight, setIsMaxHeight] = useState(0);

    const toggleProjectsDropdown =() => {
        setIsShowDropdown((prevState: IStateDropdown) => ({
            ...prevState,
            projects: !prevState.projects,
            organizations: false,
        }));
    }

    const toggleOrganizationsDropdown = () => {
        setIsShowDropdown((prevState: IStateDropdown) => ({
            ...prevState,
            organizations: !prevState.organizations,
            projects: false,
        }));
    }

    useEffect(() => {
        if (isShowDropdown.projects || isShowDropdown.organizations) {
            const handleClickOutside = (event: MouseEvent) => {
                const navElement = document.querySelector(`.${style.headerNav}`);
                if (navElement && !navElement.contains(event.target as Node)) {
                    setIsShowDropdown({ projects: false, organizations: false });
                }
            };

            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);

            };
        }
    }, [isShowDropdown.projects, isShowDropdown.organizations]);


    // const [timeoutProjectsId, setTimeoutProjectsId] = useState<ReturnType<typeof setTimeout> | null>(null);
    // const [timeoutOrganizationsId, setTimeoutOrganizationsId] = useState<ReturnType<typeof setTimeout> | null>(null);

    // const handleMouseEnter = () => {
    //     setIsShowDropdown((prevState: IStateDropdown) => ({
    //         ...prevState,
    //         projects: true,
    //         organizations: false,
    //     }));
    //     if (timeoutProjectsId) {
    //         clearTimeout(timeoutProjectsId);
    //         setTimeoutProjectsId(null);
    //     }
    // }
    //
    // const handleMouseOrganizationsEnter = () => {
    //     setIsShowDropdown((prevState: IStateDropdown) => ({
    //         ...prevState,
    //         organizations: true,
    //         projects: false,
    //     }));
    //     if (timeoutOrganizationsId) {
    //         clearTimeout(timeoutOrganizationsId);
    //         setTimeoutProjectsId(null);
    //     }
    // }
    //
    // const handleMouseLeave = () => {
    //     const projectsID = setTimeout(() => {
    //         setIsShowDropdown((prevState: IStateDropdown) => ({
    //             ...prevState,
    //             projects: false,
    //         }))
    //     }, 1000);
    //     setTimeoutProjectsId(projectsID);
    // }
    //
    // const handleMouseOrganizationsLeave = () => {
    //     const organizationsID = setTimeout(() => {
    //         setIsShowDropdown((prevState: IStateDropdown) => ({
    //             ...prevState,
    //             organizations: false,
    //         }))
    //     }, 1000);
    //     setTimeoutOrganizationsId(organizationsID);
    // }
    //
    // useEffect(() => {
    //     return () => {
    //         if (timeoutProjectsId) {
    //             clearTimeout(timeoutProjectsId);
    //         }
    //         if (timeoutOrganizationsId) {
    //             clearTimeout(timeoutOrganizationsId);
    //         }
    //     }
    // }, [timeoutProjectsId, timeoutOrganizationsId]);


    function showClassMobileMenu() {
        if (mounted && windowWidth <= 980) {
            return isOpenMenu ? style.openMobileMenu : style.closeMobileMenu;
        }
        return '';
    }

    const handleNavMouseLeave = () => {
        setIsShowDropdown({ projects: false, organizations: false });
    };

    return (
        <nav className={clsx(
            style.headerNav,
            showClassMobileMenu()
        )}
             onMouseLeave={handleNavMouseLeave}
        >
            <ul className={style.headerNavList}>
                <li className={style.headerNavList__item}>
                    <Link href={"/"} className={style.headerNavList__link}>Главная</Link>
                </li>
                <li className={style.headerNavList__item}>
                    <Link href={"/about-us"} className={style.headerNavList__link}>О нас </Link>
                </li>
                {postListQuery.status === 'success' &&
					<li className={
                        clsx(style.headerNavList__item, style.showSubMenu)}
						onClick={() => {
                            toggleProjectsDropdown();
                        }}
						style={{maxHeight: isShowDropdown.projects ? isMaxHeight : 44}}
					>
						<button
							  className={
                                  clsx(style.headerNavList__button,
                                      style.showSubMenu,
                                      isShowDropdown.projects && style.showDropdown)
                              }>Проекты</button>
						<HeaderListDropdown
							nameList={'project'}
							maxHeight={setIsMaxHeight}
							projectsList={postListQuery.data}
							isShowDropdown={isShowDropdown.projects}
						/>
					</li>
                }
                {organizationsListQuery.status === 'success' &&
					<li className={
                        clsx(style.headerNavList__item, style.showSubMenu)}
						onClick={() => {
                            toggleOrganizationsDropdown();
                        }}
						style={{maxHeight: isShowDropdown.organizations ? isMaxHeight : 44}}
					>
						<button
							  className={clsx(style.headerNavList__button,
                                  style.showSubMenu,
                                  isShowDropdown.organizations && style.showDropdown)
                              }>Наши организации</button>
						<HeaderListDropdown
							nameList={'organization'}
							maxHeight={setIsMaxHeight}
							projectsList={organizationsListQuery.data}
							isShowDropdown={isShowDropdown.organizations}
						/>
					</li>
                }
                <li className={style.headerNavList__item}>
                    <Link href={"/services"} className={style.headerNavList__link}>Услуги</Link>
                </li>
                <li className={style.headerNavList__item}>
                    <Link href={"contacts"} className={style.headerNavList__link}>Контакты</Link>
                </li>
            </ul>
        </nav>
    );
});