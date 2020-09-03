
import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Axios from "axios";


class AdminCreateUser extends React.Component{

    // Only using function will change the const color
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [accessType, setAccessType] = useState("");


    render(){
        return (
            <Container className="adminCreateUser">
                <Card.Body>
                    <Row>
                        <Col md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }} sm={{ span: 6, offset: 3 }}>
                            <Form>
                                {/* New UserName*/}
                                <Form.Group controlId="formUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="username" placeholder="Enter Username" 
                                        onChange={e => setUsername(e.target.value)}></Form.Control>
                                </Form.Group>

                                {/* Password */}
                                {/* Need to create functionality for Temp Password */}
                                <Form.Group>
                                    <Form.Label controlId="formPassword">Password</Form.Label>
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
                                            <Dropdown.Item>Student</Dropdown.Item>
                                            <Dropdown.Item>Teacher</Dropdown.Item>
                                            <Dropdown.Item>Admin</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Card.Body>
            </Container>
        )
    }
}


export default AdminCreateUser;


