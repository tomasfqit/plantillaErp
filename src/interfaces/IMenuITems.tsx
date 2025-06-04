import React from "react";

export interface IMenuItems {
    name: string;
    path?: string;
    icon: any;
    component?: () => React.ReactNode;
    children?: IMenuItems[];
}

