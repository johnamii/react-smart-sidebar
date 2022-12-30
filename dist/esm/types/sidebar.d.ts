import React from 'react';
import './sidebar.css';
export interface DividerProps {
    background?: string;
}
export declare const Divider: (props: DividerProps) => JSX.Element;
export interface TabProps {
    name: string;
    img: string;
    url?: string;
    onClick?: any;
    accent?: string;
    background?: string;
    ext: boolean;
}
export declare const Tab: (props: TabProps) => JSX.Element;
export interface GroupProps {
    name: string;
    accent?: string;
    borderVisible?: boolean;
    ext: boolean;
    children?: React.ReactNode;
}
export declare const Group: (props: GroupProps) => JSX.Element;
export interface SideBarProps {
    background?: string;
    size?: string;
    children?: React.ReactNode;
}
export declare const SideBar: (props: SideBarProps) => JSX.Element;
