import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import MessageContainer from "../../components/messages/MessageContainer.jsx";

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="flex w-4/5 h-full">
                <Sidebar />
                <MessageContainer />
            </div>
        </div>
    );
};

export default Home;
