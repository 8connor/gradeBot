

import React, {useState, useContext} from "react";
import AuthService from  "../../Services/AuthService";
import Message from "../Message"; // Message from the server
import {AuthContext} from "../../Context/AuthContext"; // Global State components



const Login = props => {

    const [user,setUser] = useState({email: "", password : ""});
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onChange = (e) => {
        e.preventDefault();

        setUser({...user,[e.target.name] : e.target.value});
    }

    const onSubmit = e => {
        e.preventDefault();

        console.log("IN on Submit")
        console.log(user);
        
        AuthService.login(user).then(data => {
           
            console.log("in Login about to make Call")
            console.log(data);
            
            const {isAuthenticated, user, message} = data;

            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);

                // here we going to navigate to our todos page
                props.history.push("/dashboard");
            }
            else {
                setMessage(message);
            }
        })
    }
    return(

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
                {/* In case we have a message to display */}
                {message ? <Message message={message}/> : null}
            </Container>

    )
}



export default Login;


