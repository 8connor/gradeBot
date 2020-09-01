import React from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Axios from "axios";

class CreateForm extends React.Component {
    handleClick(e) {
        e.preventDefault();

        var assignmentObj = {
            Task: document.getElementById("taskType").value,
            taskName: document.getElementById("taskName").value,
            requirements: document.getElementById("taskRequirements").value
        }

        Axios.post("/api/createAssignment", assignmentObj).then(res => console.log(res))
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form><Form.Group controlId="taskType">
                            <Form.Label>Task type:</Form.Label>
                            <Form.Control as="select">
                                <option>Quiz</option>
                                <option>Test</option>
                                <option>Homework</option>
                            </Form.Control>
                        </Form.Group>
                            <Form.Group controlId="taskName">
                                <Form.Label>Task name:</Form.Label>
                                <Form.Control type="text" placeholder="Task name." />
                            </Form.Group>
                            <Form.Group controlId="taskRequirements">
                                <Form.Label>Task requirements:</Form.Label>
                                <Form.Control as="textarea" placeholder="This is where you will type out the requirements for the task." rows="10" />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Button type="submit" onClick={this.handleClick}>Submit</Button>
                </Row>
            </Container>
        )
    }
}

export default CreateForm;