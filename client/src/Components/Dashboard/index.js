
import React, { useContext, useEffect, useState }from "react"
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "./index.css"

import { AuthContext } from "../../Context/AuthContext";


function Dashboard () {
    const authContext = useContext(AuthContext);
    const [userRole, setUserRole] = useState("");

    useEffect(
        () => {
            console.log("In dashboard");
            console.log(authContext);
            let role = "";

            if(authContext.user.accessType === "admin")
                role = "Admin Dashboard"
            else if(authContext.user.accessType === "teacher")
                role = "Teacher Dashboard";
            else if(authContext.user.accessType === "student")
                role = "Student Dashboard";
            
            setUserRole(role);

        }
    )
        
    

    // Based on the Access Type we can populate the Header below
    return (
        <Container>
            <Row>
                <Col>
                    <h1>{userRole}</h1>
                </Col>
            </Row>
        </Container>
    )
}



export default Dashboard;

