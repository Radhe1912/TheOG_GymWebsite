import React from 'react'
import './About.css'
import Icon from './icon.jpg'
import Logo from './Icon2.jpg'
import Img15 from './img15.jpg'
import Img16 from './img16.jpg'
import Img17 from './img17.jpg'

const About = () => {
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
      <section class="about-us">
        <div class="about">
          <img src={Icon} class="pic" />
          <div class="text">
            <h2>About Us</h2>
            <h5>The OG <span>Gym</span></h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
            <div class="data">
              <a href="/" class="abc">See more</a>
            </div>
          </div>
        </div>
      </section>
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

export default About