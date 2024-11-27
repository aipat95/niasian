import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form"
import { Link, useNavigate } from 'react-router-dom';
import Swal from'sweetalert2';
import {useAddCustomerMutation} from "../../redux/CustomerAPI.js";

const Activities = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const [createOrder, {isLoading, error}] = useAddCustomerMutation()
    const navigate =  useNavigate()

    const [isChecked, setIsChecked] = useState(false)
    const onSubmit = async (data) => {

        const newOrder = {
            name: data.name,
            id_number: data.id_number,

            }
        }


    if(isLoading) return <div>Loading....</div>
    return ( 0
        // <section>
        //     <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        //         <div className="container max-w-screen-lg mx-auto">
        //             <div>
        //                 <div>
        //                     <h2 className="font-semibold text-xl text-gray-600 mb-2">h</h2>
        //                     {/*<p className="text-gray-500 mb-2">Total Price: ${totalPrice}</p>*/}
        //                     {/*<p className="text-gray-500 mb-6">Items: {cartItems.length > 0 ? cartItems.length : 0}</p>*/}
        //                 </div>
        //
        //
        //                 <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
        //                     <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8">
        //                         <div className="text-gray-600">
        //                             <p className="font-medium text-lg">Personal Details</p>
        //                             <p>Please fill out all the fields.</p>
        //                         </div>
        //
        //                         <div className="lg:col-span-2">
        //                             <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
        //                                 <div className="md:col-span-5">
        //                                     <label htmlFor="full_name">Full Name</label>
        //                                     <input
        //                                         {...register("name", { required: true })}
        //                                         type="text" name="name" id="name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
        //                                 </div>
        //
        //
        //                                 <div className="md:col-span-3">
        //                                     <label htmlFor="address">Address / Street</label>
        //                                     <input
        //                                         {...register("address", { required: true })}
        //                                         type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
        //                                 </div>
        //
        //                                 <div className="md:col-span-2">
        //                                     <label htmlFor="city">City</label>
        //                                     <input
        //                                         {...register("city", { required: true })}
        //                                         type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
        //                                 </div>
        //
        //                                 <div className="md:col-span-2">
        //                                     <label htmlFor="country">Country / region</label>
        //                                     <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
        //                                         <input
        //                                             {...register("country", { required: true })}
        //                                             name="country" id="country" placeholder="Country" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
        //                                         <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
        //                                             <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //                                                 <line x1="18" y1="6" x2="6" y2="18"></line>
        //                                                 <line x1="6" y1="6" x2="18" y2="18"></line>
        //                                             </svg>
        //                                         </button>
        //                                         <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
        //                                             <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
        //                                         </button>
        //                                     </div>
        //                                 </div>
        //
        //                                 <div className="md:col-span-2">
        //                                     <label htmlFor="state">State / province</label>
        //                                     <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
        //                                         <input
        //                                             {...register("state", { required: true })}
        //                                             name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
        //                                         <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
        //                                             <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        //                                                 <line x1="18" y1="6" x2="6" y2="18"></line>
        //                                                 <line x1="6" y1="6" x2="18" y2="18"></line>
        //                                             </svg>
        //                                         </button>
        //                                         <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
        //                                             <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
        //                                         </button>
        //                                     </div>
        //                                 </div>
        //
        //
        //
        //
        //
        //
        //                             </div>
        //                         </div>
        //                     </form>
        //                 </div>
        //
        //
        //
        //             </div>
        //
        //
        //         </div>
        //     </div>
        // </section>
        )
    }


export default Activities