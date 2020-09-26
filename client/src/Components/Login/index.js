

import React, { useState, useContext } from "react";
import AuthService from "../../Services/AuthService";

import { AuthContext } from "../../Context/AuthContext"; // Global State components


import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


const Login = props => {

    const [user, setUser] = useState({ email: "", password: "" });
  
    const authContext = useContext(AuthContext);

    const onChange = (e) => {
        e.preventDefault();

        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();


        AuthService.login(user).then(data => {


            const { isAuthenticated, user } = data;

            if (isAuthenticated) {
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);

                // here we going to navigate to our todos page
                props.history.push("/dashboard");
            }
        })
    }
    return (

        <Container className="loginCon shadow-lg">
            <Card>
                <Card.Body>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }} sm={{ span: 6, offset: 3 }} >

                            <Form>

                                <Form.Group controlId="email">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        onChange={onChange}
                                        placeholder="Enter Email" />
                                </Form.Group>
                                <Form.Group controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        onChange={onChange}
                                        placeholder="Enter Password" />
                                </Form.Group>
                                <Row className="justify-content-center">
                                    <Button onClick={onSubmit} variant="primary" type="submit" id="subButton">
                                        Log In
                                    </Button>
                                </Row>

                            </Form>

                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }} sm={{ span: 6, offset: 3 }}>

    

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>


    )
}



export default Login;


