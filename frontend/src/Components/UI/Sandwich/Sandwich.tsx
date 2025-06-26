import { FC } from "react";
import style from './Sandwich.module.scss';
import cx from "classnames";

interface ISandwichProps {
    isOpenMenu: boolean;
    setIsOpenMenu: (prev: boolean | ((prev: boolean) => boolean)) => void; // Указание на то, что это может быть функция или булево
}

export const Sandwich: FC<ISandwichProps> = ({ isOpenMenu, setIsOpenMenu }) => {
    const toggleMenu = () => setIsOpenMenu(prev => !prev);

    return (
        <div className={cx(style.sandwich)} onClick={toggleMenu}>
            <div className={style.sandwich__wrapper}>
                <span className={cx(style.sandwich__item, isOpenMenu && style.open)}></span>
            </div>
        </div>
    );
};