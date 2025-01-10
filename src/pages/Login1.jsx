import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axois from 'axios';

function Login1() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Redirect to UserSelect page
    navigate("/user-select");

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function handleSumbit(event){
        event.preventDefault();
        axois.post('')
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-indigo-500 min-vh-100'>
      <div className='p-4 bg-white rounded shadow w-25'>
        <form onSubmit={handleSumbit}>
          <div className='mb-3'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder='Enter Email' className='form-control' required />
          </div>
          <div className='mb-3'>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder='Enter Password' className='form-control' required />
          </div>
          <button
            onClick={handleLogin}
            className="mt-4 inline-flex items-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login1;
