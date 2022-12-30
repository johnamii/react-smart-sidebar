import React from 'react';

interface DividerProps {
    background?: string;
}
declare const Divider: (props: DividerProps) => JSX.Element;
interface TabProps {
    name: string;
    img: string;
    url?: string;
    onClick?: any;
    accent?: string;
    background?: string;
    ext: boolean;
}
declare const Tab: (props: TabProps) => JSX.Element;
interface GroupProps {
    name: string;
    accent?: string;
    borderVisible?: boolean;
    ext: boolean;
    children?: React.ReactNode;
}
declare const Group: (props: GroupProps) => JSX.Element;
interface SideBarProps {
    background?: string;
    size?: string;
    children?: React.ReactNode;
}
declare const SideBar: (props: SideBarProps) => JSX.Element;

export { Divider, DividerProps, Group, GroupProps, SideBar, SideBarProps, Tab, TabProps };
