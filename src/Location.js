import React from 'react'
import './Location.css'
import Logo from './Icon2.jpg'
import Img15 from './img15.jpg'
import Img16 from './img16.jpg'
import Img17 from './img17.jpg'
import Icon from './icon.jpg'

const Location = () => {
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
                                        <li><a className="dropdown-item mt-2" href="/Exercise">Exercise</a></li>
                                        <li><a className="dropdown-item mt-2" href="/Store">Store</a></li>
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
            <div class="cls">
                <h1> Muscle Freak Gym</h1>
                <p>We are located in Sector 21 , Opposite the Reliance Mall</p>
            </div>
            <div class="ad">
                <div class="map">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7332.877059020798!2d72.6666939905573!3d23.227124019885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0be5d5fb39%3A0x97c801d47e6f15fa!2sMuscle%20Freak%20Gym!5e0!3m2!1sen!2sin!4v1702476455988!5m2!1sen!2sin" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="add">
                    <h1>Muscle Freak</h1>
                    <p style={{color: "rgb(87, 87, 87);"}}> Located in the sector-21 Gandhinagar <br /> Opposite the Reliance
                        Mall.<br /><br />
                        <b>Address: </b> Muscle Freak Gym, Opposite Reliance Mall, Sector-21<br /> Gandhinagar <br /><br />

                        <b>Phone: </b> +91 22 6678 7970 <br />
                        <b> Mobile: </b> +91 99200 84402 <br /><br />


                        6 am – 12 pm Monday – Saturday <br />
                        4 pm – 10 pm Monday – Saturday
                    </p>
                </div>
            </div>
            <div>
                <p style={{borderBottom: "2px solid rgb(54, 54, 54)", width: "80%", marginTop: "70px", marginLeft: "150px"}}></p><br/>
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

export default Location