import React from 'react'

function Header1() {
    return (
        <div>
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
                                <a href="index.html" className="nav-item nav-link">Home</a>
                                <a href="about.html" className="nav-item nav-link active">About</a>
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
            </div>
            {/* Header Start */}
            <div className="jumbotron jumbotron-fluid bg-jumbotron" style={{ marginBottom: 90 }}>
                <div className="container text-center py-5">
                    <h3 className="text-white display-3 mb-4">About</h3>
                    <div className="d-inline-flex align-items-center text-white">
                        <p className="m-0"><a className="text-white" href>Home</a></p>
                        <i className="far fa-circle px-3" />
                        <p className="m-0">About</p>
                    </div>
                </div>
            </div>
            {/* Header End */}

        </div>
    )
}

export default Header1