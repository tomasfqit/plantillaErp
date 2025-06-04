import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../auth/Login';
import { MENU_ITEMS } from '../constants/MenuITems';
import MainLayout from '../layouts/MainLayout';

interface AppRouterProps {
	isAuthenticated: boolean;
}

export default function AppRouter({ isAuthenticated }: AppRouterProps) {
	return (
		<Routes>
			{/* Redirige si ya está autenticado */}
			<Route
				path="/login"
				element={
					isAuthenticated ? <Navigate to="/home" replace /> : <Login />
				}
			/>

			{isAuthenticated ? (
				<Route element={<MainLayout />}>
					{MENU_ITEMS.map((item) => (
						<Route key={item.name} path={item.href} element={item.component} />
					))}
				</Route>
			) : (
				// Redirige cualquier ruta no autorizada al login
				<Route path="*" element={<Navigate to="/login" replace />} />
			)}
		</Routes>
	);
}
