import {FC} from "react";
import style from "./BreadcrumbsCustomPath.module.scss";
import cx from "classnames";
import {Link} from "react-router-dom";

interface IBreadcrumbsCustomPathProps {
    title: string | any;
    name?: string;
}

export const BreadcrumbsCustomPath: FC<IBreadcrumbsCustomPathProps> = ({title, name}) => {

    return (
        <ul className={style.breadcrumbsCustomPath}>
            <li className={cx(style.breadcrumbsCustomPath__item, 'fl-bigmug-line-right154')}>
                <Link to={'/'} className={style.breadcrumbsCustomPath__link}>Главная</Link>
            </li>
            {name == 'О нас' &&
				<li className={cx(style.breadcrumbsCustomPath__item, 'fl-bigmug-line-right154')}>
					<Link to={'#'} className={style.breadcrumbsCustomPath__link}>О компании</Link>
				</li>
            }
            <li className={cx(style.breadcrumbsCustomPath__item, 'fl-bigmug-line-right154')}>{title}</li>
        </ul>
    )
}