import React from 'react'
import Logo from './Icon2.jpg'
import Img7 from './img7.jpg'
import Img8 from './img8.jpg'
import Img9 from './img9.jpg'
import Img15 from './img15.jpg'
import Img16 from './img16.jpg'
import Img17 from './img17.jpg'
import Icon from './icon.jpg'

const Trainer = () => {
    return (
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
            <div className='mt-5'>
                <marquee>
                    <h1>
                        Experianced Trainers
                    </h1>
                </marquee>
            </div>
            <div className='row mt-5'>
                <div className="col-md-6" style={{ backgroundColor: "#F9F5EB" }}>
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
                <div className='col-md-6' style={{ float: "left" }}>
                    <h1>Mark Michle</h1>
                    <p style={{ fontSize: "x-large" }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis fugit voluptatibus, enim commodi unde sunt ad reprehenderit perspiciatis nobis labore nesciunt aliquid repellat vel nihil quos recusandae sapiente tempore ipsa minus facere veniam quas? Eos a nihil obcaecati beatae, minus atque vero repellat impedit, consequuntur cupiditate tenetur ipsam et praesentium harum quos! Accusantium dignissimos iste fugit voluptate quis omnis earum suscipit consequuntur ipsa nisi repudiandae provident culpa est laborum repellendus explicabo, quae facilis? Laudantium ipsa eos natus corrupti dolore corporis quibusdam quo enim quae itaque pariatur non aspernatur accusamus, inventore aliquid blanditiis aliquam recusandae quos in atque. Autem quia dignissimos rem nisi vel obcaecati provident quaerat, neque, esse dolores ad corporis nobis eius iste, sint id minima! Voluptatum ratione qui nemo doloribus facere quia commodi amet a laudantium distinctio ipsa labore, velit illum. Unde iure neque, error deleniti veritatis pariatur sit nam natus cupiditate ab suscipit quae aliquam eos perspiciatis. Vero inventore quidem, vel corrupti expedita illum quos ullam iste. Fuga repellendus ea facere recusandae unde earum illo asperiores, cum voluptatem autem, nihil odio quasi? Ut aliquam nisi asperiores quos. Voluptas quae qui neque sequi impedit, odit numquam, nulla suscipit totam accusantium ipsa deserunt consequatur aliquam sint accusamus repellat molestias?
                    </p>
                </div>
            </div>
            <div className="row">
                <div className='col-md-6'>
                    <h1>Jessica Karen</h1>
                    <p style={{ fontSize: "x-large" }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis fugit voluptatibus, enim commodi unde sunt ad reprehenderit perspiciatis nobis labore nesciunt aliquid repellat vel nihil quos recusandae sapiente tempore ipsa minus facere veniam quas? Eos a nihil obcaecati beatae, minus atque vero repellat impedit, consequuntur cupiditate tenetur ipsam et praesentium harum quos! Accusantium dignissimos iste fugit voluptate quis omnis earum suscipit consequuntur ipsa nisi repudiandae provident culpa est laborum repellendus explicabo, quae facilis? Laudantium ipsa eos natus corrupti dolore corporis quibusdam quo enim quae itaque pariatur non aspernatur accusamus, inventore aliquid blanditiis aliquam recusandae quos in atque. Autem quia dignissimos rem nisi vel obcaecati provident quaerat, neque, esse dolores ad corporis nobis eius iste, sint id minima! Voluptatum ratione qui nemo doloribus facere quia commodi amet a laudantium distinctio ipsa labore, velit illum. Unde iure neque, error deleniti veritatis pariatur sit nam natus cupiditate ab suscipit quae aliquam eos perspiciatis. Vero inventore quidem, vel corrupti expedita illum quos ullam iste. Fuga repellendus ea facere recusandae unde earum illo asperiores, cum voluptatem autem, nihil odio quasi? Ut aliquam nisi asperiores quos. Voluptas quae qui neque sequi impedit, odit numquam, nulla suscipit totam accusantium ipsa deserunt consequatur aliquam sint accusamus repellat molestias?
                    </p>
                </div>
                <div className="col-md-6" style={{ backgroundColor: "#F9F5EB", float: "right" }}>
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
            </div>
            <div className='row'>
                <div className="col-md-6" style={{ backgroundColor: "#F9F5EB" }}>
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
                <div className='col-md-6' style={{ float: "right" }}>
                    <h1>Charles Thomas</h1>
                    <p style={{ fontSize: "x-large" }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis fugit voluptatibus, enim commodi unde sunt ad reprehenderit perspiciatis nobis labore nesciunt aliquid repellat vel nihil quos recusandae sapiente tempore ipsa minus facere veniam quas? Eos a nihil obcaecati beatae, minus atque vero repellat impedit, consequuntur cupiditate tenetur ipsam et praesentium harum quos! Accusantium dignissimos iste fugit voluptate quis omnis earum suscipit consequuntur ipsa nisi repudiandae provident culpa est laborum repellendus explicabo, quae facilis? Laudantium ipsa eos natus corrupti dolore corporis quibusdam quo enim quae itaque pariatur non aspernatur accusamus, inventore aliquid blanditiis aliquam recusandae quos in atque. Autem quia dignissimos rem nisi vel obcaecati provident quaerat, neque, esse dolores ad corporis nobis eius iste, sint id minima! Voluptatum ratione qui nemo doloribus facere quia commodi amet a laudantium distinctio ipsa labore, velit illum. Unde iure neque, error deleniti veritatis pariatur sit nam natus cupiditate ab suscipit quae aliquam eos perspiciatis. Vero inventore quidem, vel corrupti expedita illum quos ullam iste. Fuga repellendus ea facere recusandae unde earum illo asperiores, cum voluptatem autem, nihil odio quasi? Ut aliquam nisi asperiores quos. Voluptas quae qui neque sequi impedit, odit numquam, nulla suscipit totam accusantium ipsa deserunt consequatur aliquam sint accusamus repellat molestias?
                    </p>
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

export default Trainer