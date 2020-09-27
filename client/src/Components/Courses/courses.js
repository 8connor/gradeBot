import React, { useState, useEffect } from "react";
import AllAssignmentsService from "../../Services/AllAssignmentsService"

function Courses() {
  const [received, setReceived] = useState(false);
  const [classList, setClassList] = useState([]);

  useEffect(
    () => {
      const classes = async () => {
        await AllAssignmentsService.getAllClass().then(result => {
          setClassList(result);
          setReceived(true)
        })
          .catch(err => console.log(err))
      }

      classes();
    }, [])


  return (
    <section id="course-category" className="course-category-section">
      <div className="container">
        <div className="section-title mb45 headline text-center ">
          <span className="subtitle text-uppercase text-dark">COURSE CATEGORIES</span>
          <h2>
            Browse Courses
            </h2>
        </div>
        <div className="category-item">
          <div className="row justify-content-center">
            {received &&
              classList.map((classSet, i) =>
                <div className="col-md-3" key={i}>
                  <div className="category-icon-title text-center ">
                    <div className="category-icon">
                      <i className="text-gradiant flaticon-app-store" />
                    </div>
                    <div className="category-title">
                      <h4>{classSet.name}</h4>
                    </div>
                  </div>
                </div>
              )
            }

          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;