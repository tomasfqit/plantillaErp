import { AuthProvider } from '@/auth/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			staleTime: 5 * 60 * 1000,
		},
	},
});

interface Props {
	children: ReactNode;
}

export const Providers = ({ children }: Props) => {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				{children}
			</AuthProvider>
		</QueryClientProvider>
	);
};
