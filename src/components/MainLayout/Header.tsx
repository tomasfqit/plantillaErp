import { Menu } from "lucide-react"
import { useSidebar } from "../../context/SidebarContext"

export const Header = () => {
    const { toggleSidebar } = useSidebar();

    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Menu button for both mobile and desktop */}
                    <button
                        type="button"
                        className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        onClick={toggleSidebar}
                    >
                        <span className="sr-only">Toggle menú</span>
                        <Menu className="h-6 w-6" />
                    </button>

                    {/* Logo - Solo visible en mobile */}
                    <div className="lg:hidden flex items-center">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">MA</span>
                            </div>
                        </div>
                    </div>

                    {/* Right section */}
                    <div className="flex items-center">
                        {/* Add your header right content here */}
                    </div>
                </div>
            </div>
        </header>
    );
}
