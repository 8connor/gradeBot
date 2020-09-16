import React, {useContext} from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { Button } from "react-bootstrap";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router-dom";

import {Link} from 'react-router-dom';
import AuthService from '../../Services/AuthService';
import { AuthContext } from '../../Context/AuthContext';

const Top = props => {
    
    const {isAuthenticated,user,setIsAuthenticated,setUser} = useContext(AuthContext);
    
    const onClickLogoutHandler = ()=>{
        AuthService.logout().then(data=>{
            if(data.success){
                setUser(data.user);
                setIsAuthenticated(false);
            }
        });
    }

    const handleClick = (e) =>{
        e.preventDefault();

        if (document.getElementById("sideNav").classList.contains("navShow")) {
            document.getElementById("sideNav").classList.toggle("navHidden");
            document.getElementById("sideNav").classList.toggle("navShow");
        } else if (document.getElementById("sideNav").classList.contains("navHidden")) {
            document.getElementById("sideNav").classList.toggle("navHidden");
            document.getElementById("sideNav").classList.toggle("navShow");
        };
    }


    const unauthenticatedNavBar = ()=>{
        console.log("In unauthenticatedNavBar")
        return (
            <>
                {/* It's only here to create a link */}
                <Nav.Link href="/login">Login</Nav.Link>

            </>
        )
    }


    const authenticatedNavBar = ()=>{
        return(
            <>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/createAssignment">Create Assignment</Nav.Link>
                <Nav.Link href="/allAssignments">All Assignments</Nav.Link>
                <Nav.Link href="/grade">Grade</Nav.Link>
                <Nav.Link href="/adminCreateUser">Admin Create User</Nav.Link>
                <Nav.Link href="/createClass">Create Class</Nav.Link>

            </>
        )
    }
    return(

        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Grade Bot</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
               
                { isAuthenticated ? authenticatedNavBar() : unauthenticatedNavBar()}    

            </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default Top;



