import React from "react";

const RoomStatus = () => {
    return(
        <>
            <div className='px-2 grid md:grid-cols-2 xl:grid-cols-2 xl:grid-rows-2 xl:grid-flow-col gap-6'>
                <div className='grid md:grid-cols-1 xl:grid-cols-1'>
                    <span className="block text-l font-bold">Cabin Status</span>
                    <span className="block text-L text-gray-600 py-2">Available *number*</span>
                    <span className="block text-L text-gray-600 py-2">Occupied *number*</span>
                    <span className="block text-L text-gray-600 py-2">Cleaning *number*</span>
                </div>
                <br/>
                <div>
                    <span className="block text-l font-bold">Tents</span>
                    <span className="block text-L text-gray-600 py-2">Available *number*</span>
                    <span className="block text-L text-gray-600 py-2">Unavailable *number*</span>
                    <span className="block text-L text-gray-600 py-2">Inspected *number*</span>
                </div>
                <div className='grid md:grid-cols-1 xl:grid-cols-1'>
                    <span className="block text-l font-bold">Bedding</span>
                    <span className="block text-L text-gray-600 py-2">Pillows *number*</span>
                    <span className="block text-L text-gray-600 py-2">Blankets *number*</span>
                    <span className="block text-L text-gray-600 py-2">Mattress *number*</span>
                </div>
            </div>
        </>
    )
}

export default RoomStatus