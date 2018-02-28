import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Parallax1 from '../components/parallax.jsx';


import Jackets from "../components/Suits.jsx";

class jackets extends Component {
    render() {
        return (
            <div style={{backgroundColor: 'black'}}>
                <Navbar />




                <Parallax1/>
                <div className="container" style={{textAlign : 'center', padding:0, backgroundColor: 'black'}}>
                    <Jackets/>
                </div>
                <Footer />
            </div>
        );
    }
}

export default jackets;