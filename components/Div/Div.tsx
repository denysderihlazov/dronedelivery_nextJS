import { DivProps } from "./Div.props";
import styles from "./Div.module.css";
import cn from 'classnames';


export const Div = ({ children, className, ...props }: DivProps): JSX.Element => {
    return (
        <div
            className={styles.div}
            {...props}
        >
            {children}
        </div>
    )
};