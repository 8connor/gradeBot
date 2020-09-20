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
import logo from "../../image/logo.png"

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
                <Button href="/login">Login</Button>

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
            </>
        )
    }


    const authenticatedNavBar = () => {
        return (
            <>
                {/* <Button href="/dashboard">Dashboard</Button>
                <Button href="/allAssignments">All Assignments</Button> */}

                {(userRole === "admin") ? adminUserNavLinks() : notAdminUserNavLink()}
                {/* <Button onClick={onSubmit}  href="/logout">Logout</Button> */}
                {/* <Button onClick={onClickLogoutHandler} >Logout</Button> */}
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
                                    <img src={logo} alt="logo" />
                                </Link>
                            </div>

                            {isAuthenticated ? authenticatedNavBar() : unauthenticatedNavBar()}
                           
                            <div className="log-in float-right">
                                <a data-toggle="modal" data-target="#myModal" href="#">
                                    log in
                                </a>
                                <Login />
                            </div>
                            <nav className="navbar-menu float-right">
                                <div className="nav-menu ul-li">
                                    <ul>
                                        <li className="menu-item-has-children ul-li-block">
                                            <Link to="/">Home</Link>

                                            <ul className="sub-menu">
                                                <li>
                                                    <Link to="/">Home 1</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-2">Home 2</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-3">Home 3</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-4">Home 4</Link>
                                                </li>
                                            </ul>

                                        </li>
                                        <li>
                                            <Link to="/about-us">About Us</Link>
                                        </li>

                                        <li>
                                            <Link to="/shop">shop</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact Us</Link>
                                        </li>
                                        <li className="menu-item-has-children ul-li-block">
                                            <Link to="/#!">Pages</Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link to="/teacher">Teacher</Link>
                                                </li>
                                                <li>
                                                    <Link to="/teacher-details">Teacher Details</Link>
                                                </li>
                                                <li>
                                                    <Link to="/blog">Blog</Link>
                                                </li>
                                                <li>
                                                    <Link to="/blog-single">Blog Single</Link>
                                                </li>
                                                <li>
                                                    <Link to="/course">Course</Link>
                                                </li>
                                                <li>
                                                    <Link to="/course-details">Course Details</Link>
                                                </li>
                                                <li>
                                                    <Link to="/faq">FAQ</Link>
                                                </li>
                                                <li>
                                                    <Link to="/checkout">CheckOut</Link>
                                                </li>
                                            </ul>
                                        </li>

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
