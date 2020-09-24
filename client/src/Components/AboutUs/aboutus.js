import React from "react";


function AboutUs(props) {

    return (
        <section id="about-us" className={props.WhiteBg === true ? 'about-us-section home-second home-third parallax' : 'about-us-section parallax'}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7">
                        <div className="about-us-text">
                            <div className="section-title relative-position mb20 headline text-left">
                                <span className="subtitle ml42 text-uppercase">
                                    ABOUT US
                                    </span>
                                <h2 className="about-subtext text-white">
                                    Welcome to <span>GRADEBOT. </span>
                                </h2>
                            </div>
                            <div className="about-content-text">
                                <p>
                                    With Gradebot, managing your learning environment is simple!  Whether you're a student,
                                    teacher, or administrator, Gradebot offers an easy-to-use interface
                                    for staying organized.
                                    </p>
                                <div className="about-list mb65 ul-li-block ">
                                    <ul>
                                        <li>Grade tracking for students</li>
                                        <li>
                                            Assignment creation and grade entry for teachers
                                            </li>
                                        <li>
                                            Class creation for administrators
                                            </li>
                                    </ul>
                                </div>
                                <div className="about-btn">
                                    <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                                        <a href="#footer-area">
                                            Sign Up <i className="fas fa-caret-right" />
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

export default AboutUs;
