import React from 'react';
import { Parallax, Background } from 'react-parallax';
import './parallax.css';


const MyComponent = () => (
    <div>
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('../images/parallax/pic (10).jpg')}
            bgImageAlt="the cat"
            strength={300}
        >

            <div className="para" >
                <div className="ptext"><span className="border trans">
                    <h1>Spring - Summer 2018</h1></span></div>
            </div>

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