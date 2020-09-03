
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Axios from "axios";

// // Only using function will change the const color


function AdminCreateUser (){


    // Only using function will change the const color
    const urlAddress = "http://localhost:3001";
    const [emailState, setemail] = useState("");
    const [passwordState, setPassword] = useState("");
    const [accessTypeState, setAccessType] = useState("");
    
    const handleSelect=(e)=>{
        console.log(e);
        setAccessType(e)
    }

    const registerUser = (e) => {

        e.preventDefault();


        console.log("In Regsiter User")

        var newUser = {
            email: emailState,
            password: passwordState,
            accessType: accessTypeState
        }

        console.log(newUser);

        Axios.post("/api/adminCreateUser", newUser)
        .then(res => {

            console.log("here")

            console.log(res.data);
        })
        .catch(err => console.log(err));

    }

    
    return (
        <Container className="adminCreateUser">
            <Card.Body>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }} sm={{ span: 6, offset: 3 }}>
                        <Form>

                            {/* New email*/}
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" 
                                    onChange={e => setemail(e.target.value)}></Form.Control>
                            </Form.Group>

                            {/* Password */}
                            {/* Need to create functionality for Temp Password */}
                            <Form.Group>
                                <Form.Label >Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password"
                                    onChange={e => setPassword(e.target.value)}></Form.Control>
                            </Form.Group>


                            {/* Access Type */}
                            {/* Selection of a Class List */}
                            <Form.Group>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Select Access Type
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item eventKey ="Student" onSelect={handleSelect}>Student</Dropdown.Item>
                                        <Dropdown.Item eventKey ="Teacher" onSelect ={handleSelect}>Teacher</Dropdown.Item>
                                        <Dropdown.Item eventKey ="Admin" onSelect ={handleSelect}>Admin</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Form.Group>

                            {/* Button to make Axios call to register user */}
                            <Row className="justify-content-md-center">
                                <Button onClick={registerUser}  variant="primary" type="submit" id="subButton">
                                    Submit
                                </Button>
                            </Row>
                            
                        </Form>
                    </Col>
                </Row>
            </Card.Body>
        </Container>
    )
    
}



export default AdminCreateUser;


