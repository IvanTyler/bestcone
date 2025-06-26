import {FC} from "react";
import style from './Container.module.scss';
import cx from 'classnames';

interface IContainerProps {
    children: React.ReactNode,
    className?: string,
}


export const Container: FC<IContainerProps> = ({children, className}) => {
    return (
        <div className={cx(style.container, className)}>
            {children}
        </div>
    )
}