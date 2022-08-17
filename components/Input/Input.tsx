
import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import cn from 'classnames'
import { Button } from "../Button/Button";



export const Input = ({ className, ...props }: InputProps): JSX.Element => {
    return (
        <div className={cn(className, styles.custom)}>
            <input placeholder="Enter your tracking number" className={cn(className, styles.input)} {...props} ></input>
            <Button className={cn(className, styles.button)} appearance="primary">Track</Button>
        </div>
    );
};
