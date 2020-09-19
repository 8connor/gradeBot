import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <section id="footer-area" className="footer-area-section">
          <div className="container">
            <div className="footer-content pb10">
              <div className="row">
                <div className="col-md-3">
                  <div className="footer-widget ">
                    <div className="footer-logo mb35">
                     {/* <img src={require( "../../assets/img/logo/logo2.png")} alt="" /> */}
                    </div>
                    <div className="footer-about-text">
                      <p>
                      Lorem ipsum dolor sit amet we take our mission of
                        increasing global access to quality education seriously.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet we take our mission of
                        increasing global access to quality education seriously.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer-widget ">
                    <div className="footer-menu ul-li-block">
                      <h2 className="widget-title">Useful Links</h2>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-caret-right" />
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-caret-right" />
                            Graphic Design
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-caret-right" />
                            Mobile Apps
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-caret-right" />
                            Responsive Website
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-caret-right" />
                            Graphic Design
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-caret-right" />
                            Mobile Apps
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer-menu ul-li-block ">
                    <h2 className="widget-title">Account Info</h2>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-caret-right" />
                          Account Settings
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-caret-right" />
                          Login/Register
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-caret-right" />
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="footer-widget ">
                    <h2 className="widget-title">Photo Gallery</h2>
                    <div className="photo-list ul-li">
                      <ul>
                        <li>
                           {/* <img src={require( "../../assets/img/gallery/g-1.jpg")} alt="" /> */}
                          <div className="blackish-overlay" />
                          <div className="pop-up-icon">
                           {/* <a
                              href="assets/img/gallery/g-1.jpg"
                              data-lightbox="roadtrip"
                            >
                              <i className="fas fa-search" />
                           </a> */}
                          </div>
                        </li>
                        <li>
                          <img src={require( "../../assets/img/gallery/g-2.jpg")} alt="" />
                          <div className="blakish-overlay" />
                          <div className="pop-up-icon">
                           {/* <a
                              href="assets/img/gallery/g-2.jpg"
                              data-lightbox="roadtrip"
                            >
                              <i className="fas fa-search" />
                           </a> */}
                          </div>
                        </li>
                        <li>
                          {/* <img src={require( "../../assets/img/gallery/g-3.jpg")} alt="" /> */}
                          <div className="blakish-overlay" />
                          <div className="pop-up-icon">
                          {/*  <a
                              href="assets/img/gallery/g-3.jpg"
                              data-lightbox="roadtrip"
                            >
                              {" "}
                              <i className="fas fa-search" />
                          </a> */}
                          </div>
                        </li>
                        <li>
                         {/* <img src={require( "../../assets/img/gallery/g-4.jpg")} alt="" /> */}
                          <div className="blakish-overlay" />
                          <div className="pop-up-icon">
                           {/* <a
                              href="assets/img/gallery/g-4.jpg"
                              data-lightbox="roadtrip"
                            >
                              {" "}
                              <i className="fas fa-search" />
                            </a> */}
                          </div>
                        </li>
                        <li>
                          {/* <img src={require( "../../assets/img/gallery/g-5.jpg")} alt="" /> */}
                          <div className="blakish-overlay" />
                          <div className="pop-up-icon">
                            {/* <a
                              href="assets/img/gallery/g-5.jpg"
                              data-lightbox="roadtrip"
                            >
                              {" "}
                              <i className="fas fa-search" />
                            </a> */}
                          </div>
                        </li>
                        <li>
                         {/* <img src={require( "../../assets/img/gallery/g-6.jpg")} alt="" /> */}
                          <div className="blakish-overlay" />
                          <div className="pop-up-icon">
                           {/*  <a
                              href="assets/img/gallery/g-6.jpg"
                              data-lightbox="roadtrip"
                            >
                              {" "}
                              <i className="fas fa-search" />
                            </a> */}
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="footer-social-subscribe mb65">
              <div className="row">
                <div className="col-md-3">
                  <div className="footer-social ul-li ">
                    <h2 className="widget-title">Social Network</h2>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-google-plus-g" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="subscribe-form ">
                    <h2 className="widget-title">Subscribe to our newsletter</h2>
                    <div className="subs-form relative-position">
                      <form action="#" method="post">
                        <input
                          className="course"
                          name="course"
                          type="email"
                          placeholder="Email Address."
                        />
                        <div className="nws-button text-center  gradient-bg text-uppercase">
                          <button type="submit" value="Submit">
                            Subscribe now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copy-right-menu">
              <div className="row">
                <div className="col-md-6">
                  <div className="copy-right-text">
                    <p>
                      © 2020 GradeBot
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="copy-right-menu-item float-right ul-li">
                    <ul>
                      <li>
                        <a href="#">Privacy & Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;