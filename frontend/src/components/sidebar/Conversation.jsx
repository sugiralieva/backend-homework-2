import React from "react";

const Conversation = () => {
    return (
        <div>
            <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
                <div className='flex flex-col flex-1'>
                    <p className='font-bold text-black'>John Doe</p>
                </div>
            </div>
            <div className='divider my-0 py-0 h-1'/>
        </div>
    );
};

export default Conversation;
