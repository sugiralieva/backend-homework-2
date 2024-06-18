import React from 'react';

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-bubble text-white bg-blue-500'>Hey! What's up?</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'> 12:42</div>
        </div>
    );
};

export default Message;