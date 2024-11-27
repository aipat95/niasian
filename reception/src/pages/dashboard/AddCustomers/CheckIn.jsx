import React from "react";
import InputField from "./InputField.jsx";
import SelectField from "./SelectField.jsx";
import { useForm } from 'react-hook-form';
import {useAddCustomerMutation} from "../../../redux/CustomerAPI.js";
import Swal from 'sweetalert2';

const CheckIn = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [addCustomer, {isLoading, isError}] = useAddCustomerMutation()
    const onSubmit = async (data) => {

        const newCustomerData = {
            ...data,
        }
        try {
            //await fetch(addCustomer(newCustomerData).unwrap());
            await addCustomer(newCustomerData).unwrap();
            Swal.fire({
                title: "Check in",
                icon: "success",
                //showCancelButton: true,
                confirmButtonColor: "#3085d6",
                //cancelButtonColor: "#d33",
                confirmButtonText: "Done"
            });
            reset();
        } catch (error) {
            console.error(error);
            alert("Failed to check in. Please try again.")
        }

    }

    // const handleFileChange = (e) => {
    //     const file = e.target.files[0];
    // }
    return (
        <div className="max-w-lg   mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Check In</h2>

            {/* Form starts here */}
            <form onSubmit={handleSubmit(onSubmit)} className=''>
                {/* Reusable Input Field for name */}
                <InputField
                    label="Name"
                    name="name"
                    //placeholder="Enter name"
                    register={register}
                />

                <InputField
                    label="ID / Passport Number"
                    name="id_number"
                    type="textarea"
                    register={register}

                />

                {/* Trending Checkbox */}

                {/*<div className="mb-4">
                    <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            {...register('trending')}
                            className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm font-semibold text-gray-700">Rental</span>
                    </label>
                </div>*/}

                {/* Reusable Select Field for Category */}
                {/*<SelectField*/}
                {/*    label="Tent"*/}
                {/*    name="tent"*/}
                {/*    options={[*/}
                {/*        {value: 'no-rent', label: 'none'},*/}
                {/*        {value: 'sizeS', label: 'size S (1 adult)'},*/}
                {/*        {value: 'sizeM', label: 'size M (2 adults)'},*/}
                {/*        {value: 'sizeXL', label: 'size XL (4 adults)'},*/}
                {/*        {value: 'sizeFamily', label: 'Family (2 adults, 1-2 children)'}*/}
                {/*    ]}*/}
                {/*    register={register}*/}
                {/*/>*/}


                {/*<div className='grid md:grid-cols-2 xl:grid-cols-2 xl:grid-rows-1 xl:grid-flow-col gap-x-2'>*/}
                {/*    <InputField*/}
                {/*        label="Sleeping Bag"*/}
                {/*        name="pillow"*/}
                {/*        type="number"*/}
                {/*        register={register}*/}

                {/*    />*/}
                {/*    <InputField*/}
                {/*        label="Camping Stove"*/}
                {/*        name="blanket"*/}
                {/*        type="number"*/}
                {/*        register={register}*/}

                {/*    />*/}

                {/*</div>*/}

                {/*<InputField*/}
                {/*    label="Check-In date"*/}
                {/*    name="checkindate"*/}
                {/*    type="date"*/}
                {/*    register={register}*/}

                {/*/>*/}

                {/*<InputField*/}
                {/*    label="Check-Out Date"*/}
                {/*    name="checkoutdate"*/}
                {/*    type="date"*/}
                {/*    register={register}*/}

                {/*/>*/}

                {/* Submit Button */}
                <button type="submit" className="w-full py-2 bg-green-500 text-white font-bold rounded-md">
                    {
                        isLoading ? <span className="">Adding.. </span> : <span>Submit</span>
                    }
                </button>
            </form>
        </div>
    )
}

export default CheckIn