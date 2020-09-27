
import React, { Component } from 'react';

class LoginModal extends Component {
    render() {
        return (
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header background-style">
                            <div className="gradient-bg"></div>
                            <div className="popup-logo">
                                <img src={require("URL to LOGO on github")} alt="logo" />
                            </div>
                            <div className="popup-text text-center">
                                <h2> <span>Login</span> Your Account.</h2>
                                <p>Login to our website, or <span>REGISTER</span></p>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="facebook-login">
                                <a href="#">
                                    <div className="log-in-icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </div>
                                    <div className="log-in-text text-center">
                                        Login with Facebook
									</div>
                                </a>
                            </div>
                            <div className="alt-text text-center"><a href="#">OR SIGN IN</a> </div>
                            <form className="contact_form" action="#" method="POST" encType="multipart/form-data">
                                <div className="contact-info">
                                    <input className="name" name="Email" type="email" placeholder="Your@email.com*" />
                                </div>
                                <div className="contact-info">
                                    <input className="email" name="name" type="text" placeholder="Your name*" />
                                </div>
                                <div className="nws-button text-center white text-capitalize">
                                    <button type="submit" value="Submit">LOg in Now</button>
                                </div>
                            </form>
                            <div className="log-in-footer text-center">
                                <p>* Denotes mandatory field.</p>
                                <p>** At least one telephone number is required.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default LoginModal;


