// src/router/AppRouter.tsx
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '@/auth/Login';
import MainLayout from '@/layouts/MainLayout';
import { ReactElement, useMemo } from 'react';
import Home from '@/pages/home';
import { MENU_ITEMS } from '@/constants/MenuITems';
import Caja from '@/pages/comercializacion/caja';
import Facturacion from '@/pages/comercializacion/facturacion';

interface AppRouterProps {
	isAuthenticated: boolean;
}

export default function AppRouter({ isAuthenticated }: AppRouterProps) {
	return (<Routes>
		<Route path="/" element={<MainLayout />}>
			<Route path="home" element={<Home />} />
			<Route path="comercializacion/caja" element={<Caja />} />
			<Route path="comercializacion/facturacion" element={<Facturacion />} />
		</Route>
	</Routes>)
	// const renderMenuRoutes = useMemo(() => {
	// 	return MENU_ITEMS.flatMap((item) => {
	// 		const routes: ReactElement[] = [];
	// 		if (item.href && item.component) {
	// 			routes.push(
	// 				<Route key={item.href} path={item.href.slice(1)} element={<item.component />} />
	// 			);
	// 		}
	// 		return routes;
	// 	});
	// }, []);

	// return (
	// 	<Routes>
	// 		<Route
	// 			path="/login"
	// 			element={isAuthenticated ? <Navigate to="/home" replace /> : <Login />}
	// 		/>

	// 		{isAuthenticated ? (
	// 			<Route path="/" element={<MainLayout />}>
	// 				{renderMenuRoutes}
	// 				<Route index element={<Navigate to="/home" replace />} />
	// 			</Route>
	// 		) : (
	// 			<Route path="*" element={<Navigate to="/login" replace />} />
	// 		)}
	// 	</Routes>
	// );
}
