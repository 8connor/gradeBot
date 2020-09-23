import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./index.css"

function Teachers(props) {

  const [teacherArr, setTeacherArr] = useState([]);
  const [gotRes, setGotRes] = useState(false)

  useEffect(() => {
    Axios.get("/api/allTeachers").then(res => {
      console.log(res);

      setTeacherArr(res.data)
      setGotRes(true)
    })
  }, []);


  return (
    <section id="course-category" className="course-category-section">
      <div >
        <div className="container">
          <div className="section-title mb20 headline text-center ">
            <span className="subtitle text-uppercase">MEET OUR</span>
            <h2>
              <span>Teachers.</span>
            </h2>
            <br />
            <br />
            <br />
          </div>
          <div className="teacher-list">
            <div className="row justify-content-center">
              {gotRes && teacherArr.map((teacher, i) =>
                <div className="col-md-3" key={i}>
                  <div className="teacher-img-content ">
                    <div className="teacher-cntent">
                      <div className="teacher-social-name ul-li-block">
                        <ul>
                          <li>
                            <a href={`mailto: ${teacher.email}`}>
                              <i className="fas fa-envelope-square"></i>
                            </a>
                          </li>
                          <br />
                          <br />
                          <br />
                        </ul>
                        <div className="teacher-name">
                          <span>{teacher.firstName} {teacher.lastName}</span>
                        </div>
                      </div>
                      <div className="teacher-img-category">
                        <div className="teacher-img">
                          <img src={require("../../assets/img/teacher/t-1.jpg")} alt="teacher" />
                          <div className="course-price text-uppercase text-center gradient-bg">
                            <span>Featured</span>
                          </div>
                        </div>
                        <div className="teacher-category float-right">
                          <span className="st-name"></span>
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
