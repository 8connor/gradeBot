import Axios from "axios";
import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import "./index.css";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [filled, setFilled] = useState(false);


  useEffect(() => {
    Axios.get("/api/allTeachers").then((res) => {
      console.log(res);

      setTeachers(res.data);
      setFilled(true);
    });
  }, []);

  return (
    <section id="course-teacher" className="course-teacher-section">
      <div className="parallax teacherCon">
        <div className="container">
          <div className="section-title mb20 headline text-center ">
            <span className="subtitle text-uppercase">MEET OUR</span>
            <h2>
              <span>Teachers.</span>
            </h2>
          </div>
          <div className="teacher-list">
            <div className="row justify-content-center">
              {filled &&
                teachers.map((teacher, i) => 
                  <div className="col-md-3">
                    <div className="teacher-img-content ">
                      <div className="teacher-cntent">
                        <div className="teacher-social-name ul-li-block">
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
                          <div className="teacher-name">
                            <span>{teacher.firstName} #7</span>
                          </div>
                        </div>
                        <div className="teacher-img-category">
                          <div className="teacher-img">
                            <img
                              src={require("../../assets/img/teacher/t-7.jpg")}
                              alt="teacher"
                            />
                            <div className="course-price text-uppercase text-center gradient-bg">
                              <span>Featured</span>
                            </div>
                          </div>
                          <div className="teacher-category float-right">
                            <span className="st-name">Art </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teachers;
