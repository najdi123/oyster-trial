import React from 'react';
import { Parallax, Background } from 'react-parallax';
import './HomeParallax.css';
import { Link } from 'react-router-dom';

const MyComponent = () => (
    <div>
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../images/parallax1.jpg')}
            bgImageAlt="the cat"
            strength={300}
        >
            <Link to="/Spring-Summer-2018/Suits">
                <div className="para" >
                    <div className="ptext"><span className="border trans">
                    <h1>Spring - Summer 2018</h1></span></div>
                </div>
            </Link>
        </Parallax>
    </div>
);
export default MyComponent;



// import React, { Component } from 'react';
// import './parallax.css';



// class FlexPage extends Component {
//     render() {
//         return (

//            <div>



//             <div className="pimg2">
//                 <div className="ptext">
//                   <span className="border trans">
//                     <h1>Spring - Summer 2018</h1>
//                   </span>
//                 </div>
//             </div>



//             </div>
//         );
//     }
// }

// export default FlexPage;