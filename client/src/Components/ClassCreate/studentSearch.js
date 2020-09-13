import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Axios from "axios";

class StudentSearch extends React.Component {
  state = {
    studentArr: [],
    currentList: [],
    studentSearch: false,
    filled: false,
    currentListFilled: false,
    search: false,
    error: false,
  };

  handleClick() {
    this.setState({
      studentArr: [],
    });

    Axios.post("/api/studentQuery", this.state.search)
      .then((res) => {
        console.log(res);
        if (res.data.length === 0) {
          this.setState({
            error: true,
            filled: false,
          });
        } else if (res.data.length > 0) {
          this.setState({
            studentArr: res.data,
            filled: true,
            error: false,
          });
        }
      })
      .catch((err) => {
        this.setState({
          error: true,
        });
      });
  }

  handleChange(e) {
    let studentName = {
      firstName: e.target.value,
    };

    this.setState({
      search: studentName,
    });
  }

  handleSubmit() {
    console.log("made it here");

    let listObj = {
      students: this.state.currentList,
      className: this.props.currentClass,
    };

    console.log(this.props.currentClass);

    Axios.post("/api/addStudentList", listObj)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  handleDelete(index) {
    let tempArr = this.state.currentList.slice();

    tempArr.splice(index, 1);

    if (this.state.currentList.length === 0) {
      this.setState({
        currentList: tempArr,
        currentListFilled: false,
      });
    } else {
      this.setState({
        currentList: tempArr,
      });
    }
  }

  handleAdd(index) {
    let tempArr = this.state.currentList.slice();
    let secondTemp = this.state.studentArr.slice();

    tempArr.push(secondTemp[index]);

    secondTemp.splice(index, 1);

    console.log(tempArr);

    if (secondTemp.length === 0) {
      this.setState({
        studentArr: secondTemp,
        filled: false,
      });
    }

    this.setState({
      currentList: tempArr,
      currentListFilled: true,
    });
  }

  render() {
    return (
      <>
        <Row>
          <Col>
            <Form.Group>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Student name"
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Button type="submit" onClick={() => this.handleClick()}>
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
                    <Button key={index} onClick={() => this.handleAdd(index)}>
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
                      onClick={() => this.handleDelete(index)}
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
            <Button onClick={() => this.handleSubmit()}>submit the list</Button>
          </Row>
        ) : (
          false
        )}
      </>
    );
  }
}

export default StudentSearch;
