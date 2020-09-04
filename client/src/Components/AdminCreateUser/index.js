
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Axios from "axios";
import DropdownButton from 'react-bootstrap/DropdownButton';

// // Only using function will change the const color


function AdminCreateUser (){


    // Only using function will change the const color
    const [dropDownValue, setDropDownValue] = useState("");
    const [firstNameState, setFirstName] = useState("");
    const [lasttNameState, setLastName] = useState("");
    const [emailState, setEmail] = useState("");
    const [passwordState, setPassword] = useState("");
    const [accessTypeState, setAccessType] = useState("");
    const [titleState, setTitle] = useState("");
    const [classroomState, setClassroom] = useState("");

    const [classrooms, setCountries] = React.useState(
        [
            {id: 'Class1', name: 'Class1'},
            {id: 'Class2', name: 'Class2'},
            {id: 'Class3', name: 'Class3'}
        ]);


    const countriesList = classrooms.length > 0
    	&& classrooms.map((item, i) => {
      return (
        <Dropdown.Item key={i} eventKey={item.name} value={item.id}>{item.name}</Dropdown.Item>
      )
    }, this);


    const handleSelect=(e)=>{
        setTitle(e);
        setAccessType(e);
    }

    const handleClassroom=(e)=>{
        setClassroom(e);
    }


    const registerUser = (e) => {

        e.preventDefault();

        var newUser = {
            firstName: firstNameState,
            lastName: lasttNameState,
            email: emailState,
            password: passwordState,
            accessType: accessTypeState,
            classroom: classroomState
        };

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

                            {/* First Name */}
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="firstName" placeholder="Enter First Name" 
                                    onChange={e => setFirstName(e.target.value)}></Form.Control>
                            </Form.Group>


                            {/* Last Name */}
                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="lastName" placeholder="Enter Last Name" 
                                    onChange={e => setLastName(e.target.value)}></Form.Control>
                            </Form.Group>


                            {/* New email*/}
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" 
                                    onChange={e => setEmail(e.target.value)}></Form.Control>
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
                                <DropdownButton
                                    alignRight
                                    title={(titleState === "") ? "Select Access Type" : titleState}
                                    id="dropdown-menu-align-right"
                                    onSelect={handleSelect}
                                        > 
                                        <Dropdown.Item eventKey ="Student">Student</Dropdown.Item>
                                        <Dropdown.Item eventKey="Teacher">Teacher</Dropdown.Item>
                                        <Dropdown.Item eventKey="Admin">Admin</Dropdown.Item>
                                        {/* <Dropdown.Divider />
                                        <Dropdown.Item eventKey="some link">some link</Dropdown.Item> */}
                                </DropdownButton>
                            </Form.Group>


                            {/* Assign Class */}
                            <Form.Group>
                                <DropdownButton
                                    alignRight
                                    title={(titleState === "Student") ? "Select Student Classroom" : "Select Teacher Class"}
                                    id="dropdown-classroom"
                                    onSelect={handleClassroom}
                                >
                                    {countriesList}

                                </DropdownButton>
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


