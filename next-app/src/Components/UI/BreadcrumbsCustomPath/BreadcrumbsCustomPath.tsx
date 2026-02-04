import {FC} from "react";
import style from "./BreadcrumbsCustomPath.module.scss";
import { clsx } from 'clsx';
import Link from "next/link";

interface IBreadcrumbsCustomPathProps {
    title?: string | any;
    name?: string;
}

export const BreadcrumbsCustomPath: FC<IBreadcrumbsCustomPathProps> = ({title, name}) => {

    return (
        <ul className={style.breadcrumbsCustomPath}>
            <li className={clsx(style.breadcrumbsCustomPath__item, 'fl-bigmug-line-right154')}>
                <Link href={'/'} className={style.breadcrumbsCustomPath__link}>Главная</Link>
            </li>
            {name === 'О нас' || title === 'О компании' &&
				<li className={clsx(style.breadcrumbsCustomPath__item, 'fl-bigmug-line-right154')}>
					<Link href={'#'} className={style.breadcrumbsCustomPath__link}>О компании</Link>
				</li>
            }
            <li className={clsx(style.breadcrumbsCustomPath__item, 'fl-bigmug-line-right154')}>{title}</li>
        </ul>
    )
}