import { SearchProps } from "./Search.props";
import styles from "./Search.module.css";
import cn from 'classnames';
import { Input, Button } from "../";
import { useContext, useState, KeyboardEvent } from "react";
import GlassIcon from './glass.svg';
import axios from 'axios';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {

    return (

        <div className={cn(className, styles.search)} {...props} >
            
        </div >
    )
};

