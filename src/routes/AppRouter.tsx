// src/router/AppRouter.tsx
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '@/auth/Login';
import MainLayout from '@/layouts/MainLayout';
import { ReactElement } from 'react';
import { MENU_ITEMS } from '@/constants/MenuITems';

interface MenuItem {
	name: string;
	href?: string;
	icon: any;
	component?: () => any;
	children?: MenuItem[];
}

interface AppRouterProps {
	isAuthenticated: boolean;
}

export default function AppRouter({ isAuthenticated }: AppRouterProps) {
	const renderMenuRoutes = (items: MenuItem[]): ReactElement[] => {
		return items.flatMap((item) => {
			const routes: ReactElement[] = [];
			if (item.href && item.component) {
				routes.push(
					<Route key={item.href} path={item.href.slice(1)} element={<item.component />} />
				);
			}
			if (item.children) {
				routes.push(...renderMenuRoutes(item.children));
			}
			return routes;
		});
	};

	return (
		<Routes>
			<Route
				path="/login"
				element={isAuthenticated ? <Navigate to="/home" replace /> : <Login />}
			/>

			{isAuthenticated ? (
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Navigate to="/home" replace />} />
					{renderMenuRoutes(MENU_ITEMS)}
				</Route>
			) : (
				<Route path="*" element={<Navigate to="/login" replace />} />
			)}
		</Routes>
	);
}
