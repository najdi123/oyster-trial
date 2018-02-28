
import React, { Component } from 'react';
import './HomeParallax.css';
import { Link } from 'react-router-dom';



class FlexPage extends Component {
    render() {
        return (

            <div>




                <section className="section section-dark">
                    <h2></h2>

                </section>

                <Link to="/Spring-Summer-2018/Jackets">
                    <div className="pic2">
                        <div className="ptext">
                      <span className="border trans">
                        <h1>Jackets</h1>
                      </span>
                        </div>
                    </div>
                </Link>

                <section className="section section-dark">
                    <h2></h2>

                </section>

                <Link to="/Spring-Summer-2018/Shoes">
                    <div className="pic3">
                        <div className="ptext">
                      <span className="border trans">
                        <h1>Shoes</h1>
                      </span>
                        </div>
                    </div>
                </Link>

                <section className="section section-dark">
                    <h2></h2>

                </section>

                <Link to="/Spring-Summer-2018/Pants">
                    <div className="pic4">
                        <div className="ptext">
                      <span className="border trans">
                        <h1>Pants</h1>
                      </span>
                        </div>
                    </div>
                </Link>

                <section className="section section-dark">
                    <h2></h2>

                </section>

                <Link to="/Spring-Summer-2018/Blouses">
                    <div className="pic5">
                        <div className="ptext">
                      <span className="border trans">
                        <h1>Blouses</h1>
                      </span>
                        </div>
                    </div>
                </Link>

                <section className="section section-dark">
                    <h2></h2>

                </section>

                <Link to="/Spring-Summer-2018/Hoodies">
                    <div className="pic6">
                        <div className="ptext">
                      <span className="border trans">
                        <h1>Hoodies</h1>
                      </span>
                        </div>
                    </div>
                </Link>

                <section className="section section-end">
                    <h2></h2>


            </section>

            </div>
        );
    }
}

export default FlexPage;