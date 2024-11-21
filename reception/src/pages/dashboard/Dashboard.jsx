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
            <h2 className="text-gray-600 ml-0.5">Tents Available</h2>
            <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                    <div>
                        <span className="block text-gray-500">S tents</span>
                        <span className="block text-2xl font-bold">{data?.totalBooks}</span>
                        <span className="block text-2xl ">20$/day</span>
                    </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                    <div>
                        <span className="block text-2xl font-bold">${data?.totalSales}</span>
                        <span className="block text-gray-500">Total Sales</span>
                    </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                    <div>
                        <span className="inline-block text-2xl font-bold">{data?.trendingBooks}</span>
                        <span className="inline-block text-xl text-gray-500 font-semibold">(13%)</span>
                        <span className="block text-gray-500">Trending Books in This Month</span>
                    </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                    <div>
                        <span className="block text-2xl font-bold">{data?.totalOrders}</span>
                        <span className="block text-gray-500">Total Orders</span>
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
                                <span className="mr-auto font-semibold">9.3</span>
                            </li>
                            <li className="flex items-center">
                                <span className="ml-auto font-semibold">8.9</span>
                            </li>
                            <li className="flex items-center">
                                <span className="ml-auto font-semibold">8.7</span>
                            </li>
                            <li className="flex items-center">
                                <span className="ml-auto font-semibold">8.2</span>
                            </li>
                            <li className="flex items-center">
                                <span className="ml-auto font-semibold">8.2</span>
                            </li>
                            <li className="flex items-center">
                                <span className="ml-auto font-semibold">8.1</span>
                            </li>
                            <li className="flex items-center">
                                <span className="ml-auto font-semibold">7.9</span>
                            </li>
                            <li className="flex items-center">
                                <span className="ml-auto font-semibold">7.7</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard