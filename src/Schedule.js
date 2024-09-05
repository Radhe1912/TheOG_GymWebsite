import React from 'react'
import Logo from './Icon2.jpg'
import Img15 from './img15.jpg'
import Img16 from './img16.jpg'
import Img17 from './img17.jpg'
import Icon from './icon.jpg'

const Schedule = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <a href="/" className="nav-link">
                            <img src={Logo} alt="Img" style={{ width: "auto", height: "40px" }} />
                        </a>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Location">Location</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Features
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item mt-2" href="/Trainer">Trainer</a></li>
                                    <li><a className="dropdown-item mt-2" href="/Exercise">Exercises</a></li>
                                    <li><a className="dropdown-item mt-2" href="/">Diet</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Schedule">Scheduble</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/About">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Signup">Sign UP</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div class="container-fluid p-5">
                <div class="mb-5 text-center">
                    <h5 class="text-primary text-uppercase">Class Schedule</h5>
                    <h1 class="display-3 text-uppercase mb-0">Working Hours</h1>
                </div>
                <div class="tab-class text-center">
                    <ul class="nav nav-pills d-inline-flex justify-content-center bg-dark text-uppercase rounded-pill mb-5">
                        <li class="nav-item">
                            <a class="nav-link rounded-pill text-white active" data-bs-toggle="pill" href="#tab-1">Monday</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-2">Tuesday</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-3">Wednesday</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-4">Thursday</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-5">Friday</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-6">Saturday</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link rounded-pill text-white" data-bs-toggle="pill" href="#tab-7">Sunday</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div id="tab-1" class="tab-pane fade show p-0 active">
                            <div class="row g-5">
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                                        <h5 class="text-uppercase text-primary">Power Lifting</h5>
                                        <p class="text-uppercase text-secondary mb-0">John Deo</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                                        <h5 class="text-uppercase text-primary">Body Building</h5>
                                        <p class="text-uppercase text-secondary mb-0">James Taylor</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Cardio Program</h5>
                                        <p class="text-uppercase text-secondary mb-0">Jack Sparrow</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Weight Loose</h5>
                                        <p class="text-uppercase text-secondary mb-0">Robert Smith</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Fitness Program</h5>
                                        <p class="text-uppercase text-secondary mb-0">Adam Phillips</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Crossfit Class</h5>
                                        <p class="text-uppercase text-secondary mb-0">James Alien</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Muscle Building</h5>
                                        <p class="text-uppercase text-secondary mb-0">Petter John</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Yoga Class</h5>
                                        <p class="text-uppercase text-secondary mb-0">Jessy Reo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" class="tab-pane fade p-0">
                            <div class="row g-5">
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                                        <h5 class="text-uppercase text-primary">Power Lifting</h5>
                                        <p class="text-uppercase text-secondary mb-0">John Deo</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                                        <h5 class="text-uppercase text-primary">Body Building</h5>
                                        <p class="text-uppercase text-secondary mb-0">James Taylor</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Cardio Program</h5>
                                        <p class="text-uppercase text-secondary mb-0">Jack Sparrow</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Weight Loose</h5>
                                        <p class="text-uppercase text-secondary mb-0">Robert Smith</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Fitness Program</h5>
                                        <p class="text-uppercase text-secondary mb-0">Adam Phillips</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Crossfit Class</h5>
                                        <p class="text-uppercase text-secondary mb-0">James Alien</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Muscle Building</h5>
                                        <p class="text-uppercase text-secondary mb-0">Petter John</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Yoga Class</h5>
                                        <p class="text-uppercase text-secondary mb-0">Jessy Reo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-3" class="tab-pane fade p-0">
                            <div class="row g-5">
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                                        <h5 class="text-uppercase text-primary">Power Lifting</h5>
                                        <p class="text-uppercase text-secondary mb-0">John Deo</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                                        <h5 class="text-uppercase text-primary">Body Building</h5>
                                        <p class="text-uppercase text-secondary mb-0">James Taylor</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Cardio Program</h5>
                                        <p class="text-uppercase text-secondary mb-0">Jack Sparrow</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Weight Loose</h5>
                                        <p class="text-uppercase text-secondary mb-0">Robert Smith</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Fitness Program</h5>
                                        <p class="text-uppercase text-secondary mb-0">Adam Phillips</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Crossfit Class</h5>
                                        <p class="text-uppercase text-secondary mb-0">James Alien</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Muscle Building</h5>
                                        <p class="text-uppercase text-secondary mb-0">Petter John</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Yoga Class</h5>
                                        <p class="text-uppercase text-secondary mb-0">Jessy Reo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-4" class="tab-pane fade p-0">
                            <div class="row g-5">
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                                        <h5 class="text-uppercase text-primary">Power Lifting</h5>
                                        <p class="text-uppercase text-secondary mb-0">John Deo</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                                        <h5 class="text-uppercase text-primary">Body Building</h5>
                                        <p class="text-uppercase text-secondary mb-0">James Taylor</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Cardio Program</h5>
                                        <p class="text-uppercase text-secondary mb-0">Jack Sparrow</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Weight Loose</h5>
                                        <p class="text-uppercase text-secondary mb-0">Robert Smith</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Fitness Program</h5>
                                        <p class="text-uppercase text-secondary mb-0">Adam Phillips</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Crossfit Class</h5>
                                        <p class="text-uppercase text-secondary mb-0">James Alien</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Muscle Building</h5>
                                        <p class="text-uppercase text-secondary mb-0">Petter John</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Yoga Class</h5>
                                        <p class="text-uppercase text-secondary mb-0">Jessy Reo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-5" class="tab-pane fade p-0">
                            <div class="row g-5">
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                                        <h5 class="text-uppercase text-primary">Power Lifting</h5>
                                        <p class="text-uppercase text-secondary mb-0">John Deo</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                                        <h5 class="text-uppercase text-primary">Body Building</h5>
                                        <p class="text-uppercase text-secondary mb-0">James Taylor</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Cardio Program</h5>
                                        <p class="text-uppercase text-secondary mb-0">Jack Sparrow</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Weight Loose</h5>
                                        <p class="text-uppercase text-secondary mb-0">Robert Smith</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Fitness Program</h5>
                                        <p class="text-uppercase text-secondary mb-0">Adam Phillips</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Crossfit Class</h5>
                                        <p class="text-uppercase text-secondary mb-0">James Alien</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Muscle Building</h5>
                                        <p class="text-uppercase text-secondary mb-0">Petter John</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Yoga Class</h5>
                                        <p class="text-uppercase text-secondary mb-0">Jessy Reo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-6" class="tab-pane fade p-0">
                            <div class="row g-5">
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                                        <h5 class="text-uppercase text-primary">Power Lifting</h5>
                                        <p class="text-uppercase text-secondary mb-0">John Deo</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                                        <h5 class="text-uppercase text-primary">Body Building</h5>
                                        <p class="text-uppercase text-secondary mb-0">James Taylor</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Cardio Program</h5>
                                        <p class="text-uppercase text-secondary mb-0">Jack Sparrow</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Weight Loose</h5>
                                        <p class="text-uppercase text-secondary mb-0">Robert Smith</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Fitness Program</h5>
                                        <p class="text-uppercase text-secondary mb-0">Adam Phillips</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Crossfit Class</h5>
                                        <p class="text-uppercase text-secondary mb-0">James Alien</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Muscle Building</h5>
                                        <p class="text-uppercase text-secondary mb-0">Petter John</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Yoga Class</h5>
                                        <p class="text-uppercase text-secondary mb-0">Jessy Reo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="tab-7" class="tab-pane fade p-0">
                            <div class="row g-5">
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">6.00am - 8.00am</h6>
                                        <h5 class="text-uppercase text-primary">Power Lifting</h5>
                                        <p class="text-uppercase text-secondary mb-0">John Deo</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">8.00am - 10.00am</h6>
                                        <h5 class="text-uppercase text-primary">Body Building</h5>
                                        <p class="text-uppercase text-secondary mb-0">James Taylor</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">10.00am - 12.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Cardio Program</h5>
                                        <p class="text-uppercase text-secondary mb-0">Jack Sparrow</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">12.00pm - 2.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Weight Loose</h5>
                                        <p class="text-uppercase text-secondary mb-0">Robert Smith</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">2.00pm - 4.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Fitness Program</h5>
                                        <p class="text-uppercase text-secondary mb-0">Adam Phillips</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">4.00pm - 6.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Crossfit Class</h5>
                                        <p class="text-uppercase text-secondary mb-0">James Alien</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">6.00pm - 8.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Muscle Building</h5>
                                        <p class="text-uppercase text-secondary mb-0">Petter John</p>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-6">
                                    <div class="bg-dark rounded text-center py-5 px-3">
                                        <h6 class="text-uppercase text-light mb-3">8.00pm - 10.00pm</h6>
                                        <h5 class="text-uppercase text-primary">Yoga Class</h5>
                                        <p class="text-uppercase text-secondary mb-0">Jessy Reo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                    <footer id="footer">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-3">
                                    <a href="/"><img src={Icon} alt="" class="img-fluid logo-footer" /></a>
                                    <div class="footer-about">
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  </p>
                                    </div>

                                </div>
                                <div class="col-md-3">
                                    <div class="useful-link">
                                        <h2>Useful Links</h2>
                                        <div class="use-links">
                                            <li><a href="/"><i class="fa-solid fa-angles-right"></i> Home</a></li>
                                            <li><a href="/"><i class="fa-solid fa-angles-right"></i> About Us</a></li>
                                            <li><a href="/"><i class="fa-solid fa-angles-right"></i> Gallery</a></li>
                                            <li><a href="/"><i class="fa-solid fa-angles-right"></i> Contact</a></li>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-3">
                                    <div class="social-links">
                                        <h2>Follow Us</h2>
                                        <div class="social-icons">
                                            <a href="/"><img alt="img" src={Img15} style={{ height: "50px", width: "30px" }} className='mt-3' /> Facebook</a>
                                            <a href="/"><img alt="img" src={Img16} style={{ height: "50px", width: "30px" }} className='mt-3' /> Instagram</a>
                                            <a href="/"><img alt="img" src={Img17} style={{ height: "50px", width: "30px" }} className='mt-3' /> Linkedin</a>
                                        </div>
                                    </div>


                                </div>
                                <div class="col-md-3">
                                    <div class="address">
                                        <h2>Address</h2>
                                        <div class="address-links">
                                            <p>Dhruv, Radhe, Jinay</p>
                                            <p>+91 1234567890</p>
                                            <p>mail@email.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    <section id="copy-right">
                        <div class="copy-right-sec"><i class="fa-solid fa-copyright"></i>
                            lorem ispum lorem ispum 2022 Powerd By <a href="/">lorem ispum</a>
                        </div>
                    </section>
                </div>
        </div>
    )
}

export default Schedule