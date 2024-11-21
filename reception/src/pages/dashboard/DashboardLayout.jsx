import react, {useEffect, useState} from "react"
import {Link, Outlet, useNavigate} from "react-router-dom";
import {MdOutlineManageHistory} from "react-icons/md";
import {HiViewGridAdd} from "react-icons/hi";

const DashboardLayout =() => {

    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/")
    }


    return (
        <section className="flex md:bg-gray-100 min-h-screen overflow-hidden">
            <aside className="hidden sm:flex sm:flex-col">
                <a href="/dasboard/"
                   className="inline-flex items-center justify-center h-40 w-52 bg-purple-600 hover:bg-purple-500 focus:bg-purple-500">
                    logo
                </a>

                <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
                    <nav className="flex flex-col mx-4  my-6 space-y-4">
                        <Link to="/dashboard"
                              className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                            <span className="">Dashboard</span>
                        </Link>
                        <a href="#"
                           className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                 className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
                            </svg>
                            <span className="">Customers</span>
                        </a>
                        <Link to="/dashboard/inventory"
                              className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                            <HiViewGridAdd className="h-6 w-6"/>
                            <span className="">Inventory</span>
                        </Link>
                        <Link to="/dashboard/edit-customers"
                              className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                            <MdOutlineManageHistory className="h-6 w-6"/>
                            <span className="">Activities</span>
                        </Link>
                    </nav>
                </div>
            </aside>
            <div className="flex-grow text-gray-800">
                <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
                    <div className="flex flex-shrink-0 items-center ml-auto">
                        <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
                            <span className="sr-only">User Menu</span>
                            <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                                <span className="text-sm text-gray-600">Hello,</span>
                                <span className="font-semibold">name</span>
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
                                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>
                <main className="p-6 sm:p-10 space-y-4">
                    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
                        <div className="mr-6">
                            <h1 className="text-4xl font-semibold mb-2">Overview</h1>
                        </div>
                        <div className="flex flex-col md:flex-row items-start justify-end -mb-3">
                            <Link to="/dashboard/check-in"
                                  className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
                                Check in
                            </Link>
                            <Link to="/dashboard/check-out" className=" inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
                                Check Out
                            </Link>
                        </div>
                    </div>
                    <Outlet/>
                </main>
            </div>
        </section>

        /*
        <section className="flex md:bg-gray-100 min-h-screen overflow-hidden">
            <aside className="hidden sm:flex sm:flex-col">
                <a href="#"
                   className="inline-flex items-center justify-center h-20 w-20 bg-purple-600 hover:bg-purple-500 focus:bg-purple-500">
                </a>
                <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
                    <nav className="flex flex-col mx-4 my-6 space-y-4">
                        <a href="#"
                           className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                            <span className="sr-only">Folders</span>
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                 className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
                            </svg>
                        </a>
                        <Link to="#"
                              className="inline-flex items-center justify-center py-3 text-purple-600 bg-white rounded-lg">
                            <span className="sr-only">Dashboard</span>
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                 className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                            </svg>
                        </Link>
                        <Link to="#"
                              className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                            <span className="sr-only">Add Book</span>
                            <HiViewGridAdd className="h-6 w-6"/>
                        </Link>
                        <Link to="#"
                              className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                            <span className="sr-only">Documents</span>
                            <MdOutlineManageHistory className="h-6 w-6"/>
                        </Link>
                    </nav>
                    <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
                        <button
                            className="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                            <span className="sr-only">Settings</span>
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                 className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </aside>
            <div className="flex-grow text-gray-800">
                <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
                    <div className="flex flex-shrink-0 items-center ml-auto">
                        <div className="pl-3 ml-3 space-x-1">
                            <button
                                className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                                <span className="sr-only">Log out</span>
                                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                     className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </header>
            </div>
            <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-secondary'>
                <Outlet/>
            </main>
        </section>*/
    )
}

export default DashboardLayout