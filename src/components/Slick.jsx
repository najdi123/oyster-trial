import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";

class ReactSlickDemo extends React.Component{
    render() {
        var settings = {
            dots: true
        };
        return (
            <div className='container'>
                <Slider {...settings}>
                    <div><img src={pic1} /></div>
                    <div><img src={pic2} /></div>
                    <div><img src={pic3} /></div>
                    <div><img src={pic4} /></div>

                </Slider>
            </div>
        );
    }
}

ReactDOM.render(
    <ReactSlickDemo />,
    document.getElementById('container')
);