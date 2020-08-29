import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import "./index.css";

function Top() {
    return (
        <Navbar bg="info" expand="lg" className="login">
            <Navbar.Brand href="#home">Grade Bot</Navbar.Brand> 
        </Navbar>
    )
}

export default Top