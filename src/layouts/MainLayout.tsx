import { Outlet } from 'react-router-dom';

const MainLayout = () => {
	return (
		<div>
			<header>
				header
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
};

export default MainLayout;
