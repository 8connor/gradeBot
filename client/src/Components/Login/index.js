import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./index.css";

class Login extends React.Component {


    handleEvent(e) {
        e.preventDefault();


        Axios
            .get("/api/allUsers")
            .then(res => {

                console.log("here")

                console.log(res.data);
            })
            .catch(err => console.log(err));

    }



    render() {
        return (
            <Container>
                <Card className="loginCon shadow-lg">
                    <Card.Body>
                        <Row>
                            <Col md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }} sm={{ span: 6, offset: 3 }} >
                                <Form>
                                    <Form.Group controlId="formGroupEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group controlId="formGroupPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Row className="justify-content-md-center">
                                        <Button onClick={this.handleEvent} variant="primary" type="submit" id="subButton">
                                            Submit
                                        </Button>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default Login;