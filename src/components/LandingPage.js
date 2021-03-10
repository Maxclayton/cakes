import React, { Component } from "react";
import CakePic from './images/landing-cake.jpeg'





class Landing extends Component {
  render() {
    return (
      <div>
        <div className="container">
        <div className="pic-holder">
        <img
            src={CakePic}
            alt="cake"
            className="center-fit"
          />
        
        </div>
        <div className="button-holder">
        <button className="landing-button">Order Now</button>
        {/* <h1 className="landing-button">Landingg Page</h1> */}
        </div>
      </div>
      <div className="how-to">
        <p>How to Order</p>
        <p>How to Order</p>
        <p>How to Order</p>
        <p>How to Order</p>
      </div>
      </div>
    )
  }
}

export default Landing;
