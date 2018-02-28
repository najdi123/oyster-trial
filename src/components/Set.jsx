import Lightbox from 'react-image-lightbox';
import React from 'react';
import './lightbox.css';

import pic1 from "../images/set/pic (1).jpg";
import pic2 from "../images/set/pic (2).jpg";
import pic3 from "../images/set/pic (3).jpg";
import pic4 from "../images/set/pic (4).jpg";
import pic5 from "../images/set/pic (5).jpg";
import pic6 from "../images/set/pic (6).jpg";
import pic7 from "../images/set/pic (7).jpg";
import pic8 from "../images/set/pic (8).jpg";
import pic9 from "../images/set/pic (9).jpg";
import pic10 from "../images/set/pic (10).jpg";
import pic11 from "../images/set/pic (11).jpg";
import pic12 from "../images/set/pic (12).jpg";
import pic13 from "../images/set/pic (13).jpg";
import pic14 from "../images/set/pic (14).jpg";
import pic15 from "../images/set/pic (15).jpg";
import pic16 from "../images/set/pic (16).jpg";






const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16];

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
                    <img alt="lightbox" src={pic10} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:9 })} />
                    <img alt="lightbox" src={pic11} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:10 })} />
                    <img alt="lightbox" src={pic12} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:11 })} />
                    <img alt="lightbox" src={pic13} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:12 })} />
                    <img alt="lightbox" src={pic14} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:13 })} />
                    <img alt="lightbox" src={pic15} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:14 })} />
                    <img alt="lightbox" src={pic16} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:15 })} />






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