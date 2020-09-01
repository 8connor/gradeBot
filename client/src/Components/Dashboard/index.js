import React from "react"
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import "./index.css"


class Dashboard extends React.Component {
    render() {
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
}

export default Dashboard