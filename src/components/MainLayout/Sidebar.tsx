import { ChevronDown, ChevronRight, LogOut } from "lucide-react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthProvider } from "../../auth/AuthContext";
import { MENU_ITEMS } from "../../constants/MenuITems";
import { useSidebar } from "../../context/SidebarContext";
import { ModalConfirmarAccion } from "../Modals/ConfirmarAccion";
import { IMenuItems } from "@/interfaces/IMenuITems";

export const Sidebar = () => {
	const navigate = useNavigate()
	const { logout } = useAuthProvider()
	const { sidebarOpen, toggleSidebar } = useSidebar();
	const [openModalConfirmarAccion, setOpenModalConfirmarAccion] = useState(false)
	const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

	const menuItems = MENU_ITEMS;

	const toggleMenu = (menuName: string) => {
		setExpandedMenus(prev =>
			prev.includes(menuName)
				? prev.filter(name => name !== menuName)
				: [...prev, menuName]
		);
	};

	const handleCerrarSesion = () => {
		setOpenModalConfirmarAccion(false);
		logout();
		navigate("/login");
	}

	const handleClickItemMenu = (child: IMenuItems, pathPadre?: string) => {
		if (child.path && pathPadre) {
			const path = pathPadre + "/" + child.path;
			toggleSidebar();
			navigate(path);
		}
		if (child.path && !pathPadre) {
			const path = child.path;
			toggleSidebar();
			navigate(path);
		}
	}

	return (
		<div className="h-screen pt-16 w-64 " hidden={!sidebarOpen}>
			{/* Mobile sidebar overlay */}
			{sidebarOpen && (
				<div className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden" onClick={toggleSidebar} />
			)}

			{/* Sidebar */}
			<aside
				className={`fixed top-0 left-0 z-30 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:static ${sidebarOpen ? "translate-x-0 lg:w-64" : "-translate-x-full lg:w-0"
					}`}
			>
				<div className="flex flex-col h-full w-64">
					{/* Logo/Brand */}
					<div className="flex items-center px-6 py-4 border-b border-gray-200">
						<input type="text" placeholder="Buscar" className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
					</div>

					{/* Navigation */}
					<nav className="flex-1 px-4 py-2 space-y-2">
						{menuItems.map((item) => {
							const Icon = item.icon;
							const isExpanded = expandedMenus.includes(item.name);

							return (
								<div key={item.name}>
									{!item.children ? (
										// Elemento de primer nivel con href (sin submenús)
										<a
											className="flex items-center px-3 py-1 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200 group"
											onClick={() => handleClickItemMenu(item)}
										>
											<Icon className="w-4 h-4 mr-3 text-gray-500 group-hover:text-gray-700" />
											{item.name}
										</a>
									) : (
										// Elemento de primer nivel con submenús
										<>
											<button
												onClick={() => toggleMenu(item.name)}
												className="flex items-center justify-between w-full px-3 py-1 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200 group"
											>
												<div className="flex items-center">
													<Icon className="w-5 h-5 mr-3 text-gray-500 group-hover:text-gray-700" />
													{item.name}
												</div>
												{isExpanded ? (
													<ChevronDown className="w-4 h-4 text-gray-500" />
												) : (
													<ChevronRight className="w-4 h-4 text-gray-500" />
												)}
											</button>
											{/* Submenús */}
											{isExpanded && item.children && (
												<div className="ml-6 mt-2 space-y-2">
													{item.children.map((child) => {
														const ChildIcon = child.icon;
														return (
															<a
																key={child.name}
																className="flex items-center px-3 py-1 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200 group"
																onClick={() => handleClickItemMenu(child, item.path)}
															>
																<ChildIcon className="w-3 h-3 mr-3 text-gray-500 group-hover:text-gray-700" />
																{child.name}
															</a>
														);
													})}
												</div>
											)}
										</>
									)}
								</div>
							);
						})}
					</nav>

					{/* Footer del sidebar */}
					<div className="p-4 border-t border-gray-200 flex justify-between items-center">
						<div className="flex items-center text-sm text-gray-500">
							<div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
							En línea
						</div>
						<button onClick={() => setOpenModalConfirmarAccion(true)} className="flex flex-row items-center text-gray-500 hover:text-gray-700 transition-colors duration-200 justify-self-end">
							<small className="ml-2">Cerrar sesión</small>
							<LogOut className="w-6 h-6 ml-2" />
						</button>
					</div>
				</div>
			</aside>
			{/* <main className="flex-1 transition-all duration-300 h-screen w-screen">
				<Outlet />
			</main> */}
			{openModalConfirmarAccion &&
				<ModalConfirmarAccion
					title="Cerrar sesión"
					description="¿Estás seguro de que quieres cerrar sesión?"
					isOpen={openModalConfirmarAccion}
					onClose={() => setOpenModalConfirmarAccion(false)}
					confirmAction={handleCerrarSesion}
				/>
			}
		</div>
	)
}