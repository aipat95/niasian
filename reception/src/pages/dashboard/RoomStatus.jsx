import React from "react";

const RoomStatus = () => {
    return(
        <>
            <div>
                <span className="block text-l font-bold">Occupied Rooms</span>
                <span className="block text-L text-gray-600 py-2">Clean</span>
                <span className="block text-L text-gray-600 py-2">Dirty</span>
                <span className="block text-L text-gray-600 py-2">Inspected</span>
            </div>
        </>
    )
}

export default RoomStatus