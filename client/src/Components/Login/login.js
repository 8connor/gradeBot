import React, { Component } from 'react';
class Login extends Component {
    render() {
        return (
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header background-style">
                            <div className="gradient-bg"></div>
                            <div className="popup-logo">
                                {/* <img src={require("URL to LOGO on github")} alt="logo" /> */}
                            </div>
                            <div className="popup-text text-center">
                                <h2> <span>Login</span> to your Account.</h2>
                                <p> or <span>REGISTER</span></p>
                            </div>
                        </div>
                        <div className="modal-body">
                            <form className="contact_form" action="#" method="POST" encType="multipart/form-data">
                                <div className="contact-info">
                                    <input className="name" name="Email" type="email" placeholder="Your email" />
                                </div>
                                <div className="contact-info">
                                    <input className="email" name="name" type="password" placeholder="Your password" />
                                </div>
                                <div className="nws-button text-center white text-capitalize">
                                    <button type="submit" value="Submit">Log in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;