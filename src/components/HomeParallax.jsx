import React from 'react';
import { Parallax, Background } from 'react-parallax';
import './HomeParallax.css';
import { Link } from 'react-router-dom';

const MyComponent = () => (
    <div>
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('../images/products/pic1.JPG')}
        bgImageAlt="the cat"
        strength={300}
    >
        <Link to="/Spring-Summer-2018/Suits">
            <div className="para" >
                <div className="ptext"><span className="border trans"><h1 style={{color: '#333'}}>purple</h1></span></div>
            </div>
        </Link>
    </Parallax>

    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('../images/products/pic2.JPG')}
        bgImageAlt="the dog"
        strength={200}
    >

        <Link to="/Spring-Summer-2018/Shoes">
            <div className="para" >
                <div className="ptext"><span className="border trans"><h1>blue</h1></span></div>
            </div>
        </Link>
    </Parallax>





        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../images/products/pic3.JPG')}
            bgImageAlt="the cat"
            strength={300}
        >
            <Link to="/Spring-Summer-2018/Pants">
                <div className="para" >
                    <div className="ptext"><span className="border trans"><h1 style={{color: '#333'}}>black</h1></span></div>
                </div>
            </Link>
        </Parallax>

        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../images/products/pic4.JPG')}
            bgImageAlt="the dog"
            strength={200}
        >

            <Link to="/Spring-Summer-2018/Shirts">
                <div className="para" >
                    <div className="ptext"><span className="border trans"><h1>blond</h1></span></div>
                </div>
            </Link>
        </Parallax>

         <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../images/products/pic (1).jpg')}
            bgImageAlt="the dog"
            strength={200}
        >

            <Link to="/Spring-Summer-2018/Hoodies">
                <div className="para" >
                    <div className="ptext"><span className="border trans"><h1 style={{color: '#333'}}>white</h1></span></div>
                </div>
            </Link>
        </Parallax>
    </div>
);
export default MyComponent;
