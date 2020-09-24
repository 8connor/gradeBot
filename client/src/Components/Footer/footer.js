import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <section id="footer-area" className="footer-area-section">
          <div className="container">
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