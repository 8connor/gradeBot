import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import "./index.css";
import { Button } from "react-bootstrap";

class Top extends React.Component {

    handleClick(e) {
        e.preventDefault();

        document.getElementById("sideNav").classList.toggle("navHidden")

    }


    render() {
        return (
            <Navbar bg="info" expand="lg" className="login">
                <Navbar.Brand href="#" className="brand">Grade Bot</Navbar.Brand>
                <Button onClick={this.handleClick}><span className="navbar-toggler-icon"></span></Button>
            </Navbar>
        )
    }
}

export default Top