import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import StudentSearch from "./studentSearch"


class ClassCreate extends React.Component {
    state = {
        currentClass: false
    }

    handleClick(e) {
        let classRoomObj = {
            name: document.getElementById("className").value,
        };

        console.log(document.getElementById("className").value);

        console.log(classRoomObj);

        Axios.post("/api/createClass", classRoomObj).then(res => {

            console.log(res);

        });
        this.setState({
            currentClass: document.getElementById("className").value
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="className">
                                <Form.Label>Class name:</Form.Label>
                                <Form.Control type="text" placeholder="Class name." />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Button type="submit" onClick={(e) => this.handleClick(e)}>Submit</Button>
                </Row>

                <Row>
                    <h1>{this.state.currentClass}</h1>
                </Row>
                {
                    this.state.currentClass ? <StudentSearch currentClass={this.state.currentClass} /> : false
                }
            </Container>
        )
    }
}

export default ClassCreate;