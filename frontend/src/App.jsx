import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from "./pages/login/Login.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import Home from "./pages/home/Home.jsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import {useAuthContext} from "./context/AuthContext.jsx";

function App() {
  const {authUser} = useAuthContext();

  return (
      <div className='bg-white min-h-screen px-4 py-5'>
          <Routes>
            <Route path="/" element={authUser ? <Home/> : <Navigate to={"/login"}/> }/>
            <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login/> }/>
            <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp/> }/>
          </Routes>
          <Toaster/>
      </div>
  )
}

export default App
