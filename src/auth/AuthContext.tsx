import { createContext, useContext, useState, useEffect } from 'react';
import { IUserLogin } from '@/interfaces/IAuth';

type AuthContextType = {
	isAuthenticated: boolean;
	login: (userLogin: IUserLogin) => void;
	logout: () => void;
	user: IUserLogin | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<IUserLogin | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const storedUser = localStorage.getItem('userLogin');
		if (storedUser) {
			setUser(JSON.parse(storedUser));
			setIsAuthenticated(true);
		}
	}, []);

	const login = (userLogin: IUserLogin) => {
		localStorage.setItem('userLogin', JSON.stringify(userLogin));
		setUser(userLogin);
		setIsAuthenticated(true);
	};

	const logout = () => {
		localStorage.removeItem('userLogin');
		setUser(null);
		setIsAuthenticated(false);
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthProvider = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuthProvider must be used within an AuthProvider');
	}
	return context;
};
