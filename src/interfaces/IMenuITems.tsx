import React from "react";

export interface IMenuItems {
    name: string;
    path?: string;
    icon: any;
    component?: React.FC<any>;
    children?: IMenuItems[];
}

