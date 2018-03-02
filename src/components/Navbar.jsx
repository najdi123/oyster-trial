import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../images/encino.png";
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
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Collection
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item nav-link" to="/Spring-summer-2018/Suits">Suits</Link>
                                    <Link className="dropdown-item nav-link" to="/Spring-summer-2018/Pants">Pants</Link>
                                    <Link className="dropdown-item nav-link" to="/Spring-summer-2018/Set">Set</Link>
                                    <Link className="dropdown-item nav-link" to="/Spring-summer-2018/Shoes">Shoes</Link>
                                    <Link className="dropdown-item nav-link" to="/Spring-summer-2018/Shirts">Shirts</Link>
                                    <Link className="dropdown-item nav-link" to="/Spring-summer-2018/Hoodies">Hoodies</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
