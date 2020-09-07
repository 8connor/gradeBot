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
            studentSearch: false,
            filled: false,
            search: false,
            error: false
        };
    }

    handleClick() {
        Axios.post("/api/studentQuery", this.state.search)
            .then(res => {
                console.log(res);

                if (res.data.length === 0) {
                    this.setState({
                        error: true
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

        document.getElementById("listDiv").removeChild(document.getElementById(`listNum${index}`));

        this.state.studentArr.splice(index, 1);
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
                <div id="listDiv">
                    {
                        this.state.filled
                            ? this.state.studentArr.map((students, index) =>
                                <p key={index} id={`listNum${index}`}>{students.firstName}<Button onClick={() => this.handleDelete(index)}>Delete</Button></p>
                            ) : false
                    }
                </div>
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
            </>
        )
    }
}

export default StudentSearch;