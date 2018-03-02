import React from 'react';
import { Parallax, Background } from 'react-parallax';
import './HomeParallax.css';
import { Link } from 'react-router-dom';

const MyComponent = () => (
    <div>
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('../images/parallax/suit.jpg')}
        bgImageAlt="the cat"
        strength={300}
    >
        <Link to="/Spring-Summer-2018/Suits">
            <div className="para" >
                <div className="ptext"><span className="border trans"><h1 style={{color: '#333'}}>Suits</h1></span></div>
            </div>
        </Link>
    </Parallax>

    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('../images/parallax/formalShoes.jpg')}
        bgImageAlt="the dog"
        strength={200}
    >

        <Link to="/Spring-Summer-2018/Shoes">
            <div className="para" >
                <div className="ptext"><span className="border trans"><h1>Shoes</h1></span></div>
            </div>
        </Link>
    </Parallax>





        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../images/parallax/pants2.jpg')}
            bgImageAlt="the cat"
            strength={300}
        >
            <Link to="/Spring-Summer-2018/Pants">
                <div className="para" >
                    <div className="ptext"><span className="border trans"><h1 style={{color: '#333'}}>Pants</h1></span></div>
                </div>
            </Link>
        </Parallax>

        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../images/parallax/shirt.jpg')}
            bgImageAlt="the dog"
            strength={200}
        >

            <Link to="/Spring-Summer-2018/Shirts">
                <div className="para" >
                    <div className="ptext"><span className="border trans"><h1>Shirts</h1></span></div>
                </div>
            </Link>
        </Parallax>

         <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../images/parallax/hoodi1.jpg')}
            bgImageAlt="the dog"
            strength={200}
        >

            <Link to="/Spring-Summer-2018/Hoodies">
                <div className="para" >
                    <div className="ptext"><span className="border trans"><h1 style={{color: '#333'}}>Hoodies</h1></span></div>
                </div>
            </Link>
        </Parallax>
    </div>
);
export default MyComponent;