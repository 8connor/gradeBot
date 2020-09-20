
import React, { useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import StudentSearch from "./studentSearch";
import TeacherSelect from "./teacher";

import CreateClassService from "../../Services/ClassCreateService";

import { AuthContext } from "../../Context/AuthContext";


function ClassCreate() {
  const authContext = useContext(AuthContext);

  const [currentClass, setCurrentClass] = useState(null);
  const [classCreated, setClassCreated] = useState(false);
  const [errorHandle, setErrorHandle] = useState(false);


  const handleClick = (e) => {
    setCurrentClass(e.target.value)

    let classRoomObj = {
      name: document.getElementById("className").value,
    };

    console.log(document.getElementById("className").value);

    console.log(classRoomObj);

    CreateClassService.createClass(classRoomObj)
      .then((res) => {
        console.log(res);

        if (res.data.name === "MongoError") {
          setErrorHandle(true)
        } else {
          setErrorHandle(false)
        }
      });



    setCurrentClass(document.getElementById("className").value);
    setClassCreated(true);
  }

  
  const handleSubmit = (e) => {
    // Checks to see if you entered the "RETURN" key
    e.stopPropagation();
    if (e.key === "Enter") {
      handleClick();
    }
  }

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
              <TeacherSelect currentClass={currentClass} classCreated={classCreated} />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Button type="submit" onClick={(e) => handleClick(e)}>
              Submit
            </Button>
          </Row>
          <Row className="justify-content-center">
            {errorHandle && <p className="text-danger">Error this class has already been made!</p>}
          </Row>


          <Row>
            {currentClass ? (
              <h1>Currently selected class: {currentClass}</h1>
            ) : (
                false
              )}
          </Row>

          {currentClass ? (
            <StudentSearch currentClass={currentClass} />
          ) : (
              false
            )}
        </Card.Body>
      </Card>
    </Container>
  );

}

export default ClassCreate;



