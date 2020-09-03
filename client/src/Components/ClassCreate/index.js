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

        var classRoomObj = {
            name: document.getElementById("className").value,
        }

        Axios.post("/api/createClass", classRoomObj).then(res => console.log(res))
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="className">
                                <Form.Label>Class name:</Form.Label>
                                <Form.Control type="text" placeholder="Task name." />
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