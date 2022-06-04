import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div className='login'>
        <h1>Login</h1>
        <input type="text" placeholder="Enter Your Email"/>
        <input type="password" placeholder="Enter Your Password"/>
        <div className="button">Login</div>
        <div>OR</div>
        <div className="button">Register</div>
    </div>
  )
}

export default Login