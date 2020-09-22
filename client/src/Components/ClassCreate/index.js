import React, { useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StudentSearch from "./studentSearch";
import Axios from "axios";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import CreateClassService from "../../Services/ClassCreateService";

function ClassCreate(props) {
  const [currentClass, setCurrentClass] = useState("");
  const [classCreated, setClassCreated] = useState(false);
  const [errorHandle, setErrorHandle] = useState(false);
  const [alreadyCreated, setAlreadyCreated] = useState(false);
  const [teacherList, setTeacherList] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [selectedTeacherID, setSelectedTeacherID] = useState("");

  useEffect(() => {
    const get = async () => {
      const theTeachers = await Axios.get("/api/allTeachers");

      setTeacherList(theTeachers.data);
    };

    get();
  }, []);

  if (classCreated === true) {
    assignTeacher();
  }

  const assignTeacher = () => {
    let teachObj = {
      teacherName: selectedTeacher,
      teacherID: selectedTeacherID,
      classRoom: document.getElementById("className").value, // Where is this being used?
    };

    Axios.post("/api/updateTeacher", teachObj)
    .then((res) => console.log(res));
  };

  const handleClick = (e) => {
    setCurrentClass(e.target.value);

    let classRoomObj = {
      name: document.getElementById("className").value,
    };

    CreateClassService.createClass(classRoomObj).then((res) => {
      console.log(res);

      if (res.name === "MongoError") {
        setErrorHandle(true);
      } else {
        setClassCreated(true);
        setCurrentClass(document.getElementById("className").value);
        setErrorHandle(false);
      }
    });
  };

  const handleNewClick = (e) => {
    setSelectedTeacherID(e);
  };

  const handleSelect = (e) => {
    setSelectedTeacher(e);
  };

  const handleSubmit = (e) => {
    // Checks to see if you entered the "RETURN" key
    e.stopPropagation();
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleDecision = (e) => {
    console.log(e.target.innerHTML);

    if (e.target.innerHTML === "Yes") {
      setAlreadyCreated(true);
    }
  };

  return (
    <Container>
      <Card className="shadow-lg">
        <Card.Body>
          <Row>
            <Col>
              <Form onSubmit={(e) => e.preventDefault()}>
                <Form.Group controlId="className">
                  <Form.Label>Class name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Class name."
                    contentEditable={true}
                    onKeyPress={(e) => handleSubmit(e)}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <p>Select a teacher:</p>
              <DropdownButton
                title={
                  selectedTeacher === ""
                    ? "Select a teacher name here"
                    : selectedTeacher
                }
                onSelect={handleSelect}
              >
                {teacherList &&
                  teacherList.map((teacher, index) => (
                    <Dropdown.Item
                      key={index}
                      eventKey={teacher.firstName}
                      value={teacher._id}
                      onClick={() => handleNewClick(teacher.teacherID)}
                    >
                      {teacher.firstName}
                    </Dropdown.Item>
                  ))}
              </DropdownButton>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Button type="submit" onClick={(e) => handleClick(e)}>
              Submit
            </Button>
          </Row>
          <Row className="justify-content-center">
            {errorHandle && (
              <p className="text-danger">
                Error this class has already been made!
              </p>
            )}
          </Row>

          <Row>
            {currentClass && <h1>Currently selected class: {currentClass}</h1>}
          </Row>

          {alreadyCreated && <StudentSearch currentClass={currentClass} />}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ClassCreate;
