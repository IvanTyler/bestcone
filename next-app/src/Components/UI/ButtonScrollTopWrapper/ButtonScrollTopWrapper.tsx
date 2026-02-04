'use client'

import {FC, useEffect, useState} from "react";
import {ButtonScrollTop} from "@/Components/UI/ButtonScrollTop/ButtonScrollTop";

export const ButtonScrollTopWrapper: FC = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            setShowButton(scrollTop >= 500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <ButtonScrollTop isActive={showButton ? 'active' : ''} />;
};