'use client'

import {FC, useEffect, useState} from "react";
import style from './Header.module.scss';

import logo from '../../../assets/header/logo.svg';
import {Container} from "@/Components/UI/Container/Container";
import {HeaderNav} from "@/Components/UI/HeaderNav/HeaderNav";
import {Sandwich} from "@/Components/UI/Sandwich/Sandwich";
import Link from "next/link";

export const Header: FC = () => {

    const [widthWindowSize, setWidthWindowSize] = useState<number>(0);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [isMounted, setIsMounted] = useState(false);


    useEffect(() => {
        // Проверяем, что мы на клиенте
        if (typeof window === 'undefined') return;

        setWidthWindowSize(window.innerWidth);
        setIsMounted(true);

        const windowWidthSize = () => {
            const widthWindow = window.innerWidth;
            setWidthWindowSize(widthWindow)

        }

        window.addEventListener('resize', windowWidthSize)
        return () => {
            window.removeEventListener('resize', windowWidthSize)
        }
    }, [])

    return (
        <header className={style.header}>
            <Container className={style.containerHeader}>
                <Link className={style.header__logoLink} href={"/"}>
                    <img className={style.header__img} src={logo.src} alt="logo"/>
                </Link>
                <HeaderNav isOpenMenu={isOpenMenu} windowWidth={widthWindowSize} mounted={isMounted}/>
                {isMounted && widthWindowSize <= 980 && <Sandwich isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>}
            </Container>
        </header>
    )
}