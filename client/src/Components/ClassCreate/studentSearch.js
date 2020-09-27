import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


import ClassCreateService from "../../Services/ClassCreateService";
import Axios from "axios";

function StudentSearch(props) {
  const [studentArr, setStudentArr] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  const [filled, setFilled] = useState(false);
  const [currentListFilled, setCurrentListFilled] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  const handleClick = () => {
    console.log(search)
   Axios.post("/api/studentQuery", search)
      .then((res) => {
        setStudentArr(res.data);
        console.log(studentArr);
        setError(res.data.length === 0 ? true : false);
        setFilled(res.data.length === 0 ? false : true);
      })
      .catch((err) => {
        setError(true);
      });
  };
  // End HandleClick

  const handleChange = (e) => {
    let studentName = {
      firstName: e.target.value,
    };

    setSearch(studentName);
  };

  const handleSubmit = () => {
    console.log("made it here");

    let listObj = {
      students: currentList,
      className: props.currentClass,
    };

    console.log(props.currentClass);

    ClassCreateService.addStudentList(listObj)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleDelete = (index) => {
    let tempArr = currentList.slice();

    tempArr.splice(index, 1);

    setCurrentList(tempArr);
    setCurrentListFilled(currentList.length === 0 ? false : true);
  };

  const handleAdd = (index) => {
    let tempArr = currentList.slice();
    let secondTemp = studentArr.slice();

    tempArr.push(secondTemp[index]);

    secondTemp.splice(index, 1);

    console.log(tempArr);

    if (secondTemp.length === 0) {
      setStudentArr(secondTemp);
      setFilled(false);
    }

    setCurrentList(tempArr);
    setCurrentListFilled(true);
  };

  return (
    <>
      <Row>
        <Col>
          <Form.Group>
            <Form.Control
              size="lg"
              type="text"
              placeholder="Student name"
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Button type="submit" onClick={() => handleClick()}>
          Search
        </Button>
      </Row>
      <Row className="justify-content-center">
        <Col sm={12} md={12} lg={12} id="searchDiv">
          {filled ? <h4>Search Results: </h4> : false}
          {filled
            ? studentArr.map((students, index) => (
                <>
                  <p key={index} id={`searchNum${index}`}>
                    {students.firstName}
                  </p>
                  <Button key={index} onClick={() => handleAdd(index)}>
                    Add
                  </Button>
                </>
              ))
            : false}
        </Col>
        <Col sm={12} md={12} lg={12} id="listDiv">
          {currentListFilled ? (
            <h4>Current students you wish to add: </h4>
          ) : (
            false
          )}
          {currentListFilled
            ? currentList.map((students, index) => (
                <>
                  <p key={index} id={`listNum${index}`}>
                    {students.firstName}
                  </p>
                  <Button key={index} onClick={() => handleDelete(index)}>
                    Delete
                  </Button>
                </>
              ))
            : false}
        </Col>
        {error ? <p>Search Failed! Please try again.</p> : false}
      </Row>
      {currentListFilled ? (
        <Row className="justify-content-center">
          <Button onClick={() => handleSubmit()}>submit the list</Button>
        </Row>
      ) : (
        false
      )}
    </>
  );
}

export default StudentSearch;
