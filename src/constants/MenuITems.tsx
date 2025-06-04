import { Box, DollarSign, Home } from "lucide-react";
import Caja from "../pages/comercializacion/caja";
import Facturacion from "../pages/comercializacion/facturacion";

export const MENU_ITEMS = [
	{
		name: 'Dashboard',
		href: '/home',
		icon: Home,
		component: <Home />
	},
	{
		name: 'Comercialización',
		icon: DollarSign,
		children: [
			{ name: 'Caja', href: '/comercializacion/caja', icon: Box, component: <Caja /> },
			{ name: 'Ventas', href: '/comercializacion/facturacion', icon: DollarSign, component: <Facturacion /> },
		]
	}
]
