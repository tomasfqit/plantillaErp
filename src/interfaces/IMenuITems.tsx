import React from "react";

export interface IMenuItems {
    name: string;
    href?: string;
    icon: any;
    component?: () => React.ReactNode;
    children?: IMenuItems[];
}

