import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import "./index.css";
import { Button } from "react-bootstrap";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router-dom";


class Top extends React.Component {


    handleClick(e) {
        e.preventDefault();

        if (document.getElementById("sideNav").classList.contains("navShow")) {
            document.getElementById("sideNav").classList.toggle("navHidden");
            document.getElementById("sideNav").classList.toggle("navShow");
        } else if (document.getElementById("sideNav").classList.contains("navHidden")) {
            document.getElementById("sideNav").classList.toggle("navHidden");
            document.getElementById("sideNav").classList.toggle("navShow");
        }

    }


    render() {
        return (
            <Navbar bg="info" expand="lg" className="login">
                <Navbar.Brand href="/" className="brand">Grade Bot</Navbar.Brand>
                <Switch>
                    <Route path="/dashboard">
                        <Button onClick={this.handleClick}><span className="navbar-toggler-icon"></span></Button>
                    </Route>
                    <Route path="/createAssignment">
                        <Button onClick={this.handleClick}><span className="navbar-toggler-icon"></span></Button>
                    </Route>
                    <Route path="/allAssignments">
                        <Button onClick={this.handleClick}><span className="navbar-toggler-icon"></span></Button>
                    </Route>
                    <Route path="/grade">
                        <Button onClick={this.handleClick}><span className="navbar-toggler-icon"></span></Button>
                    </Route>

                    <Route path="/adminCreateUser">
                        <Button onClick={this.handleClick}><span className="navbar-toggler-icon"></span></Button>
                    </Route>

                </Switch>
            </Navbar>
        )
    }
}

export default Top