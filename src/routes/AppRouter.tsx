import { Navigate, Route, Routes } from 'react-router-dom';
import Login from '../auth/Login';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/home';

interface AppRouterProps {
	isAuthenticated: boolean;
}

export default function AppRouter({ isAuthenticated }: AppRouterProps) {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />

			{isAuthenticated ? (
				<Route element={<MainLayout />}>
					<Route path="/" element={<Home />} />
				</Route>
			) : (
				<Route path="*" element={<Navigate to="/login" replace />} />
			)}
		</Routes>
	);
}
