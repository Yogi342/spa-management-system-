import React from 'react'
import Header1 from '../Component/Header1'
import Footer from '../Component/Footer'
import { Helmet } from 'react-helmet'

function About() {
    return (
        <div>
            <Header1 />
            {/* About Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-5 pb-lg-0">
                            <img className="img-fluid w-100" src="img/about.jpg" alt />
                        </div>
                        <div className="col-lg-6">
                            <h6 className="d-inline-block text-primary text-uppercase bg-light py-1 px-2">About Us</h6>
                            <h1 className="mb-4">Your Best Spa, Beauty &amp; Skin Care Center</h1>
                            <p className="pl-4 border-left border-primary">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd erat duo eos et erat</p>
                            <div className="row pt-3">
                                <div className="col-6">
                                    <div className="bg-light text-center p-4">
                                        <h3 className="display-4 text-primary" data-toggle="counter-up">99</h3>
                                        <h6 className="text-uppercase">Spa Specialist</h6>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="bg-light text-center p-4">
                                        <h3 className="display-4 text-primary" data-toggle="counter-up">999</h3>
                                        <h6 className="text-uppercase">Happy Clients</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
            {/* Team Start */}
            <div className="container-fluid py-5">
                <div className="container pt-5">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-6">
                            <h6 className="d-inline-block bg-light text-primary text-uppercase py-1 px-2">Spa Specialist</h6>
                            <h1 className="mb-5">Spa &amp; Beauty Specialist</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="team position-relative overflow-hidden mb-5">
                                <img className="img-fluid" src="img/team-1.jpg" alt />
                                <div className="position-relative text-center">
                                    <div className="team-text bg-primary text-white">
                                        <h5 className="text-white text-uppercase">Olivia Mia</h5>
                                        <p className="m-0">Spa &amp; Beauty Expert</p>
                                    </div>
                                    <div className="team-social bg-dark text-center">
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                        <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team position-relative overflow-hidden mb-5">
                                <img className="img-fluid" src="img/team-2.jpg" alt />
                                <div className="position-relative text-center">
                                    <div className="team-text bg-primary text-white">
                                        <h5 className="text-white text-uppercase">Cory Brown</h5>
                                        <p className="m-0">Spa &amp; Beauty Expert</p>
                                    </div>
                                    <div className="team-social bg-dark text-center">
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                        <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team position-relative overflow-hidden mb-5">
                                <img className="img-fluid" src="img/team-3.jpg" alt />
                                <div className="position-relative text-center">
                                    <div className="team-text bg-primary text-white">
                                        <h5 className="text-white text-uppercase">Elizabeth Ross</h5>
                                        <p className="m-0">Spa &amp; Beauty Expert</p>
                                    </div>
                                    <div className="team-social bg-dark text-center">
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                        <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team position-relative overflow-hidden mb-5">
                                <img className="img-fluid" src="img/team-4.jpg" alt />
                                <div className="position-relative text-center">
                                    <div className="team-text bg-primary text-white">
                                        <h5 className="text-white text-uppercase">Kelly Walke</h5>
                                        <p className="m-0">Spa &amp; Beauty Expert</p>
                                    </div>
                                    <div className="team-social bg-dark text-center">
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-outline-primary btn-square mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
                                        <a className="btn btn-outline-primary btn-square" href="#"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
            <Footer />
            <Helmet>
                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
                <script src="lib/easing/easing.min.js"></script>
                <script src="lib/waypoints/waypoints.min.js"></script>
                <script src="lib/counterup/counterup.min.js"></script>
                <script src="lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="lib/tempusdominus/js/moment.min.js"></script>
                <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
                <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>
                <script src="mail/jqBootstrapValidation.min.js"></script>
                <script src="mail/contact.js"></script>
                <script src="js/main.js"></script>
            </Helmet>
        </div>
    )
}

export default About