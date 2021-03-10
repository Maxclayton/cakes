import React, { Component } from "react";
import CakePic from './images/landing-cake.jpg'
import SlideShow from './slideshow'




class Landing extends Component {
  render() {
    return (
      <div>
        {/* <div className="container">
        <div className="pic-holder"> */}
      <SlideShow />
        
        {/* </div> */}

    
      <h1 className="how-title">How to Order</h1>
      <div className="how-to">
        <p style={{ paddingBottom: "50px"}}>How to Order</p>
        <p style={{ paddingBottom: "50px"}}>How to Order</p>
        <p style={{ paddingBottom: "50px"}}>How to Order</p>
        <p style={{ paddingBottom: "50px"}}>How to Order</p>
        <button className="landing-button">Order Now</button>
        
      </div>
       </div> 
       
    )
  }
}

export default Landing;
