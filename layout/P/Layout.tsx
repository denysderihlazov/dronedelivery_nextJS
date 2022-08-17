import { LayoutProps } from "./Layout.props";
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer';
import styles from "./Layout.module.css";
import cn from 'classnames';
import React, {FunctionComponent} from "react";

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <div className={styles.body}>
                {children}
            </div>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>> (Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}
