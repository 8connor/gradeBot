import React from "react";

const contactinfo = [

  {
    icon: 'fas fa-phone',
    primary: '1+ (800) 867- 5309'
  },

  {
    icon: 'fas fa-envelope',
    primary: 'gradebot@mail.com'
  }

];



const contactinfoList = contactinfo.map((item) =>
  <div className="contact-address-details" key={item.icon}>
    
    <div className="address-details ul-li-block">
      <ul>
        <li>
          <span>Primary: </span>{item.primary}
        </li>
      </ul>
    </div>
  </div>
);



export class ContactUs extends React.Component {

  render() {

    return (
      <section
        id="contact-area"
        className="contact-area-section backgroud-style"
      >
        <div className="container">
          <div className="contact-area-content">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-left-content">
                  <div className="section-title  mb45 headline text-left">
                    <span className="subtitle ml42  text-uppercase">
                      CONTACT US
                    </span>
                    <h2>
                      <span>Get in Touch</span>
                    </h2>
                    <p>
                      Questions? Comments? Let us know!
                    </p>
                  </div>
                  <div className="contact-address">
                    {contactinfoList}
                  </div>
                </div>
                <div className="genius-btn mt60 gradient-bg text-center text-uppercase ul-li-block bold-font ">
                  <a href="#">
                    Contact Us <i className="fas fa-caret-right" />
                  </a>
                </div>
              </div>
              
              <div className="col-md-6">
                <div className="section-title  mb45 headline text-left">
                  <span className="subtitle ml42  text-uppercase">Group Contact Info
                  </span>
                  <div className="contact-list mb65 ul-li-block ">
                    <ul>
                      <li>
                        <i className="fas fa-caret-right" /> Noe <a href="#"><i className="fab fa-github" /></a> <a href="#"><i id="fab2" className="fab fa-google-plus-g" /></a> <a href="#"><i className="fab fa-linkedin-in" /></a>
                      </li>
                      <li>
                        <i className="fas fa-caret-right" /> Katie <a href="#"><i className="fab fa-github" /></a> <a href="#"><i id="fab2" className="fab fa-google-plus-g" /></a> <a href="#"><i className="fab fa-linkedin-in" /></a>
                      </li>
                      <li>
                        <i className="fas fa-caret-right" /> James <a href="#"><i className="fab fa-github" /></a> <a href="#"><i id="fab2" className="fab fa-google-plus-g" /></a> <a href="#"><i className="fab fa-linkedin-in" /></a>
                      </li>
                      <li>
                        <i className="fas fa-caret-right" /> Connor <a href="#"><i className="fab fa-github" /></a> <a href="#"><i id="fab2" className="fab fa-google-plus-g" /></a> <a href="#"><i className="fab fa-linkedin-in" /></a>
                      </li>
                    </ul>
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

export default ContactUs; 