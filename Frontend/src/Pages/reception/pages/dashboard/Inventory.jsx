import React, {useEffect, useState} from "react";

const categories =["Equipment type","Tent","Bedding","Bicycle"]

const Inventory = () => {
    const [tents, setTents] = useState([]);
    useEffect(() => {
        fetch("tents.json").then(res => res.json()).then((data)=>setTents(data))
    }, []);

    return (
        <div className=''>
            <h2 className='text-3xl mb-6'>Inventory</h2>
            <div className='mb-8 flex items-center'>
                <select name='category' id='category' className='border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none'>
                    {
                        categories.map((category, index)=>(
                            <option key = {index} value={category}>{category}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

export default Inventory