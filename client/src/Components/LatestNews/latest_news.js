import React from "react";

class LatestNews extends React.Component {
  render() {
    return (
      <section id="latest-area" className={this.props.styleTwo === true ? 'latest-area-section home-page-three' : 'latest-area-section'}>

        <div>
          <div className="col-md-4 offset-md-5">
            <div className="latest-area-content ">
              <div className="section-title-2 mb65 headline text-left">
                <h2>
                  Upcoming <span>Events.</span>
                </h2>
              </div>
              <div className="latest-events">
                <div className="latest-event-item">
                  <div className="events-date  relative-position text-center">
                    <div className="gradient-bdr" />
                    <span className="event-date bold-font">22</span>
                      April 2018
                    </div>
                  <div className="event-text">
                    <h3 className="latest-title bold-font">
                     
                        Fully Responsive Web Design & Development.
                        
                    </h3>
                    <div className="course-meta">
                      <span className="course-category">
                       Web Design
                      </span>
                      <span className="course-author">
                        Koke
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="latest-events">
                <div className="latest-event-item">
                  <div className="events-date  relative-position text-center">
                    <div className="gradient-bdr" />
                    <span className="event-date bold-font">07</span>
                      August 2018
                    </div>
                  <div className="event-text">
                    <h3 className="latest-title bold-font">
                    
                        Introduction to Mobile Application Development.
                        
                    </h3>
                    <div className="course-meta">
                      <span className="course-category">
                       Web Design
                      </span>
                      <span className="course-author">
                        Koke
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="latest-events">
                <div className="latest-event-item">
                  <div className="events-date  relative-position text-center">
                    <div className="gradient-bdr" />
                    <span className="event-date bold-font">30</span>
                      Sept 2018
                    </div>
                  <div className="event-text">
                    <h3 className="latest-title bold-font">
                      IOS Apps Programming & Development.
                    </h3>
                    <div className="course-meta">
                      <span className="course-category">
                       Web Design
                      </span>
                      <span className="course-author">
                        Koke
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="view-all-btn bold-font">
              
                  Check Calendar <i className="fas fa-calendar-alt" />
             
              </div>
            </div>
          </div>


        </div>
      </section>
    );
  }
}

export default LatestNews;