import React from 'react'
import Header1 from '../Component/Header1'
import Footer from '../Component/Footer'
import { Helmet } from 'react-helmet'

function Pricing() {
    return (
        <div>
            <Header1 />
            {/* Pricing Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-5" style={{ minHeight: 500 }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100" src="img/pricing.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-7 pt-5 pb-lg-5">
                            <div className="pricing-text bg-light p-4 p-lg-5 my-lg-5">
                                <div className="owl-carousel pricing-carousel">
                                    <div className="bg-white">
                                        <div className="d-flex align-items-center justify-content-between border-bottom border-primary p-4">
                                            <h1 className="display-4 mb-0">
                                                <small className="align-top text-muted font-weight-medium" style={{ fontSize: 22, lineHeight: 45 }}>$</small>49<small className="align-bottom text-muted font-weight-medium" style={{ fontSize: 16, lineHeight: 40 }}>/Mo</small>
                                            </h1>
                                            <h5 className="text-primary text-uppercase m-0">Basic Plan</h5>
                                        </div>
                                        <div className="p-4">
                                            <p><i className="fa fa-check text-success mr-2" />Full Body Massage</p>
                                            <p><i className="fa fa-check text-success mr-2" />Deep Tissue Massage</p>
                                            <p><i className="fa fa-check text-success mr-2" />Hot Stone Massage</p>
                                            <p><i className="fa fa-check text-success mr-2" />Tissue Body Polish</p>
                                            <p><i className="fa fa-check text-success mr-2" />Foot &amp; Nail Care</p>
                                            <a href className="btn btn-primary my-2">Order Now</a>
                                        </div>
                                    </div>
                                    <div className="bg-white">
                                        <div className="d-flex align-items-center justify-content-between border-bottom border-primary p-4">
                                            <h1 className="display-4 mb-0">
                                                <small className="align-top text-muted font-weight-medium" style={{ fontSize: 22, lineHeight: 45 }}>$</small>99<small className="align-bottom text-muted font-weight-medium" style={{ fontSize: 16, lineHeight: 40 }}>/Mo</small>
                                            </h1>
                                            <h5 className="text-primary text-uppercase m-0">Family Plan</h5>
                                        </div>
                                        <div className="p-4">
                                            <p><i className="fa fa-check text-success mr-2" />Full Body Massage</p>
                                            <p><i className="fa fa-check text-success mr-2" />Deep Tissue Massage</p>
                                            <p><i className="fa fa-check text-success mr-2" />Hot Stone Massage</p>
                                            <p><i className="fa fa-check text-success mr-2" />Tissue Body Polish</p>
                                            <p><i className="fa fa-check text-success mr-2" />Foot &amp; Nail Care</p>
                                            <a href className="btn btn-primary my-2">Order Now</a>
                                        </div>
                                    </div>
                                    <div className="bg-white">
                                        <div className="d-flex align-items-center justify-content-between border-bottom border-primary p-4">
                                            <h1 className="display-4 mb-0">
                                                <small className="align-top text-muted font-weight-medium" style={{ fontSize: 22, lineHeight: 45 }}>$</small>149<small className="align-bottom text-muted font-weight-medium" style={{ fontSize: 16, lineHeight: 40 }}>/Mo</small>
                                            </h1>
                                            <h5 className="text-primary text-uppercase m-0">VIP Plan</h5>
                                        </div>
                                        <div className="p-4">
                                            <p><i className="fa fa-check text-success mr-2" />Full Body Massage</p>
                                            <p><i className="fa fa-check text-success mr-2" />Deep Tissue Massage</p>
                                            <p><i className="fa fa-check text-success mr-2" />Hot Stone Massage</p>
                                            <p><i className="fa fa-check text-success mr-2" />Tissue Body Polish</p>
                                            <p><i className="fa fa-check text-success mr-2" />Foot &amp; Nail Care</p>
                                            <a href className="btn btn-primary my-2">Order Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Pricing End */}
            {/* Open Hours Start */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6" style={{ minHeight: 500 }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100" src="img/opening.jpg" style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5 pb-lg-5">
                            <div className="hours-text bg-light p-4 p-lg-5 my-lg-5">
                                <h6 className="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Open Hours</h6>
                                <h1 className="mb-4">Best Relax And Spa Zone</h1>
                                <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                                <ul className="list-inline">
                                    <li className="h6 py-1"><i className="far fa-circle text-primary mr-3" />Mon – Fri : 9:00 AM - 7:00 PM</li>
                                    <li className="h6 py-1"><i className="far fa-circle text-primary mr-3" />Saturday : 9:00 AM - 6:00 PM</li>
                                    <li className="h6 py-1"><i className="far fa-circle text-primary mr-3" />Sunday : Closed</li>
                                </ul>
                                <a href className="btn btn-primary mt-2">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Open Hours End */}
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

export default Pricing