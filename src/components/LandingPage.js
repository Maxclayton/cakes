import React, { Component } from "react";

import SlideShow from "./slideshow";
import { Link } from "react-router-dom";
import FadeIn from 'react-fade-in';

class Landing extends Component {
  render() {
    return (
      
      <div>
        <FadeIn>
        {/* <div className="container">
        <div className="pic-holder"> */}
        <SlideShow />
        </FadeIn>
        
        <FadeIn>
        <h1 className="how-title">Custom Cakes and Cupcakes</h1>
        </FadeIn>
        <div className="how-to">
          <FadeIn>
          <Link to="/order" style={{ textDecoration: "none", color: "white" }}>
            <button className="landing-button">Order Now</button>
          </Link>
          </FadeIn>
          
        </div>
       
      </div>
      
    );
  }
}

export default Landing;
