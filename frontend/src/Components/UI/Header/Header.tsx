import {FC, useEffect, useState} from "react";
import {Container} from "../Container/Container.tsx";
import style from './Header.module.scss';
import {HeaderNav} from "../HeaderNav/HeaderNav.tsx";
import {Sandwich} from "../Sandwich/Sandwich.tsx";
import {Link} from "react-router-dom";

import logo from '../../../assets/header/logo.svg';


export const Header: FC = () => {

    const widthWindow = window.innerWidth;
    const [widthWindowSize, setWidthWindowSize] = useState<number>(widthWindow);

    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    const windowWidthSize = () => {
        const width = window.innerWidth;
        setWidthWindowSize(width)
    }

    useEffect(() => {
        window.addEventListener('resize', windowWidthSize)
        return () => {
            window.removeEventListener('resize', windowWidthSize)
        }
    }, [])

    return (
        <header className={style.header}>
            <Container className={style.containerHeader}>
                <Link className={style.header__logoLink} to="/">
                    <img className={style.header__img} src={logo} alt="logo"/>
                </Link>
                <HeaderNav isOpenMenu={isOpenMenu} windowWidth={widthWindowSize}/>
                {widthWindowSize <= 980 && <Sandwich isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>}
            </Container>
        </header>
    )
}