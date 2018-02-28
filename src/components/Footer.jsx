import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container footer-padding">
                    <span className="text-muted">Ebra Clothing &#169; {new Date().getFullYear()}</span>
                </div>
            </footer>
        );
    }
}

export default Footer;