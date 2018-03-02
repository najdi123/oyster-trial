import React from 'react';
import { Parallax, Background } from 'react-parallax';
import './HomeParallax.css';
import { Link } from 'react-router-dom';

const MyComponent = () => (
    <div>
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('../images/jacket/pic (1).jpg')}
        bgImageAlt="the cat"
        strength={300}
    >
        <Link to="/Spring-Summer-2018/Suits">
            <div className="para" >
                <div className="ptext"><span className="border trans"><h1>Suits</h1></span></div>
            </div>
        </Link>
    </Parallax>

    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('../images/shoes/pic (1).jpg')}
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
            bgImage={require('../images/pants/pic (1).jpg')}
            bgImageAlt="the cat"
            strength={300}
        >
            <Link to="/Spring-Summer-2018/Pants">
                <div className="para" >
                    <div className="ptext"><span className="border trans"><h1>Pants</h1></span></div>
                </div>
            </Link>
        </Parallax>

        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../images/blouse/pic (1).jpg')}
            bgImageAlt="the dog"
            strength={200}
        >

            <Link to="/Spring-Summer-2018/Blouses">
                <div className="para" >
                    <div className="ptext"><span className="border trans"><h1>Blouses</h1></span></div>
                </div>
            </Link>
        </Parallax>

         <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../images/hoodi/pic (11).jpg')}
            bgImageAlt="the dog"
            strength={200}
        >

            <Link to="/Spring-Summer-2018/Hoodies">
                <div className="para" >
                    <div className="ptext"><span className="border trans"><h1>Hoodies</h1></span></div>
                </div>
            </Link>
        </Parallax>
    </div>
);
export default MyComponent;