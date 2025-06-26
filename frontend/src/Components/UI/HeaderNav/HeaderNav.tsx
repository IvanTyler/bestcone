import {FC, useState} from "react";
import style from "./HeaderNav.module.scss";
import cx from 'classnames';
import {HeaderListDropdown} from "../HeaderListDropdown/HeaderListDropdown.tsx";
import {Link} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {fetchProjectsList} from "../../../Api/ProjectsData.ts";
import {queryClient} from "../../../Api/queryClient.ts";
import {fetchOrganizationsList} from "../../../Api/organizationsData.ts";


interface IStateDropdown {
    projects: boolean,
    organizations: boolean,
}

interface IHeaderNavProps {
    isOpenMenu: boolean,
    windowWidth: number,
}

export const HeaderNav: FC<IHeaderNavProps> = ({isOpenMenu, windowWidth}) => {

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

    const toggleProjectsDropdown = () => {
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

    if (isShowDropdown.projects || isShowDropdown.organizations) {
        document.addEventListener('mouseover', () => setIsShowDropdown((prevState: IStateDropdown) => ({
            ...prevState,
            projects: false,
            organizations: false,
        })))
    }


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
        if (windowWidth <= 980) {
            return isOpenMenu ? style.openMobileMenu : style.closeMobileMenu;
        }
        return '';
    }

    return (
        <nav className={cx(
            style.headerNav,
            showClassMobileMenu()
        )}
             onMouseOver={(e) => e.stopPropagation()}
        >
            <ul className={style.headerNavList}>
                <li className={style.headerNavList__item}>
                    <Link to="/" className={style.headerNavList__link}>Главная</Link>
                </li>
                <li className={style.headerNavList__item}>
                    <Link to="/about-us" className={style.headerNavList__link}>О нас</Link>
                </li>
                {postListQuery.status === 'success' &&
					<li className={
                        cx(style.headerNavList__item, style.showSubMenu)}
						onClick={() => {
                            toggleProjectsDropdown();
                        }}
						style={{maxHeight: isShowDropdown.projects ? isMaxHeight : 44}}
					>
						<button
							  className={
                                  cx(style.headerNavList__button,
                                      style.showSubMenu,
                                      isShowDropdown.projects && style.showDropdown)
                              }>Проекты</button>
						<HeaderListDropdown
							nameList={'projects'}
							maxHeight={setIsMaxHeight}
							projectsList={postListQuery.data}
							isShowDropdown={isShowDropdown.projects}
						/>
					</li>
                }
                {organizationsListQuery.status === 'success' &&
					<li className={
                        cx(style.headerNavList__item, style.showSubMenu)}
						onClick={() => {
                            toggleOrganizationsDropdown();
                        }}
						style={{maxHeight: isShowDropdown.organizations ? isMaxHeight : 44}}
					>
						<button
							  className={cx(style.headerNavList__button,
                                  style.showSubMenu,
                                  isShowDropdown.organizations && style.showDropdown)
                              }>Наши организации</button>
						<HeaderListDropdown
							nameList={'organizations'}
							maxHeight={setIsMaxHeight}
							projectsList={organizationsListQuery.data}
							isShowDropdown={isShowDropdown.organizations}
						/>
					</li>
                }
                <li className={style.headerNavList__item}>
                    <Link to="/services" className={style.headerNavList__link}>Услуги</Link>
                </li>
                <li className={style.headerNavList__item}>
                    <Link to="contacts" className={style.headerNavList__link}>Контакты</Link>
                </li>
            </ul>
        </nav>
    );
}