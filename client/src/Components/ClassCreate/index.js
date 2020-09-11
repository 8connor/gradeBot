import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import Card from "react-bootstrap/Card";
import StudentSearch from "./studentSearch";

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


    handleSubmit(e) {
        e.stopPropagation();
        if (e.key === "Enter") {
            this.handleClick();
        }
    }

    render() {
        return (
            <Container>
                <Card className="shadow-lg">
                    <Card.Body>
                        <Row>
                            <Col>
                                <Form onSubmit={(e) => e.preventDefault()}>
                                    <Form.Group controlId="className">
                                        <Form.Label>Class name:</Form.Label>
                                        <Form.Control type="text" placeholder="Class name." contentEditable={true} onKeyPress={(e) => this.handleSubmit(e)} />
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Button type="submit" onClick={(e) => this.handleClick(e)}>Submit</Button>
                        </Row>

                        <Row className="">
                            {
                                this.state.currentClass ? <h1>Currently selected class: {this.state.currentClass}</h1> : false
                            }
                        </Row>

                        {
                            this.state.currentClass ? <StudentSearch currentClass={this.state.currentClass} /> : false
                        }

                    </Card.Body>
                </Card>

            </Container>
        )
    }
}

export default ClassCreate;