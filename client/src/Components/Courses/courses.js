import React from "react";

class Courses extends React.Component {
  render() {
    return (
      
      <section id="course-category" className="course-category-section">
        <div className="container">
          <div className="section-title mb45 headline text-center ">
            <span className="subtitle text-uppercase">COURSE CATEGORIES</span>
            <h2>
              Browse Courses<span> By Category.</span>
            </h2>
          </div>
          <div className="category-item">
            <div className="row">
              <div className="col-md-3">
                <div className="category-icon-title text-center ">
                  <div className="category-icon">
                    <i className="text-gradiant flaticon-technology" />
                  </div>
                  <div className="category-title">
                    <h4>Literature</h4>
                  </div>
                </div>
              </div>
              {}
              <div className="col-md-3">
                <div className="category-icon-title text-center ">
                  <div className="category-icon">
                    <i className="text-gradiant flaticon-app-store" />
                  </div>
                  <div className="category-title">
                    <h4>Computers</h4>
                  </div>
                </div>
              </div>
              {}
              <div className="col-md-3">
                <div className="category-icon-title text-center ">
                  <div className="category-icon">
                    <i className="text-gradiant flaticon-artist-tools" />
                  </div>
                  <div className="category-title">
                    <h4>Art</h4>
                  </div>
                </div>
              </div>
              {}
              <div className="col-md-3">
                <div className="category-icon-title text-center ">
                  <div className="category-icon">
                    <i className="text-gradiant flaticon-business" />
                  </div>
                  <div className="category-title">
                    <h4>Mathematics</h4>
                  </div>
                </div>
              </div>
              {}
              <div className="col-md-3">
                <div className="category-icon-title text-center ">
                  <div className="category-icon">
                    <i className="text-gradiant flaticon-dna" />
                  </div>
                  <div className="category-title">
                    <h4>Science</h4>
                  </div>
                </div>
              </div>
              {}
              <div className="col-md-3">
                <div className="category-icon-title text-center ">
                  <div className="category-icon">
                    <i className="text-gradiant flaticon-cogwheel" />
                  </div>
                  <div className="category-title">
                    <h4>Enginering</h4>
                  </div>
                </div>
              </div>
              {}
              <div className="col-md-3">
                <div className="category-icon-title text-center ">
                  <div className="category-icon">
                    <i className="text-gradiant flaticon-technology-1" />
                  </div>
                  <div className="category-title">
                    <h4>Electives</h4>
                  </div>
                </div>
              </div>
              {}
              <div className="col-md-3">
                <div className="category-icon-title text-center ">
                  <div className="category-icon">
                    <i className="text-gradiant flaticon-technology-2" />
                  </div>
                  <div className="category-title">
                    <h4>Language Arts</h4>
                  </div>
                </div>
              </div>
              {}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Courses;