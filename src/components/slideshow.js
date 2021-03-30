import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import CakePicBee from './images/cake-bee.jpeg';
import CakePicFifty from './images/cake-fifty.png';
import CakePicPink from './images/cake-pink.png';
import CakePicTdown from './images/cake-tdown.jpeg';
import CakePicWed from './images/cake-wedding.png';
import CakePicXo from './images/cake-xo.jpeg';
import CakePicLand from './images/landing-cake.png';



const slideImages = [
  'images/landing-cake.jpg',
  'images/slide_3.jpg',
  'images/slide_4.jpg'
];

const SlideShow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            
              <img
            src={CakePicLand}
            alt="cake"
            className="center-fit"
          />
            </div>
            <div className="each-slide">
            
            <img
          src={CakePicWed}
          alt="cake"
          className="center-fit"
        />
          </div>
       
          <div className="each-slide">
            <img
            src={CakePicXo}
            alt="cake"
            className="center-fit"
          />
            </div>
        
          <div className="each-slide">
            <img
            src={CakePicPink}
            alt="cake"
            className="center-fit"
          />
            </div>
            <div className="each-slide">
            <img
            src={CakePicTdown}
            alt="cake"
            className="center-fit"
          />
            </div>
            <div className="each-slide">
            <img
            src={CakePicBee}
            alt="cake"
            className="center-fit"
          />
            
            </div>
            <div className="each-slide">
            <img
            src={CakePicFifty}
            alt="cake"
            className="center-fit"
          />
            </div>
     
        </Slide>
      </div>
    )
}

export default SlideShow;