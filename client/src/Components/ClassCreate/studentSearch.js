import React, {useEffect} from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Axios from "axios";

import ClassCreateService from "../../Services/ClassCreateService";


function StudentSearch () {

  const [studentArr, setStudentArr] = useEffect([]);
  const [currentList, setCurrentList] = useEffect([]);
  const [studentSearch, setStudentSearch] = useEffect(false);
  const [filled, setFilled] = useEffect(false);
  const [currentListFilled, setCurrentListFilled] = useEffect(false);
  const [search, setSearch] = useEffect(false);
  const [error, setError] = useEffect(false);


  const handleClick = () => {
    this.setState({
      studentArr: [],
    });

    ClassCreateService.createStudentQuery(search)
    .then((res) => {
      console.log(res);

      setStudentArr(res.data);
      setError(res.data.length === 0 ? true : false);
      setFilled(res.data.length === 0 ? false : true);

    })
    .catch((err) => {

      setError(true);

    });
  }
  // End HandlClick


  const handleChange = (e) => {

    let studentName = {
      firstName: e.target.value,
    };

    setSearch(studentName);
  }

  const handleSubmit = () => {
    console.log("made it here");

    let listObj = {
      students: this.state.currentList,
      className: this.props.currentClass,
    };

    console.log(this.props.currentClass);

    ClassCreateService.addStudentList(listObj)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

      
  }

  const handleDelete = (index) => {
    let tempArr = currentList.slice();

    tempArr.splice(index, 1);

    setCurrentList(tempArr);
    setCurrentListFilled(currentList.length === 0 ? false : true);

  }

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
    
  }


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
          {this.state.filled ? <h4>Search Results: </h4> : false}
          {this.state.filled
            ? this.state.studentArr.map((students, index) => (
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
          {this.state.currentListFilled ? (
            <h4>Current students you wish to add: </h4>
          ) : (
              false
            )}
          {this.state.currentListFilled
            ? this.state.currentList.map((students, index) => (
              <>
                <p key={index} id={`listNum${index}`}>
                  {students.firstName}
                </p>
                <Button
                  key={index}
                  onClick={() => handleDelete(index)}
                >
                  Delete
                  </Button>
              </>
            ))
            : false}
        </Col>
        {this.state.error ? <p>Search Failed! Please try again.</p> : false}
      </Row>
      {this.state.currentListFilled ? (
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


