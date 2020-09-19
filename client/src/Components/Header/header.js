import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Button from "react-bootstrap/Button"
import Login from '../Login/login';
import logo from "../../image/logo.png"


function Header() {


    let listener = null
    const [scrollState, setScrollState] = useState("clear")

    console.log(scrollState)

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

                            <Button variant={"dark"}>
                                Hello
                            </Button>
                            {
                                window.location === "/login" ?
                                    <div className="log-in float-right">
                                        <a data-toggle="modal" data-target="#myModal" href="#">
                                            log in
                                    </a>
                                        <Login />
                                    </div>
                                : false
                            }

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );

}

export default Header;
