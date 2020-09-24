import React, { useState, useEffect, useContext } from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Button from "react-bootstrap/Button"
import Login from '../Login/login';
import AuthService from '../../Services/AuthService';
import { AuthContext } from '../../Context/AuthContext';
import logo from "../../assets/img/logo/bluerobot2.png"

function Header() {
    const { isAuthenticated, user, setIsAuthenticated, setUser } = useContext(AuthContext);

    let listener = null
    const [scrollState, setScrollState] = useState("clear");
    const [userRole, setUserRole] = useState("");

    console.log(scrollState)

    useEffect(
        () => {
            setUserRole(user.accessType);
        }
    )


    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop
            if (scrolled >= 120) {
                if (scrollState !== "bg-dark") {
                    setScrollState("bg-dark")
                }
            } else {
                if (scrollState !== "top") {
                    setScrollState("clear")
                }
            }
        })
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [scrollState])


    const onClickLogoutHandler = () => {
        AuthService.logout().then(data => {
            if (data.success) {
                setUser(data.user);
                setIsAuthenticated(false);
            }
        });
    }

    const unauthenticatedNavBar = () => {

        return (
            <>
                {/* It's only here to create a link */}
                {/* <div className="log-in float-right">
                    <a data-toggle="modal" data-target="#myModal" href="#">
                        log in
                                </a>
                    <Login />
                </div> */}

                <li>
                    <Link to="/login" >Login</Link>
                </li>

            </>
        )
    }


    const notAdminUserNavLink = () => {

        return (
            <>
                {(userRole === "teacher") ? <Button href="/createForm">Create Assignment</Button> : null}

            </>
        )
    }

    const adminUserNavLinks = () => {
        return (
            <>
                {/* <Button href="/createForm">Create Assignment</Button>
                <Button href="/classCreate">Create Class</Button>
                <Button href="/adminCreateUser">Admin Create User</Button> */}





                <li>
                    <Link to="/classCreate">Create Class</Link>
                </li>

                <li>
                    <Link to="/adminCreateUser">Create User</Link>
                </li>

                <li>
                    <Link to="/createForm">Create Assignment</Link>
                </li>


            </>
        )
    }


    const authenticatedNavBar = () => {
        return (
            <>
                {(userRole === "admin") ? adminUserNavLinks() : notAdminUserNavLink()}



                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>

                <li>
                    <Link to="/allAssignments">all assignments</Link>
                </li>

                <li>
                    <Link to="/logout" onClick={onClickLogoutHandler}>Logout</Link>
                </li>


            </>
        )
    }

    return (
        <header>
            <div id="main-menu" className={`main-menu-container ${scrollState}`} >
                <div className="main-menu">
                    <div className="container">
                        <div className="navbar-default">
                            <div className="navbar-header float-left">
                                <Link className="navbar-brand text-uppercase" to="/">
                                    <img style={{ maxWidth: "200px", padding: "0" }}src={logo} alt="logo" />
                                </Link>
                            </div>




                            <nav className="navbar-menu float-right">
                                <div className="nav-menu ul-li">
                                    <ul>

                                        <li className="menu-item-has-children ul-li-block">
                                            <Link to="/">Home</Link>

                                            <ul className="sub-menu">
                                                <li>
                                                    <Link to="/#teachers">Featured Teachers</Link>
                                                </li>
                                                <li>
                                                    <Link to="/#contact">Contact us</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        {isAuthenticated ? authenticatedNavBar() : unauthenticatedNavBar()}
                                    </ul>

                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );

}

export default Header;
