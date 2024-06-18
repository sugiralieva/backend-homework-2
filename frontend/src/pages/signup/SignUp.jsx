import React, {useState} from 'react';
import {Link} from "react-router-dom";
import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {

    const [inputs, setInputs] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })

    const {loading, signup} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(inputs)
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                    <input
                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="username"
                        value={inputs.username}
                        onChange={(e) => setInputs({...inputs, username: e.target.value})}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                    <input
                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        placeholder="password"
                        value={inputs.password}
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Confirm Password</label>
                    <input
                        className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        placeholder="confirm password"
                        value={inputs.confirmPassword}
                        onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                    />
                </div>
                <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mb-4 inline-block'>
                    Already have an account?
                </Link>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        disabled={loading}
                    >
                        {loading ? <span className='loading loading-spinner'></span> : "Sign Up" }
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
