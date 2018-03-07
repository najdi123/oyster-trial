import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';


class About extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron title="About Us!" subtitle="This page is all about who we are!"/>
                <div className="container">
                    <h2 style={{textAlign: 'right'}}>درباره ما </h2>
                    <p style={{textAlign: 'right'}}>

                        aziendaOyster Cosmetics SpA has been producing hair cosmetics for 30 years. The company developed skilfulness and experience in the production of high quality hair dyes, a complete and excellent range from colour to styling, from finishing to hair care: Oyster Professional.
                        Oyster Professional means completeness and evolution: the research carried out by the laboratories inside the company’s premises, ruled by periodic market surveys, allows a constant innovation for the development of new products in line with consumption trends. A methodical quality control, from raw materials to finished product, the timeliness of logistic service complete the offers of a company that, for its high quality standards concerning formulation and production, conquered the high fidelity of its customers.
                        Recently, the Company has also fulfilled an important expansion of its scope by developing the skin care Department: a full range of products for a stimulating challenge that our Company is strongly facing through huge productive investments and a continuously evolving know-how.

                        The company in numbers:
                        65 thousand m2 area; 10 thousand pallet spaces warehouses; its production capacity amounts to 200 million
                        pieces per year; fifteen production lines and packaging; 4 internal laboratories (R&D, chemical lab, microbiologic lab and quality control lab); Internal show room and Academy for technical tests.</p>
                </div>
                <Footer />
            </div>
        );
    }
}

export default About;
