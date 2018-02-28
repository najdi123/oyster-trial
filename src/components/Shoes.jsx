import Lightbox from 'react-image-lightbox';
import React from 'react';
import './lightbox.css';

import pic1 from "../images/shoes/pic (1).jpg";
import pic2 from "../images/shoes/pic (2).jpg";
import pic3 from "../images/shoes/pic (3).jpg";
import pic4 from "../images/shoes/pic (4).jpg";
import pic5 from "../images/shoes/pic (5).jpg";
import pic6 from "../images/shoes/pic (6).jpg";
import pic7 from "../images/shoes/pic (7).jpg";
import pic8 from "../images/shoes/pic (8).jpg";
import pic9 from "../images/shoes/pic (9).jpg";
import pic10 from "../images/shoes/pic (10).jpg";
import pic11 from "../images/shoes/pic (11).jpg";
import pic12 from "../images/shoes/pic (12).jpg";
import pic13 from "../images/shoes/pic (13).jpg";
import pic14 from "../images/shoes/pic (14).jpg";
import pic15 from "../images/shoes/pic (15).jpg";
import pic16 from "../images/shoes/pic (16).jpg";
import pic17 from "../images/shoes/pic (17).jpg";
import pic18 from "../images/shoes/pic (18).jpg";
import pic19 from "../images/shoes/pic (19).jpg";
import pic20 from "../images/shoes/pic (20).jpg";
import pic21 from "../images/shoes/pic (21).jpg";
import pic22 from "../images/shoes/pic (22).jpg";
import pic23 from "../images/shoes/pic (23).jpg";
import pic24 from "../images/shoes/pic (24).jpg";
import pic25 from "../images/shoes/pic (25).jpg";
import pic26 from "../images/shoes/pic (26).jpg";
import pic27 from "../images/shoes/pic (27).jpg";
import pic28 from "../images/shoes/pic (28).jpg";
import pic29 from "../images/shoes/pic (29).jpg";
import pic30 from "../images/shoes/pic (30).jpg";
import pic31 from "../images/shoes/pic (31).jpg";






const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21, pic22, pic23, pic24, pic25, pic26, pic27, pic28, pic29, pic30, pic31];

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
                    <img alt="lightbox" src={pic17} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:16 })} />
                    <img alt="lightbox" src={pic18} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:17 })} />
                    <img alt="lightbox" src={pic19} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:18 })} />
                    <img alt="lightbox" src={pic20} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:19 })} />
                    <img alt="lightbox" src={pic21} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:20 })} />
                    <img alt="lightbox" src={pic22} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:21 })} />
                    <img alt="lightbox" src={pic23} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:22 })} />
                    <img alt="lightbox" src={pic24} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:23 })} />
                    <img alt="lightbox" src={pic25} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:24 })} />
                    <img alt="lightbox" src={pic26} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:25 })} />
                    <img alt="lightbox" src={pic27} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:26 })} />
                    <img alt="lightbox" src={pic28} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:27 })} />
                    <img alt="lightbox" src={pic29} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:28 })} />
                    <img alt="lightbox" src={pic30} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:29 })} />
                    <img alt="lightbox" src={pic31} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:30 })} />





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