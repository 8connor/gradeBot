import React from "react";

const contactinfo = [

  {
    icon: 'fas fa-phone',
    primary: '(800) 867 5309'
  },

  {
    icon: 'fas fa-envelope',
    primary: 'mail@mail.com'
  }

];



const contactinfoList = contactinfo.map((item) =>
  <div className="contact-address-details" key={item.icon}>
    
    <div className="address-details ul-li-block">
      <ul>
        <li>
          <span>Primary: </span>{item.primary}
        </li>
        <li>
          <span>Second: </span>{item.second}
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
              
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUs; 