import React from "react";

class LatestNews extends React.Component {
  render() {
    return (
      <section id="latest-area" className={this.props.styleTwo === true ? 'latest-area-section home-page-three' : 'latest-area-section' }>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="latest-area-content  ">
                <div className="section-title-2 mb65 headline text-left">
                  <h2>
                    Latest <span>News.</span>
                  </h2>
                </div>
                <div className="latest-news-posts">
                  <div className="latest-news-area">
                    <div className="latest-news-thumbnile relative-position">
    {/* <img src={require('../../assets/img/blog/lb-1.jpg')} alt="" /> */}
                      <div className="hover-search">
                        <i className="fas fa-search" />
                      </div>
                      <div className="blakish-overlay" />
                    </div>
                    <div className="date-meta">
                      <i className="fas fa-calendar-alt" /> 26 April 2018
                    </div>
                    <h3 className="latest-title bold-font">
                      <a href="#">Affiliate Marketing A Beginner’s Guide.</a>
                    </h3>
                    <div className="course-viewer ul-li">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-user" /> 1.220
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-comment-dots" /> 1.015
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="latest-news-posts">
                    <div className="latest-news-area">
                      <div className="latest-news-thumbnile relative-position">
    {/* <img src={require('../../assets/img/blog/lb-2.jpg')} alt="" /> */}
                        <div className="hover-search">
                          <i className="fas fa-search" />
                        </div>
                        <div className="blakish-overlay" />
                      </div>
                      <div className="date-meta">
                        <i className="fas fa-calendar-alt" /> 26 April 2018
                      </div>
                      <h3 className="latest-title bold-font">
                        <a href="#">No.1 The Best Online Course 2018.</a>
                      </h3>
                      <div className="course-viewer ul-li">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fas fa-user" /> 1.220
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fas fa-comment-dots" /> 1.015
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                  </div>
                  <div className="view-all-btn bold-font">
                    <a href="#">
                      View All News{" "}
                      <i className="fas fa-chevron-circle-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
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
                        <a href="#">
                          Fully Responsive Web Design & Development.
                        </a>
                      </h3>
                      <div className="course-meta">
                        <span className="course-category">
                          <a href="#">Web Design</a>
                        </span>
                        <span className="course-author">
                          <a href="#">Koke</a>
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
                        <a href="#">
                          Introduction to Mobile Application Development.
                        </a>
                      </h3>
                      <div className="course-meta">
                        <span className="course-category">
                          <a href="#">Web Design</a>
                        </span>
                        <span className="course-author">
                          <a href="#">Koke</a>
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
                        <a href="#">IOS Apps Programming & Development.</a>
                      </h3>
                      <div className="course-meta">
                        <span className="course-category">
                          <a href="#">Web Design</a>
                        </span>
                        <span className="course-author">
                          <a href="#">Koke</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="view-all-btn bold-font">
                  <a href="#">
                    Check Calendar <i className="fas fa-calendar-alt" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="latest-area-content ">
                <div className="section-title-2 mb65 headline text-left">
                  <h2>
                    Latest <span>Video.</span>
                  </h2>
                </div>
                <div className="latest-video-poster relative-position mb20">
                  {/* <img src={require('../../assets/img/banner/v-1.jpg')} alt="" /> */}
                  <div className="video-play-btn text-center gradient-bg">
                    <a
                      className="popup-with-zoom-anim"
                      href="https://www.youtube.com/watch?v=-g4TnixUdSc"
                    >
                      <i className="fas fa-play" />
                    </a>
                  </div>
                </div>
                <div className="vidoe-text">
                  <h3 className="latest-title bold-font">
                    <a href="#">Learning IOS Apps in Amsterdam.</a>
                  </h3>
                  <p className="mb25">
                    Lorem ipsum dolor sit amet, consectetuer delacosta
                    adipiscing elit, sed diam nonummy.
                  </p>
                </div>
                <div className="view-all-btn bold-font">
                  <a href="#">
                    View All Videos{" "}
                    <i className="fas fa-chevron-circle-right" />
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

export default LatestNews;