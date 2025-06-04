import { useState } from 'react';

type AuthContextType = {
	isAuthenticated: boolean;
	login: (cb: () => void) => void;
	logout: (cb: () => void) => void;
};

export function useAuthProvider(): AuthContextType {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
		// Recupera estado del localStorage
		return localStorage.getItem('auth') === 'true';
	});

	const login = (cb: () => void) => {
		localStorage.setItem('auth', 'true');
		setIsAuthenticated(true);
		cb();
	};

	const logout = (cb: () => void) => {
		localStorage.removeItem('auth');
		setIsAuthenticated(false);
		cb();
	};

	return { isAuthenticated, login, logout };
}
