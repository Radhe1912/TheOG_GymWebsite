import React, { useEffect, useState } from 'react'
import "./LoginSignup.css";
import axios from 'axios';
import routes from './Routes';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: "", pwd: "" })
  const [loginSuccessAlert, setLoginSuccessAlert] = useState(false);
  const [loginDeniedAlert, setLoginDeniedAlert] = useState(false);

  useEffect(() => {
    localStorage.removeItem("user")
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    let baseURL = "http://localhost:3005/log-in";
    axios.post(baseURL, formData).then((res) => {
      if (res.data.status) {
        localStorage.setItem("user", JSON.stringify(res.data.data));
        setFormData({ email: "", pwd: "" })
        setLoginSuccessAlert(true);
        setTimeout(() => {
          setLoginSuccessAlert(false);
          navigate(routes.home)
        }, 3000);
      } else {
        setLoginDeniedAlert(true);
        setTimeout(() => {
          setLoginDeniedAlert(false);
        }, 3000);
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className='loginContainer'>
        <form className='m-0 p-4' onSubmit={handleSubmit}>
          <div>
            <h3 className="login">LOGIN</h3>
          </div>

          <label htmlFor="email">Email</label>
          <input type="email" className='mt-1' placeholder="johndeo@gmail.com" onChange={handleChange} value={formData.email} name="email" id="email" required />

          <label htmlFor="pwd">Password</label>
          <input type="password" className='mt-1' placeholder="johndeo#123" onChange={handleChange} value={formData.pwd} name="pwd" id="pwd" required />

          <button type='submit' className="login mt-4 btn btn-outline-light">LOGIN</button>

          <div className="social mt-3">
            <p className='m-0'> Don't have account? <a href={routes.signup}>REGISTER HERE</a> </p>
          </div>

          {loginSuccessAlert
            ? <div className="alert alert-success mt-3" role="alert">
              You have successfully Logged In.
            </div>
            : null
          }
          {loginDeniedAlert
            ? <div className="alert alert-danger mt-3" role="alert">
              Wrong Email-id or Password!
            </div>
            : null
          }

        </form>
      </div>
    </>
  )
}

export default Login