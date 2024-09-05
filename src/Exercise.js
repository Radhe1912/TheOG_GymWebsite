import React from 'react'
import Logo from './Icon2.jpg'
import Img15 from './img15.jpg'
import Img16 from './img16.jpg'
import Img17 from './img17.jpg'
import Icon from './icon.jpg'
import Img21 from './img21.jpg'
import Img22 from './img22.jpg'
import Img23 from './img23.jpg'
import Img24 from './img24.jpg'
import Img25 from './img25.jpg'
import Img26 from './img26.jpg'
import Img27 from './img27.jpg'
import Img28 from './img28.jpg'
import Img29 from './img29.jpg'
import Img30 from './img30.jpg'
import Img31 from './img31.jpg'
import Img32 from './img32.jpg'

const Exercise = () => {
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
            <div>
                <h1>Workout For Home & Cardio Exercises</h1>
            </div>
            <div>
                <div>
                    <h1>1. Jump Rope</h1>
                    <img src={Img21} style={{ width: "500px" }} alt='img' />
                    <p style={{fontSize:"large"}}>Chances are, you haven't jumped rope since 4th grade recess. If that's the case, go get yourself a jump rope today! This form of cardio can be done just about anywhere. Turn up your favorite playlist and jump to the beat. Tossing your jump rope in a backpack, suitcase, or purse will help you squeeze in your 150 minutes of exercise per week whenever you have some spare time.</p>
                </div>
                <div>
                    <h1>2. Dancing</h1>
                    <img src={Img22} style={{ width: "500px" }} alt='img' />
                    <p style={{fontSize:"large"}}>Whether or not you think you have two left feet, dancing is a great way to blow off some steam while also getting your cardio in. You may think that dancing's limited to Zumba classes, but what's keeping you from simply dancing around your room? Crank the tunes and dance yourself silly.</p>
                </div>
            </div>
            <div>
                <div>
                    <h1>3. Organized Sports</h1>
                    <img src={Img23} style={{ width: "500px" }} alt='img' />
                    <p style={{fontSize:"large"}}>You may not think of yourself as a “sports person,” but there are tons of adult sports leagues out there that are full of people just like you — people who want to have fun and be healthy. Sign up for soccer, flag football, basketball, or whatever suits your fancy. Running around a field or court is guaranteed to increase your heart rate. Check your community for noncompetitive sports leagues. Maybe you'll even make a new friend while you're at it!</p>
                </div>
                <div>
                    <h1>4. Power Walking</h1>
                    <img src={Img24} style={{ width: "500px" }} alt='img' />
                    <p style={{fontSize:"large"}}>You don't have to look like one of these power walkers to reap the benefits of this type of cardio. Step outside (or stick to the treadmill if the weather is bad) and pick up the pace.</p>
                </div>
            </div>
            <div>
                <div>
                    <h1>5. Swimming</h1>
                    <img src={Img25} style={{ width: "500px" }} alt='img' />
                    <p style={{fontSize:"large"}}>This low-impact form of cardio is a great way to get your heart rate up while protecting your joints. If you're not fully confident in your swimming skills, grab a kickboard and do a few laps. This will engage not only your legs, but your abs, too.</p>
                </div>
                <div>
                    <h1>6. Boxing</h1>
                    <img src={Img26} style={{ width: "500px" }} alt='img' />
                    <p style={{fontSize:"large"}}>We can't all be Rocky Balboa, but anyone can use boxing to get healthy. Just 30 minutes of boxing can help you burn around 400 calories.</p>
                </div>
            </div>
            <div>
                <div>
                    <h1>7. Trampoline-ing</h1>
                    <img src={Img27} style={{ width: "500px" }} alt='img' />
                    <p style={{fontSize:"large"}}>If you have a huge, bouncy trampoline in your backyard, that's awesome. Jumping and playing around is not only good for you, but fun, too!

                        If you don't have a huge trampoline, don't count yourself out of this one. You can get a compact trampoline to keep in your apartment. Putting on your favorite tunes and running or bouncing in place can be just as effective.</p>
                </div>
                <div>
                    <h1>8. Cycling</h1>
                    <img src={Img28} style={{ width: "500px" }} alt='img' />
                    <p style={{fontSize:"large"}}>There are plenty of ways to fit this type of cardio into your day. Swap your car for a bike on your next trip to the grocery store. Switch it up and ditch the treadmill for the stationary bike on your next trip to the gym. Bite the bullet and try that indoor cycling studio you’ve been eyeing for the past six months, or buy a trainer so you can ride your road bike in your house or garage.</p>
                </div>
            </div>
            <div>
                <div>
                    <h1>9. Hiking</h1>
                    <img src={Img29} style={{ width: "500px" }} alt='img' />
                    <p style={{fontSize:"large"}}>Love the outdoors? Hiking might be just the ticket to increase your ticker's health. Getting moving outside will not only increase your cardiovascular fitness, but also boost your emotional well-being.</p>
                </div>
                <div>
                    <h1>10. Walking</h1>
                    <img src={Img30} style={{ width: "500px" }} alt='img' />
                    <p style={{fontSize:"large"}}>You may be wondering if walking counts as cardiovascular exercise. Of course! This is a great starting place for people who are new to exercise. Even a 10-minute walk can get you on the road to improved heart health. Experienced exercisers benefit from it, too.</p>
                </div>
            </div>
            <div>
                <div>
                    <h1>11. Jumping Jacks</h1>
                    <img src={Img31} style={{ width: "500px" }} alt='img' />
                    <p style={{fontSize:"large"}}>If you haven't done these since high school gym class, you're missing out! This equipment-free activity can get your heart rate up in no time. Plus, they're easy to do from anywhere. Start jumping first thing in the morning, when you need a break from your desk, or while you're waiting for your dinner to finish cooking.</p>
                </div>
                <div>
                    <h1>12. Stairs</h1>
                    <img src={Img32} style={{ width: "500px" }} alt='img' />
                    <p style={{fontSize:"large"}}>Climbing stairs is a fantastic way to get your heart pumping and your body sweating. Find a park with a big set of stairs, or just a stairwell at a nearby building. Any climb will do. And if you need to stay indoors, the Stairmaster is your friend.</p>
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

export default Exercise