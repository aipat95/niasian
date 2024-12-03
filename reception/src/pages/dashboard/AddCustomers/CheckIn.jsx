import React, {useEffect, useState} from "react";
import InputField from "./InputField.jsx";
import SelectField from "./SelectField.jsx";
import { useForm } from 'react-hook-form';
import {useAddCustomerMutation} from "../../../redux/CustomerAPI.js";
import Swal from 'sweetalert2';
import {Button} from "@mui/material";
import customerService from "../../../redux/customerNApi.js";

const CheckIn = () => {
    const [customer, setCustomer] = useState([]);
    const [passportNumber, setPassportNumber] = useState();
    const [name, setName] = useState("");
    const [checkInDate, setCheckInDate] = useState();
    const [checkOutDate, setCheckOutDate] = useState();
    const [campsiteFees, setCampsiteFees] = useState();
    const [carParkFees, setCarParkFees] = useState();
    const [equipmentRented, setEquipmentRented] = useState();
    const [additionalServices, setAdditionalServices] = useState();
    const [showForm, setShowForm] = useState(false); //toggle add Tent



    // Fetch all employees when the component mounts
    useEffect(() => {
        const loadCustomer = async () => {
            try {
                const data = await customerService.getCustomers();
                setCustomer(data);
                localStorage.setItem("customerData", JSON.stringify(data));
            } catch (error) {
                console.log(error);
                const cachedData = localStorage.getItem("customerData");
                if (cachedData) {
                    setCustomer(JSON.parse(cachedData));
                } else {
                    setCustomer([]);
                    console.log(error);
                }
            }
        };
        loadCustomer();
    }, []);

    const handleAddCustomer = async (e) => {
        e.preventDefault();
        const newCustomer = {
            passportNumber,
            name,
            checkInDate,
            checkOutDate,
            campsiteFees,
            carParkFees,
            equipmentRented,
            additionalServices
        };
        try {
            const data = await customerService.addCustomer(newCustomer);
            const updateCustomer =  [...customer, data]
            setCustomer(updateCustomer);
            localStorage.setItem("customerData", JSON.stringify(updateCustomer));
            resetForm();
        } catch (error) {
            console.log(error);
            const data = [...customer, newCustomer];
            setCustomer(data);
            localStorage.setItem("customerData", JSON.stringify(data));
            resetForm();
        }

    }

    const resetForm = () => {
        setPassportNumber("");
        setName("");
        setCheckInDate();
        setCheckOutDate();
        setCampsiteFees();
        setCarParkFees();
        setEquipmentRented();
        setAdditionalServices();
    };

    return (
        <div className="max-w-lg   mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Check In</h2>

            {/* Form starts here */}
            {/*<form onSubmit={handleSubmit(onSubmit)} className=''>*/}
                {/* Reusable Input Field for name */}
                <InputField
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="textarea"
                />

                <InputField
                    label="ID / Passport Number"
                    name="id_number"
                    type="textarea"
                    register={register}

                />


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

                <InputField
                    label="Check-In date"
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setcheckInDate(e.target.value)}

                />

                <InputField
                    label="Check-out date"
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setcheckOutDate(e.target.value)}

                />

                <InputField
                    label="Campsite Fees"
                    value={campsiteFees}
                    onChange={(e) => setCampsiteFees(e.target.value)}
                    type="textarea"
                />

                <InputField
                    label="Car Park Fees"
                    value={carParkFees}
                    onChange={(e) => setCarParkFees(e.target.value)}
                    type="textarea"
                />

                {/*<InputField*/}
                {/*    label="Check-Out Date"*/}
                {/*    name="checkoutdate"*/}
                {/*    type="date"*/}
                {/*    register={register}*/}

                <SelectField
                    label="Equipment Rented"
                    value={equipmentRented}
                    options={[
                        {value: 'no-rent', label: 'none'},
                        {value: 'pillow', label: 'pillow'},
                        {value: 'campingStove', label: 'camping stove'},
                        {value: 'sleepingBag', label: 'sleeping bag'},
                    ]}
                    onChange={(e) => setEquipmentRented(e.target.value)}
                />

                <SelectField
                    label="Service"
                    value={additionalServices}
                    options={[
                        {value: 'none', label: 'none'},
                        {value: 'biking', label: 'biking'},
                        {value: 'hiking', label: 'hiking'},
                    ]}
                    onChange={(e) => setAdditionalServices(e.target.value)}
                />


                {/* Submit Button */}
                <button type="submit" className="w-full py-2 bg-green-500 text-white font-bold rounded-md">
                    <Button  onClick={handleAddCustomer}>check in</Button>
                </button>
            {/*</form>*/}
        </div>
    )
}

export default CheckIn