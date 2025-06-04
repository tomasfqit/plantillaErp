import { Header } from '@/components/MainLayout/Header';
import { Sidebar } from '@/components/MainLayout/Sidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<div className="flex flex-col h-screen">
			<Header />
			<div className="flex flex-1 overflow-hidden">
				<Sidebar />
				<main className="flex-1 overflow-y-auto flex flex-col justify-start items-start pt-16">
					<Outlet />
				</main>

			</div>
		</div>
	);
};

export default MainLayout;
