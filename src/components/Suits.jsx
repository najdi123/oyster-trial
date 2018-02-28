import Lightbox from 'react-image-lightbox';
import React from 'react';
import './lightbox.css';
// import '../components/lightbox.css';

import pic1 from "../images/jacket/pic (1).jpg";
import pic2 from "../images/jacket/pic (2).jpg";
import pic3 from "../images/jacket/pic (3).jpg";
import pic4 from "../images/jacket/pic (4).jpg";
import pic5 from "../images/jacket/pic (5).jpg";
import pic6 from "../images/jacket/pic (6).jpg";
import pic7 from "../images/jacket/pic (7).jpg";
import pic8 from "../images/jacket/pic (8).jpg";
import pic9 from "../images/jacket/pic (9).jpg";
// import pic10 from "../images/jacket/pic (10).jpg";





const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9];

class IndiLightbox extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {

        const { photoIndex, isOpen } = this.state;

        return (
            <div style={{backgroundColor: 'black'}}>


                {!isOpen &&
                <div className="image-display">

                    <img alt="lightbox" src={pic1} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:0 })} />
                    <img alt="lightbox" src={pic2} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:1 })} />
                    <img alt="lightbox" src={pic3} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:2 })} />

                    <img alt="lightbox" src={pic4} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:3 })} />
                    <img alt="lightbox" src={pic5} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:4 })} />
                    <img alt="lightbox" src={pic6} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:5 })} />
                    <img alt="lightbox" src={pic7} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:6 })} />
                    <img alt="lightbox" src={pic8} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:7 })} />
                    <img alt="lightbox" src={pic9} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:8 })} />






                </div>

                }
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

export default IndiLightbox;