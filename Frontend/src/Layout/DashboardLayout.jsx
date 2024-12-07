import { Link, Outlet, useNavigate } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { MdPeople } from "react-icons/md";
import Logo from "../../components/image/juniper-park.png"

const DashboardLayout = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        navigate("/")
    }


    return (
        <section className="flex md:bg-gray-100 min-h-screen overflow-hidden">
            <aside className="hidden sm:flex sm:flex-col min-w-40">
                <img src={Logo} alt="Logo" className='inline-flex items-center justify-center w-40 h-40' />
                <div className="flex-grow flex flex-col justify-between text-gray-500 ">
                    <nav className="flex flex-col mx-4  my-6 space-y-4">
                        <Link to="/dashboard"
                            className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                            <RiDashboardFill className="h-6 w-6" />
                            <span className="">Dashboard</span>
                        </Link>
                        <Link to="/dashboard/customers"
                            className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                            <MdPeople className="h-6 w-6" />
                            <span className="">Customers</span>
                        </Link>
                        {/*<Link to="/dashboard/inventory"*/}
                        {/*      className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">*/}
                        {/*    <MdInventory className="h-6 w-6"/>*/}
                        {/*    <span className="">Inventory</span>*/}
                        {/*</Link>*/}
                    </nav>
                </div>
            </aside>
            <div className="flex-grow text-gray-800">
                <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
                    <div className="flex flex-shrink-0 items-center ml-auto">
                        <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
                            <span className="sr-only">User Menu</span>
                            <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                            </div>
                        </button>
                        <div>
                            <button
                                onClick={handleLogout}
                                className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                                <span className="sr-only">Log out</span>
                                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>
                <main className="p-6 sm:p-6 space-y-4">
                    <Outlet />
                </main>
            </div>
        </section>
    )
}

export default DashboardLayout