import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface DivProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children: ReactNode;
}