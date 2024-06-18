import React, {useState} from 'react';
import {Link} from "react-router-dom";
// import {login} from "../../../../backend/controllers/auth.controller.js";
// import useLogin from "../../hooks/useLogin.js";

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    // const {loading, login} = useLogin()

    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     await login(username, password);
    // }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                    <input
                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="username"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input
                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        placeholder="password"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Link to='/signup' className='text-sm hover:underline hover:text-blue-600 mb-4 inline-block'>
                    {"Don't"} have an account?
                </Link>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        // disabled={loading}
                    >
                        {/*{loading ? <span className='loading loading-spinner'></span> : "Login"}*/}Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
