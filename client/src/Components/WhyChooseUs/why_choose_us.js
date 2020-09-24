import React from "react";
import Dropdown from "react-bootstrap/Carousel";

const service_options = {
  margin: 85,
  responsiveClass: true,
  nav: false,
  autoplay: false,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 3,

    }
  },
};

const testi_options = {
  margin: 85,
  responsiveClass: true,
  nav: false,
  autoplay: false,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 2,

    }
  },
};


class WhyChooseUs extends React.Component {
  render() {
    return (
      <section id="why-choose-us" className="why-choose-us-section">
        <div className="jarallax  backgroud-style">
          <div className="container">
            <div className="section-title mb20 headline text-center ">
              <span className="subtitle text-uppercase">GRADEBOT ADVANTAGES</span>
              <h2>
                Reasons <span>To Choose GRADEBOT.</span>
              </h2>
            </div>

            <Carousel>
              <Carousel.Item>
                <div className="service-text-icon ">
                  <div className="service-icon float-left">
                    <i className="text-gradiant flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler" />
                  </div>
                </div>  
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <div className="service-text-icon ">
                    <div className="service-icon float-left">
                      <i className="text-gradiant flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler" />
                    </div>
                </div>  
                <Carousel.Caption>
                  <h3>Fourth slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Second slide&bg=282c34"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Fifth slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Sixth slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="holder.js/800x400?text=Third slide&bg=20232a"
                  alt="Third slide"
                />
            </Carousel>


















            <Carousel>
              <Carousel.Item>
                <div className="service-text-icon ">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler" />
                </div>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
         
              <Carousel.Item>
                <div className="service-text-icon ">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-clipboard-with-pencil" />
                </div>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <div className="service-text-icon ">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler" />
                </div>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <div className="service-text-icon ">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-clipboard-with-pencil" />
                </div>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <div className="service-text-icon ">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler" />
                </div>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <div className="service-text-icon ">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-clipboard-with-pencil" />
                </div>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <div className="service-text-icon ">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler" />
                </div>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <div className="service-text-icon ">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-clipboard-with-pencil" />
                </div>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <div className="service-text-icon ">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler" />
                </div>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
            
      

            <div className="testimonial-slide">
              <div className="section-title-2 mb65 headline text-left ">
                <h2>
                  Students <span>Testimonial.</span>
                </h2>
              </div>
              <Carousel
                id="testimonial-slide-item"
                className="testimonial-slide-area carousel"
                {...testi_options}
              >
                <div className="student-qoute ">
                  <p>
                    “This was our first time lorem ipsum and we{" "}
                    <b> were very pleased with the whole experience</b>. Your
                    price was lower than other companies. Our experience was
                    good from start to finish, so we’ll be back in the future
                    lorem ipsum diamet.”
                  </p>
                  <div className="student-name-designation">
                    <span className="st-name bold-font">Robertho Garcia </span>
                    <span className="st-designation">Graphic Designer</span>
                  </div>
                </div>
                <div className="student-qoute ">
                  <p>
                    “This was our first time lorem ipsum and we{" "}
                    <b> were very pleased with the whole experience</b>. Your
                    price was lower than other companies. Our experience was
                    good from start to finish, so we’ll be back in the future
                    lorem ipsum diamet.”
                  </p>
                  <div className="student-name-designation">
                    <span className="st-name bold-font">Robertho Garcia </span>
                    <span className="st-designation">Graphic Designer</span>
                  </div>
                </div>
                <div className="student-qoute ">
                  <p>
                    “This was our first time lorem ipsum and we{" "}
                    <b> were very pleased with the whole experience</b>. Your
                    price was lower than other companies. Our experience was
                    good from start to finish, so we’ll be back in the future
                    lorem ipsum diamet.”
                  </p>
                  <div className="student-name-designation">
                    <span className="st-name bold-font">Robertho Garcia </span>
                    <span className="st-designation">Graphic Designer</span>
                  </div>
                </div>
                <div className="student-qoute">
                  <p>
                    “This was our first time lorem ipsum and we{" "}
                    <b> were very pleased with the whole experience</b>. Your
                    price was lower than other companies. Our experience was
                    good from start to finish, so we’ll be back in the future
                    lorem ipsum diamet.”
                  </p>
                  <div className="student-name-designation">
                    <span className="st-name bold-font">Robertho Garcia </span>
                    <span className="st-designation">Graphic Designer</span>
                  </div>
                </div>
              </Carousel>
          </div>
        </div>
      </section>
    );
  }
}

export default WhyChooseUs;
