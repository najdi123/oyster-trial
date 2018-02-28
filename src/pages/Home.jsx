import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Slick from '../components/Carousel.jsx';
import HomeParallax from '../components/HomeParallax.jsx';





class Home extends Component {
    render() {
        return (
            <div >
                <Navbar />

                <div className="container-fluid" style={{textAlign : 'center'}}>
                    <div className="row">
                        <div className="col-sm-12" style={{padding : 0}}>
                            <Slick/>
                        </div>
                        <div className="col-sm-12" style={{padding : 0}}>
                            <HomeParallax/>
                        </div>


                    </div>



                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;