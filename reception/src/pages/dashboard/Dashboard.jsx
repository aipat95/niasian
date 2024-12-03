import {useEffect, useState} from "react";
import axios from "axios";
import getBaseURL from "../../utils/baseURL.js";
import Loading from "../../components/Loading.jsx";
import {Link} from "react-router-dom";
import RoomStatus from "./RoomStatus.jsx";


const Dashboard =() => {
    // const [loading, setLoading] =useState(true);
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try{
    //             const response = await axios.get(`${getBaseURL()}`,{
    //                 headers: {
    //                     //'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //                     'Content-type': 'application/json',
    //                 },
    //             })
    //             setData(response.data);
    //             setLoading(false);
    //         }catch (error){
    //             console.error('Error',error);
    //         }
    //     }
    //
    //     fetchData();
    //
    // }, []);
    //
    // if(loading) return <Loading/>

    return (
        <>
            <div className="flex flex-col space-y-1 md:space-y-0 md:flex-row justify-between">
                <div className="mr-6">
                    <h1 className="text-4xl font-semibold mb-2">Overview</h1>
                </div>
                <div className="flex flex-col md:flex-row items-start justify-end -mb-3">
                    <Link to="/dashboard/test"
                          className="inline-flex px-5 py-3 text-green-800 hover:text-green-800 focus:text-green-500 hover:bg-green-600 focus:bg-green-100 border border-green-800 rounded-md mb-3">
                        Check in
                    </Link>
                    <Link to="/dashboard/test"
                          className=" inline-flex px-5 py-3 text-white bg-green-800 hover:bg-green-600 focus:bg-green-700 rounded-md ml-6 mb-3">
                        Check Out
                    </Link>
                </div>
            </div>
            <h2 className="text-gray-600 ml-0.5">Tents Status</h2>
            <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                    <div>
                        <span className="block text-gray-500">S-size tents</span>
                        <span className="block text-2xl font-bold">0/30(need data of the taken/total)</span>
                        <span className="block text-l ">20 (data of the price) $/day</span>
                    </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                    <div>
                        <span className="block text-gray-500">M-size tents</span>
                        <span className="block text-2xl font-bold">0/30</span>
                        {/*{data?.totalSales}*/}
                        <span className="block text-l ">20$/day</span>
                    </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                    <div>
                        <span className="block text-gray-500">XL-size tents</span>
                        <span className="inline-block text-2xl font-bold">0/20</span>
                        <span className="block text-l ">20$/day</span>
                    </div>
                </div>
                <div className="flex items-center p-8 bg-white shadow rounded-lg">
                    <div>
                        <span className="block text-gray-500">Family-size tents</span>
                        <span className="block text-2xl font-bold">0/20</span>
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
                        <ul className="px-6 py-2 space-y-1">
                            <li className="flex items-center">
                                <span className="mr-auto ">list of ppl need to check out</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-auto ">name</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard