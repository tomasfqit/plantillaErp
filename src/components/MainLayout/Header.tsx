import { Menu } from "lucide-react";
import { useSidebar } from "../../context/SidebarContext";

export const Header = () => {
	const { toggleSidebar } = useSidebar();

	return (
		<header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200">
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-start h-16 gap-4">
					{/* Menu button for both mobile and desktop */}
					<button
						type="button"
						className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
						onClick={toggleSidebar}
					>
						<span className="sr-only">Toggle menú</span>
						<Menu className="h-6 w-6" />
					</button>

					<div className="flex justify-between items-center w-full">
						<div className="relative h-12 w-64">
							<img
								src="/logo_fondo_trans_negro.png"
								alt="Importadora Tomebamba Logo"
								className="object-contain w-full h-full"
							/>
						</div>
						<div className="flex items-center">
							user
						</div>
					</div>


				</div>
			</div>
		</header>
	);
}
