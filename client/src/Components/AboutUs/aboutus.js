import React from "react";

const WhiteBg = true;

class AboutUs extends React.Component {
    render() {
        return (
            <section id="about-us" className={this.props.WhiteBg === true ? 'about-us-section home-second home-third parallax' : 'about-us-section parallax'}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="about-us-text">
                                <div className="section-title relative-position mb20 headline text-left">
                                    <span className="subtitle ml42 text-uppercase">
                                        ABOUT US
                                    </span>
                                    <h2 className="about-subtext text-white">
                                        We are <span>GRADEBOT  </span>
                                        Online Learning Management System
                                    </h2>
                                    <p className="text-white">
                                        We take our mission of increasing global access to quality
                                        education seriously. We connect learners to the best
                                        universities and institutions from around the world.
                                    </p>
                                </div>
                                <div className="about-content-text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                        magna aliquam volutpat. Ut wisi enim ad minim veniam. magna
                                        aliquam volutpat. Ut wisi enim ad minim veniam.
                                    </p>
                                    <div className="about-list mb65 ul-li-block ">
                                        <ul>
                                            <li>Professional And Experienced Since</li>
                                            <li>
                                                We Connect Learners To The Best Universities From Around
                                                The World
                                            </li>
                                            <li>
                                                Our Mission Increasing Global Access To Quality
                                                Aducation
                                            </li>
                                            <li>100K Online Available Courses</li>
                                        </ul>
                                    </div>
                                    <div className="about-btn ">
                                        <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                                            <a href="#">
                                                About Us <i className="fas fa-caret-right" />
                                            </a>
                                        </div>
                                        <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                                            <a href="#">
                                                contact us <i className="fas fa-caret-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUs;
