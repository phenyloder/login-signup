import React, {useState} from 'react'
import "./Login.css"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = ({setLoginUser}) => {

  const navigate = useNavigate()

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

  const login = () => {
    axios.post("http://localhost:9002/login", user)
    .then((res) => {
      alert(res.data.message)
      setLoginUser(res.data.user)
      navigate("/", {replace:true})
    })
  }

  return (
    <div className='login'>
        <h1>Login</h1>
        <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter Your Email"/>
        <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter Your Password"/>
        <div className="button" onClick={login}>Login</div>
        <div>OR</div>
        <div className="button" onClick={() => navigate("/register", {replace:true})}>Register</div>
    </div>
  )
}

export default Login