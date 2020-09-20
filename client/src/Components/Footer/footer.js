import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <section id="footer-area" className="footer-area-section">
          <div className="container">
            <div className="footer-content pb10">
              <div className="row">

                <div className="footer-widget ">
                  <div className="footer-menu ul-li-block">
                  </div>
                </div>
                <div className="footer-menu ul-li-block ">
                  <h2 className="widget-title">Contact info</h2>
                  <ul>
                    <li>

                      <i className="fas fa-caret-right" />
                          Noe

                      </li>
                    <li>

                      <i className="fas fa-caret-right" />
                         Katie

                      </li>
                    <li>

                      <i className="fas fa-caret-right" />
                         James

                      </li>
                    <li>

                      <i className="fas fa-caret-right" />
                         Connor

                      </li>
                  </ul>
                </div>

                <div className="offset-6">
                  <div className="footer-social ul-li">
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
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="copy-right-text">
                <p>
                  © 2020 GradeBot
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;