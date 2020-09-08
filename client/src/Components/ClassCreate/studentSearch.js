import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import ClassCreate from "./NewFile.js";

class StudentSearch extends ClassCreate {
    constructor(props) {
        super(props)
        this.state = {
            studentArr: [],
            currentList: [],
            studentSearch: false,
            filled: false,
            currentListFilled: false,
            search: false,
            error: false
        };
    }

    handleClick() {
        this.setState({
            studentArr: []
        });

        Axios.post("/api/studentQuery", this.state.search)
            .then(res => {
                console.log(res);
                if (res.data.length === 0) {
                    this.setState({
                        error: true,
                        filled: false,
                    })
                } else if (res.data.length > 0) {
                    this.setState({
                        studentArr: res.data,
                        filled: true,
                        error: false
                    });
                }
            })
            .catch(err => {
                this.setState({
                    error: true
                });
            });
    }

    handleChange(e) {
        let studentName = {
            firstName: e.target.value
        };

        this.setState({
            search: studentName
        });
    }

    handleDelete(index) {
        this.state.currentList.splice(index, 1);

        if (this.state.currentList.length === 0) {
            this.setState({
                currentListFilled: false
            })
        } else {
            this.forceUpdate();
        }

    }

    handleAdd(index) {
        this.state.currentList.push(this.state.studentArr[index])
        this.state.studentArr.splice(index, 1);

        console.log(this.state.currentList)

        if (this.state.studentArr.length === 0) {
            this.setState({
                filled: false
            })
        } 

        this.setState({
            currentListFilled: true
        })
    }

    handleSubmit(){
        console.log("made it here")

        Axios.post("/api/addStudentList", this.state.currentList)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }


    render() {
        return (
            <>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control size="lg" type="text" placeholder="Student name" onChange={(e) => this.handleChange(e)} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Button type="submit" onClick={() => this.handleClick()}>Search</Button>
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12} id="searchDiv">
                        {
                            this.state.filled ? <h4>Search Results: </h4>
                                : false
                        }
                        {
                            this.state.filled
                                ? this.state.studentArr.map((students, index) =>
                                    <>
                                        <p key={index} id={`searchNum${index}`}>{students.firstName}</p>
                                        <Button key={index} onClick={() => this.handleAdd(index)}>Add</Button>
                                    </>
                                ) : false
                        }
                    </Col>
                    <Col sm={12} md={12} lg={12} id="listDiv">
                        {
                            this.state.currentListFilled ? <h4>Current students you wish to add: </h4>
                                : false
                        }
                        {
                            this.state.currentListFilled
                                ? this.state.currentList.map((students, index) =>
                                    <>
                                        <p key={index} id={`listNum${index}`}>{students.firstName}</p>
                                        <Button key={index} onClick={() => this.handleDelete(index)}>Delete</Button>
                                    </>
                                ) : false
                        }
                    </Col>
                    {
                        this.state.error
                            ?
                            <Container>
                                <Row className="justify-content-center text">
                                    Search Failed! Please try again.
                            </Row>
                            </Container>
                            : false
                    }
                </Row>


            </>
        )
    }
}

export default StudentSearch;