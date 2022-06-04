import React, {useState} from 'react'
import "./Login.css"

const Login = () => {

  const [user, setUser] = useState({
    email:"",
    password:""
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    // console.log(name, value);
    setUser({
      ...user,
      [name]:value
    })
  }
  return (
    <div className='login'>
    {console.log("User", user)}
        <h1>Login</h1>
        <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter Your Email"/>
        <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter Your Password"/>
        <div className="button">Login</div>
        <div>OR</div>
        <div className="button">Register</div>
    </div>
  )
}

export default Login