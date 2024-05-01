import React from 'react'
import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className="inputbox">
            <input type="text" placeholder='Username' required />
            <p> </p>
            <FaUser className='icon'/>

        </div>
        <h1> </h1>
        
        <div className="inputbox">
            <input type="password" placeholder='Password' required />
            <FaLock className='icon'/>
        </div>


        <div className="remember-forgot">
        <h1> </h1>
            <label><input type="checkbox"/> Remember me</label>
            <p></p>
            <a href="#"> Forgot password</a> <p> </p>

            <button type="submit">Login</button>

            <div className="register-link">
                <p>Don't have an account? <a href='#'>Register</a></p>
            </div>

        </div>
      </form>
    </div>
  )
}

export default LoginForm
