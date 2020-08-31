import React from "react"
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";


function SideNav() {
    return (
        <div className="container-fluid navHidden" id="sideNav">
            <div className="row">
                <div className="sideNav bg-dark" id="sideBar">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                        <div className="sidebar-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">
                                        <span data-feather="home"></span>
                                        Dashboard
                                    <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default SideNav;