import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from '../Login/login';
import logo from "../../image/logo.png"

class Header extends React.Component {
    render() {
        return (
            <header>
                <div id="main-menu" className="main-menu-container">
                    <div className="main-menu">
                        <div className="container">
                            <div className="navbar-default">
                                <div className="navbar-header float-left">
                                    <Link className="navbar-brand text-uppercase" to="/">
                                        <img src={logo} alt="logo" />
                                    </Link>
                                </div>

                                <div className="select-lang">
                                    <select>
                                        <option value={9}>ENG</option>
                                        <option value={10}>BAN</option>
                                        <option value={11}>ARB</option>
                                        <option value={12}>FRN</option>
                                    </select>
                                </div>
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
                                <nav className="navbar-menu float-right">
                                    <div className="nav-menu ul-li">
                                        <ul>
                                            <li className="menu-item-has-children ul-li-block">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/about-us">About Us</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                                <div className="mobile-menu">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src={logo} alt="Logo" />
                                        </Link>
                                    </div>
                                    <nav>
                                        <ul>
                                            <li>
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="/about-us">About Us</Link>
                                            </li>
                                        </ul>

                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
