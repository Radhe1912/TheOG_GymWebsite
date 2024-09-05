import React, { useState, useEffect } from 'react'
import axios from 'axios';
import routes from './Routes';
import "./LoginSignup.css";

const Signup = () => {

  const [formData, setFormData] = useState({ name: "", email: "", pwd: "" })
  const [userInsertAlert, setUserInsertAlert] = useState(false);
  const [userExistAlert, setUserExistAlert] = useState(false);

  useEffect(() => {
    localStorage.removeItem("user")
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    let baseURL = "http://localhost:3005/sign-up";
    axios.post(baseURL, formData).then((res) => {
      if (res.data.status) {
        localStorage.setItem("user", JSON.stringify(res.data.data));
        setFormData({ name: "", email: "", pwd: "" })
        setUserInsertAlert(true);
        setTimeout(() => {
          setUserInsertAlert(false);
          window.location.replace("http://localhost:3000" + routes.home)
        }, 3000);
      } else {
        setUserExistAlert(true);
        setTimeout(() => {
          setUserExistAlert(false);
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
      <div className='signupContainer'>
        <form className='m-0 p-4' onSubmit={handleSubmit}>
          <div>
            <h3 className="login">SIGNUP</h3>
          </div>

          <label htmlFor="name">Username</label>
          <input type="text" className='mt-1' placeholder="John Deo" onChange={handleChange} value={formData.name} name="name" id="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" className='mt-1' placeholder="johndeo@gmail.com" onChange={handleChange} value={formData.email} name="email" id="email" required />

          <label htmlFor="pwd">Password</label>
          <input type="password" className='mt-1' placeholder="johndeo#123" onChange={handleChange} value={formData.pwd} name="pwd" id="pwd" required />

          <button type='submit' className="login mt-4 btn btn-outline-light">SIGNUP</button>

          <div className="social mt-3">
            <p className='m-0'> Already having account? <a href={routes.login}>LOGIN HERE</a> </p>
          </div>
          {userInsertAlert
            ? <div className="alert alert-success mt-3" role="alert">
              You have successfully signed up.
            </div>
            : null
          }
          {userExistAlert
            ? <div className="alert alert-warning mt-3" role="alert">
              User Already Exist !
            </div>
            : null
          }
        </form>
      </div>
    </>
  )
}

export default Signup