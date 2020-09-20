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
                          <a href="#">
                        <i className="fab fa-github" />
                      </a>
                    </li>
                    <li>

                      <i className="fas fa-caret-right" />
                         Katie
                         <a href="#">
                        <i className="fab fa-github" />
                      </a>
                    </li>
                    <li>

                      <i className="fas fa-caret-right" />
                         James
                         <a href="#">
                        <i className="fab fa-github" />
                      </a>
                    </li>
                    <li>

                      <i className="fas fa-caret-right" />
                         Connor
                         <a href="#">
                        <i className="fab fa-github" />
                      </a>
                    </li>
                  </ul>
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