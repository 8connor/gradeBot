import React from "react"
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./index.css"


class Dashboard extends React.Component {
    handleClick(e){
        e.preventDefault();


    }

    render() {
        return (
            <div className="sideNav bg-dark" id="sideBar">
                <Container>
                    <Row>
                        <Col className="sideCon">
                            <Link className="nav-item nav-link">
                              Home
                            </Link>
                            <Link className="nav-item nav-link">
                              students
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Dashboard