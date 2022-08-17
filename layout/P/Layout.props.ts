import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface LayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    children: ReactNode;
}