import {FC} from "react";
import style from './Wrapper.module.scss';
import cx from 'classnames';

interface IWrapperProps {
    children: React.ReactNode,
}


export const Wrapper: FC<IWrapperProps> = ({children}) => {
    return (
        <div className={cx(style.wrapper)}>
            {children}
        </div>
    )
}