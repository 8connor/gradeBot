import React, {useState, useEffect } from 'react';
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
                if (scrollState !== "amir") {
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
                            <div className="cart-search float-right ul-li">
                                <ul>
                                    <li>
                                        <button
                                            type="button"
                                            className="toggle-overlay search-btn"
                                        >
                                            <i className="fas fa-search" />
                                        </button>
                                        <div className="search-body">
                                            <div className="search-form">
                                                <form action="#">
                                                    <input
                                                        className="search-input"
                                                        type="search"
                                                        placeholder="Search Here"
                                                    />
                                                    <div className="outer-close toggle-overlay">
                                                        <button type="button" className="search-close">
                                                            <i className="fas fa-times" />
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="log-in float-right">
                                <a data-toggle="modal" data-target="#myModal" href="#">
                                    log in
                                    </a>
                                <Login />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );

}

export default Header;
