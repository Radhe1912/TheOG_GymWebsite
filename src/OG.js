import React from 'react'
import { BrowserRouter as Router, Routes, Route,Navigate, Link } from "react-router-dom"
import Home from "./Home.js"
import About from "./About.js"
import Schedule from './Schedule.js'
import Trainer from './Trainer.js'
import Location from './Location.js'
import Signup from './Signup.js'
import Store from './Store.js'
import Exercise from './Exercise.js'
import Login from './Login.js'
import routes from './Routes.js'

const OG = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />}/>
                    <Route path='/Schedule' element={<Schedule/>}/>
                    <Route path='/Trainer' element={<Trainer/>}/>
                    <Route path='/Location' element={<Location/>}/>
                    <Route path='/Signup' element={<Signup/>}/>
                    <Route path='/Store' element={<Store/>}/>
                    <Route path='/Exercise' element={<Exercise/>}/>
                    <Route path='/Login' element={<Login/>}/>
                    <Route exact path="/" element={<Navigate to={routes.login} />} />
                </Routes>
            </Router>
        </div>
    )
}

export default OG