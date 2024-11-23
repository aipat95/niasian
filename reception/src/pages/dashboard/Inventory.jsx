import React, {useEffect, useState} from "react";

const categories =["Equipment type","Tent","Bedding","Bicycle"]

const Inventory = () => {
    const [equipments, setEquipments] = useState([]);
    const [selectedCategory,setSelectedCategory] = useState("Equipment type");

    useEffect(() => {
        fetch("equipments.json")
            .then(res => res.json())
            .then((data)=>setEquipments(data))
    }, []);

    const filteredInventory = selectedCategory === "Equipment type"? equipments: equipments.filter(
        equipment => equipment.category === selectedCategory.toLowerCase())

    return (
        <div className=''>
            <h2 className='text-3xl mb-6'>Inventory</h2>
            <div className='mb-8 flex items-center'>
                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    name='category' id='category' className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
                    {
                        categories.map((category, index)=>(
                            <option key = {index} value={category}>{category}</option>
                        ))
                    }
                </select>
            </div>
            {
                filteredInventory.map((equipment, index) => (
                    <div>
                        hh
                    </div>
                ))
            }
        </div>
    )
}

export default Inventory