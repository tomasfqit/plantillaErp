import { BrowserRouter } from 'react-router-dom';
import { Providers } from './providers/providers';
import { Toaster } from 'sonner';
import AppRouter from './routes/AppRouter';
import { useAuthProvider } from './auth/AuthContext';
import { SidebarProvider } from './context/SidebarContext';

function AppRouterWrapper() {
	const { isAuthenticated } = useAuthProvider();
	return <AppRouter isAuthenticated={isAuthenticated} />;
}

const App = () => {
	return (
		<Providers>
			<BrowserRouter>
				<SidebarProvider>
					<Toaster position="top-right" />
					<AppRouterWrapper />
				</SidebarProvider>
			</BrowserRouter>
		</Providers>
	);
};

export default App;
