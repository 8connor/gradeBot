
import React { useContext, useEffect }from "react"
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "./index.css"

import { AuthContext } from "../../Context/AuthContext";
import { useEffect } from "react";


function Dashboard () {
    const authContext = useContext(AuthContext);

    useEffect(){
        console.log(authContext);
    }

    // Based on the Access Type we can populate the Header below
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Student Grades</h1>
                </Col>
            </Row>
        </Container>
    )
}



export default Dashboard;

