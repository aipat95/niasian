import {useEffect, useState} from "react";
import axios from "axios";
import getBaseURL from "../../utils/baseURL.js";
import Loading from "../../components/Loading.jsx";
import {Link} from "react-router-dom";
import RoomStatus from "./RoomStatus.jsx";

const Dashboard =() => {
    const [loading, setLoading] =useState(true);
    const [data, setData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get(`${getBaseURL()}`,{
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-type': 'application/json',
                    },
                })
                setData(response.data);
                setLoading(false);
            }catch (error){
                console.error('Error',error);
            }
        }

        fetchData();

    }, []);

    if(loading) return <Loading/>

    return (
        <>
            <div className="flex flex-col space-y-1 md:space-y-0 md:flex-row justify-between">
                <div className="mr-6">
                    <h1 className="text-4xl font-semibold mb-2">Overview</h1>
                </div>
                <div className="flex flex-col md:flex-row items-start justify-end -mb-3">
                    <Link to="/dashboard/check-in"
                          className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
                        Check in
                    </Link>
                    <Link to="/dashboard/check-out"
                          className=" inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
                        Check Out
                    </Link>
                </div>
            </div>
            <h2 className="text-gray-600 ml-0.5">Tents Available</h2>
            <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                    <div>
                        <span className="block text-gray-500">S-size tents</span>
                        <span className="block text-2xl font-bold">0/30{data?.totalBooks}</span>
                        <span className="block text-l ">20$/day</span>
                    </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                    <div>
                        <span className="block text-gray-500">M-size tents</span>
                        <span className="block text-2xl font-bold">0/30{data?.totalSales}</span>
                        <span className="block text-l ">20$/day</span>
                    </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                    <div>
                        <span className="block text-gray-500">XL-size tents</span>
                        <span className="inline-block text-2xl font-bold">0/20{data?.trendingBooks}</span>
                        <span className="block text-l ">20$/day</span>
                    </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                    <div>
                        <span className="block text-gray-500">Family-size tents</span>
                        <span className="block text-2xl font-bold">0/20{data?.totalOrders}</span>
                        <span className="block text-l">20$/day</span>
                    </div>
                </div>
            </section>
            <section className="grid md:grid-cols-4 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
                <div className="flex flex-col md:col-span-3 md:row-span-3 bg-white shadow rounded-lg">
                    <div className="px-6 py-5 font-semibold border-b border-gray-100">Room Status</div>
                    <div className="p-4 flex-grow">
                        <RoomStatus/>
                    </div>
                </div>

                <div className="row-span-3 bg-white shadow rounded-lg">
                    <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                        <span>Today Check out</span>

                    </div>
                    <div className="overflow-y-auto" style={{maxHeight: '24rem'}}>
                        <ul className="p-6 space-y-6">
                            <li className="flex items-center">
                                <span className="mr-auto font-semibold">name</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-auto font-semibold">name</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard