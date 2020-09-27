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
                          Noe Leiva
                          <a href="https://github.com/leivanoe1011">
                        <i className="fab fa-github" />
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-caret-right" />
                         Katie Mills
                         <a href="https://github.com/kmills2274">
                        <i className="fab fa-github" />
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-caret-right" />
                         James Zimmermann
                         <a href="https://github.com/slimzim">
                        <i className="fab fa-github" />
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-caret-right" />
                        James Hooven
                         <a href="https://github.com/8connor">
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
