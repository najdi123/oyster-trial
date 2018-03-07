import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../images/logo.gif";
import collapseIcon from "../images/collapse.png";


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-toggleable">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"><img style={{width: '40px', height: '40px'}} src={collapseIcon} alt=""/></span>
                </button>
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={logo} className="logo" alt=""/></Link>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">خانه <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    محصولات
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item nav-link" to="/Spring-summer-2018/Suits">رنگ مو</Link>

                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">درباره ما</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">تماس با ما</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
