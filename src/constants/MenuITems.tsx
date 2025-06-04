// src/constants/MenuItems.tsx
import { Box, DollarSign, Home } from "lucide-react";
import Caja from "@/pages/comercializacion/caja";
import Facturacion from "@/pages/comercializacion/facturacion";
import HomePage from "@/pages/home";
import { IMenuItems } from "@/interfaces/IMenuITems";



export const MENU_ITEMS: IMenuItems[] = [
	{
		name: 'Inicio',
		href: '/home',
		icon: Home,
		component: HomePage,
	},
	{
		name: 'Comercialización',
		icon: DollarSign,
		children: [
			{ name: 'Caja', href: '/comercializacion/caja', icon: Box, component: Caja },
			{ name: 'Ventas', href: '/comercializacion/facturacion', icon: DollarSign, component: Facturacion },
		]
	}
];
