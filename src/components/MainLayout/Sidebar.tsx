import { Home } from "lucide-react";
import { Outlet } from "react-router-dom";
import { useSidebar } from "../../context/SidebarContext";

export const Sidebar = () => {
    const { sidebarOpen, toggleSidebar } = useSidebar();
    const menuItems = [
        { name: "Dashboard", href: "/", icon: Home },
    ]
    return (
        <div className="flex h-screen pt-16">
            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <div className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden" onClick={toggleSidebar} />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-30 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:static ${
                    sidebarOpen ? "translate-x-0 lg:w-64" : "-translate-x-full lg:w-0"
                } pt-16`} hidden={!sidebarOpen}
            >
                <div className="flex flex-col h-full w-64">
                    {/* Logo/Brand */}
                    <div className="flex items-center px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">MA</span>
                            </div>
                            <span className="ml-2 text-lg font-semibold text-gray-900">Mi App</span>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 px-4 py-6 space-y-2">
                        {menuItems.map((item) => {
                            const Icon = item.icon
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200 group"
                                    onClick={() => {
                                        if (window.innerWidth < 1024) {
                                            toggleSidebar();
                                        }
                                    }}
                                >
                                    <Icon className="w-5 h-5 mr-3 text-gray-500 group-hover:text-gray-700" />
                                    {item.name}
                                </a>
                            )
                        })}
                    </nav>

                    {/* Footer del sidebar */}
                    <div className="p-4 border-t border-gray-200">
                        <div className="flex items-center text-sm text-gray-500">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                            En línea
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main content */}
            <main className="flex-1 transition-all duration-300 min-h-full">
                <Outlet />
            </main>
        </div>
    )
}