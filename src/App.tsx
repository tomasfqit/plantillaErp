import { BrowserRouter } from 'react-router-dom';
import { useAuthProvider } from './auth/useAuth';
import { Providers } from './providers/providers';
import AppRouter from './routes/AppRouter';

const App = () => {
	const auth = useAuthProvider();
	console.log(auth.isAuthenticated);
	return (
		<Providers>
			<BrowserRouter>
				<AppRouter isAuthenticated={auth.isAuthenticated} />
			</BrowserRouter>
		</Providers>
	);
};

export default App;
