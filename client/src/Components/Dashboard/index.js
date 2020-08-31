import React from "react"
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css"


class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashCon">
                <Container>
                    <Row>
                        <Col>
                            <h1>Hello</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Dashboard