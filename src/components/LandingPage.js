import React, { Component } from "react";

import SlideShow from "./slideshow";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        {/* <div className="container">
        <div className="pic-holder"> */}
        <SlideShow />

        {/* </div> */}

        <h1 className="how-title">Custom Cakes and Cupcakes</h1>

        <div className="how-to">
          <Link  
            
            to="/order"
            style={{ textDecoration: "none", color: "white" }}
          > 
          
          <button className="landing-button">
           
              Order Now
           
          </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
