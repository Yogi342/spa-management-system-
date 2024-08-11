import React from 'react'

function Header() {
    return (
        <div>
            {/* Topbar Start */}
            <div className="container-fluid bg-light d-none d-lg-block">
                <div className="row py-2 px-lg-5">
                    <div className="col-lg-6 text-left mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center">
                            <small><i className="fa fa-phone-alt mr-2" />+012 345 6789</small>
                            <small className="px-3">|</small>
                            <small><i className="fa fa-envelope mr-2" />info@example.com</small>
                        </div>
                    </div>
                    <div className="col-lg-6 text-right">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-primary px-2" href>
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a className="text-primary px-2" href>
                                <i className="fab fa-twitter" />
                            </a>
                            <a className="text-primary px-2" href>
                                <i className="fab fa-linkedin-in" />
                            </a>
                            <a className="text-primary px-2" href>
                                <i className="fab fa-instagram" />
                            </a>
                            <a className="text-primary pl-2" href>
                                <i className="fab fa-youtube" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar Start */}
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
                    <a href="index.html" className="navbar-brand ml-lg-3">
                        <h1 className="m-0 text-primary"><span className="text-dark">SPA</span> Center</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                        <div className="navbar-nav m-auto py-0">
                            <a href="index.html" className="nav-item nav-link active">Home</a>
                            <a href="about.html" className="nav-item nav-link">About</a>
                            <a href="service.html" className="nav-item nav-link">Services</a>
                            <a href="price.html" className="nav-item nav-link">Pricing</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a href="appointment.html" className="dropdown-item">Appointment</a>
                                    <a href="opening.html" className="dropdown-item">Open Hours</a>
                                    <a href="team.html" className="dropdown-item">Our Team</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                        <a href className="btn btn-primary d-none d-lg-block">Book Now</a>
                    </div>
                </nav>
            </div>
            {/* Navbar End */}
            {/* Carousel Start */}
            <div className="container-fluid p-0 mb-5 pb-5">
                <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#header-carousel" data-slide-to={0} className="active" />
                        <li data-target="#header-carousel" data-slide-to={1} />
                        <li data-target="#header-carousel" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item position-relative active" style={{ minHeight: '100vh' }}>
                            <img className="position-absolute w-100 h-100" src="img/carousel-1.jpg" style={{ objectFit: 'cover' }} />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: 900 }}>
                                    <h6 className="text-white text-uppercase mb-3 animate__animated animate__fadeInDown" style={{ letterSpacing: 3 }}>Spa &amp; Beauty Center</h6>
                                    <h3 className="display-3 text-capitalize text-white mb-3">Massage Treatment</h3>
                                    <p className="mx-md-5 px-5">Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum labore diam</p>
                                    <a className="btn btn-outline-light py-3 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Make Appointment</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item position-relative" style={{ minHeight: '100vh' }}>
                            <img className="position-absolute w-100 h-100" src="img/carousel-2.jpg" style={{ objectFit: 'cover' }} />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: 900 }}>
                                    <h6 className="text-white text-uppercase mb-3 animate__animated animate__fadeInDown" style={{ letterSpacing: 3 }}>Spa &amp; Beauty Center</h6>
                                    <h3 className="display-3 text-capitalize text-white mb-3">Facial Treatment</h3>
                                    <p className="mx-md-5 px-5">Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum labore diam</p>
                                    <a className="btn btn-outline-light py-3 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Make Appointment</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item position-relative" style={{ minHeight: '100vh' }}>
                            <img className="position-absolute w-100 h-100" src="img/carousel-3.jpg" style={{ objectFit: 'cover' }} />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: 900 }}>
                                    <h6 className="text-white text-uppercase mb-3 animate__animated animate__fadeInDown" style={{ letterSpacing: 3 }}>Spa &amp; Beauty Center</h6>
                                    <h3 className="display-3 text-capitalize text-white mb-3">Cellulite Treatment</h3>
                                    <p className="mx-md-5 px-5">Lorem rebum magna dolore amet lorem eirmod magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum labore diam</p>
                                    <a className="btn btn-outline-light py-3 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Make Appointment</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Carousel End */}
        </div>


    )
}

export default Header