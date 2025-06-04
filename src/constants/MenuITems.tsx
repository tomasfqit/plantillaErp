// src/constants/MenuItems.tsx
import { Box, DollarSign, Home } from "lucide-react";
import Caja from "@/pages/comercializacion/caja";
import Facturacion from "@/pages/comercializacion/facturacion";
import HomePage from "@/pages/home";
import { IMenuItems } from "@/interfaces/IMenuITems";



export const MENU_ITEMS: IMenuItems[] = [
	{
		name: 'Inicio',
		path: 'home',
		icon: Home,
		component: HomePage,
	},
	{
		name: 'Comercialización',
		path: 'comercializacion',
		icon: DollarSign,
		children: [
			{ name: 'Caja', path: 'caja', icon: Box, component: Caja },
			{ name: 'Facturación', path: 'facturacion', icon: DollarSign, component: Facturacion },
		]
	}
];
