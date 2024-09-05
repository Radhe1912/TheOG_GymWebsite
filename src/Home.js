import React,{useState,useEffect} from 'react'
import Logo from './Icon2.jpg'
import Img1 from './img1.jpg'
import Img2 from './img2.jpg'
import Img3 from './img3.jpg'
import Img4 from './img4.jpg'
import Img5 from './img5.jpg'
import Img6 from './img6.jpg'
import Img7 from './img7.jpg'
import Img8 from './img8.jpg'
import Img9 from './img9.jpg'
import Img10 from './img10.jpg'
import Img11 from './img11.jpg'
import Img12 from './img12.jpg'
import Img13 from './img13.jpg'
import Img15 from './img15.jpg'
import Img16 from './img16.jpg'
import Img17 from './img17.jpg'
import Icon from './icon.jpg'
import Loader from "./Loader"
import routes from './Routes'


import './Home.css'

const Home = () => {
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        // if(localStorage.getItem("user")){
            setShowLoader(true);
            setTimeout(() => {
                setShowLoader(false)
            }, 2000)
            // let user=JSON.parse(localStorage.getItem("user"));
        // } else {
            // window.location.replace(window.location.origin + routes.home)
        // }
    },[])
    return (
        <div className='body'>
            <div style={{ backgroundColor: "#F9F5EB" }}>
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

                <React.Fragment>
                    <Loader load={showLoader} />
                </React.Fragment>

                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Img1} className="d-block w-100" alt="Img" style={{ height: "800px" }} />
                        </div>
                        <div className="carousel-item">
                            <img src={Img2} className="d-block w-100" alt="Img" style={{ height: "800px" }} />
                        </div>
                        <div className="carousel-item">
                            <img src={Img3} className="d-block w-100" alt="Img" style={{ height: "800px" }} />
                        </div>
                        <div className="carousel-item">
                            <img src={Img4} className="d-block w-100" alt="Img" style={{ height: "800px" }} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className='mt-5'>
                    <div className='justify-content-center'><h1>Memberships</h1></div>
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <div id="grid1" style={{ height: "auto", width: "auto", border: "2px solid black" }}>
                                <h3>Normal</h3>
                                <p className="card-text">General Training</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div id="grid2" style={{ height: "auto", width: "auto", border: "2px solid black" }}>
                                <h3>Elite</h3>
                                <p className="card-text">Personal Training</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div id="grid3" style={{ height: "auto", width: "auto", border: "2px solid black" }}>
                                <h3>Gold</h3>
                                <p className="card-text">Personal Training + Diet</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <img alt="img" src={Img5} style={{ float: "left" }} height={"500px"} width={"500px"} />
                        </div>
                        <div className='col-sm-4' style={{ marginTop: "200px" }}>
                            <h1 className='font1'>PUSH YOURSELF BECAUSE</h1>
                            <h1 className='font1'>NO ONE IS GOING TO</h1>
                            <h1 className='font1'>DO IT FOR YOU</h1>
                        </div>
                        <div className='col-sm-4'>
                            <img alt="img" src={Img6} style={{ float: "right" }} height={"500px"} width={"500px"} />
                        </div>
                    </div>
                </div>

                <div className="container-fluid p-5" style={{ backgroundColor: "#F9F5EB" }}>
                    <div className="mb-5 text-center">
                        <h5 className="text-success text-uppercase" style={{ fontSize: "x-large" }}>The Team</h5>
                        <h1 className="display-3 text-uppercase mb-0">Expert Trainers</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6" style={{ backgroundColor: "#F9F5EB" }}>
                            <div className="team-item position-relative">
                                <div className="position-relative overflow-hidden rounded">
                                    <img className="img-fluid w-100" src={Img7} alt="" />
                                    <div className="team-overlay">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <p style={{ color: "#5CDB95" }}>5 YEARS TRAINING EXPERIENCE</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={{ backgroundColor: "rgb(100, 100, 100)", opacity: 0.8 }}>
                                    <h5 className="text-uppercase text-light">Mark Michle</h5>
                                    <p className="text-uppercase m-0" style={{ color: "#5CDB95" }}>Trainer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" style={{ backgroundColor: "#F9F5EB" }}>
                            <div className="team-item position-relative">
                                <div className="position-relative overflow-hidden rounded">
                                    <img className="img-fluid w-100" src={Img8} alt="" />
                                    <div className="team-overlay">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <p style={{ color: "#5CDB95" }}>3 YEARS TRAINING EXPERIENCE</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={{ backgroundColor: "rgb(100, 100, 100)", opacity: 0.8 }}>
                                    <h5 className="text-uppercase text-light">Jessica Karen</h5>
                                    <p className="text-uppercase m-0" style={{ color: "#5CDB95" }}>Trainer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" style={{ backgroundColor: "#F9F5EB" }}>
                            <div className="team-item position-relative">
                                <div className="position-relative overflow-hidden rounded">
                                    <img className="img-fluid w-100" src={Img9} alt="" style={{ height: "auto" }} />
                                    <div className="team-overlay">
                                        <div className="d-flex align-items-center justify-content-start">
                                            <p style={{ color: "#5CDB95" }}>4 YEARS TRAINING EXPERIENCE</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4" style={{ backgroundColor: "rgb(100, 100, 100)", opacity: 0.8 }}>
                                    <h5 className="text-uppercase text-light">Charles Thomas</h5>
                                    <p className="text-uppercase m-0" style={{ color: "#5CDB95" }}>Trainer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br /><br /><br /><hr style={{ backgroundColor: "#ff392b", height: "2px" }} />

                <div className="container-fluid p-0 my-5">
                    <div className="row g-0">
                        <div className="col-lg-6" style={{ minHeight: "500px;" }}>
                            <div className="position-relative h-100">
                                <img alt="img" className="w-100 h-100" src={Img13} style={{ objectFit: "cover;" }} />
                            </div>
                        </div>
                        <div className="col-lg-6 bg-dark p-5">
                            <div className="mb-5">
                                <h5 className="text-primary text-uppercase">Testimonial</h5>
                                <h1 className="display-3 text-uppercase text-light mb-0">Our Client Say</h1>
                            </div>
                            <div className="owl-carousel testimonial-carousel">
                                <div className="testimonial-item">
                                    <p className="fs-4 fw-normal text-light mb-4"><i className="fa fa-quote-left text-primary me-3"></i>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptates voluptatibus aperiam consequatur accusantium, iure ullam minima ipsam nam? Debitis quam similique nisi ab sit. Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.</p>
                                    <div className="">
                                        <div className='row'>
                                            <div className='col-sm-6'>
                                                <img className="img-fluid rounded-circle" src={Img10} alt="" />
                                                <div className="ps-4">
                                                    <h5 className="text-uppercase text-light">Client Name</h5>
                                                    <span className="text-uppercase text-secondary">Profession</span>
                                                </div>
                                            </div>
                                            <div className='col-sm-6' style={{ float: "right" }}>
                                                <img className="img-fluid rounded-circle" src={Img11} alt="" />
                                                <div className="ps-4">
                                                    <h5 className="text-uppercase text-light">Client Name</h5>
                                                    <span className="text-uppercase text-secondary">Profession</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row' style={{ backgroundColor: "black" }}>
                    <div className='col-md-3'>
                        <h3 style={{ color: "white" }}>Working days per week</h3>
                        <div id='counter' style={{ fontSize: "50px", color: "orange" }}>6</div>
                    </div>
                    <div className='col-md-3'>
                        <h3 style={{ color: "white" }}>Rating</h3>
                        <div id='counter2' style={{ fontSize: "50px", color: "orange" }}>4.5/5</div>
                    </div>
                    <div className='col-md-3'>
                        <h3 style={{ color: "white" }}>Number of clients</h3>
                        <div id='counter3' style={{ fontSize: "50px", color: "orange" }}>1000+</div>
                    </div>
                    <div className='col-md-3'>
                        <h3 style={{ color: "white" }}>Number of Equipments</h3>
                        <div id='counter4' style={{ fontSize: "50px", color: "orange" }}>100+</div>
                    </div>
                </div>

                <div style={{ backgroundColor: "white" }}>
                    <marquee><h3>Thanks For Visiting</h3></marquee>
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
                <a href="#" class="top">&#8593;</a>
            </div>
        </div>
    )
}

export default Home