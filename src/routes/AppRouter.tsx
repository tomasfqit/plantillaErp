// src/router/AppRouter.tsx
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '@/auth/Login';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/home';
import Caja from '@/pages/comercializacion/caja';
import Facturacion from '@/pages/comercializacion/facturacion';

interface AppRouterProps {
	isAuthenticated: boolean;
}

export default function AppRouter({ isAuthenticated }: AppRouterProps) {
	return (<Routes>
		<Route
			path="/login"
			element={isAuthenticated ? <Navigate to="/home" replace /> : <Login />}
		/>
		{isAuthenticated ? (
			<Route path="/" element={<MainLayout />}>
				<Route path="home" element={<Home />} />
				<Route path="comercializacion/caja" element={<Caja />} />
				<Route path="comercializacion/facturacion" element={<Facturacion />} />
			</Route>
		) : (
			<Route path="*" element={<Navigate to="/login" replace />} />
		)}



	</Routes>)
}