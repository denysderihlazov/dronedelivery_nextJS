import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import { P } from "../../../components";
import cn from 'classnames';

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
    return (
        <div {...props}>
            <P className={cn(className, styles.logo)} size='logo'>Dronex</P>
        </div>
    )
};