import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./images/logo.png"





class Nav extends Component {
  render() {
    return (
      <div className="nav-bar">
            
           
            <Link to="/" style={{ textDecoration: "none", color: "black"}} className="left-side"> 
             <img
            src={Logo}
            alt="cake"
            className="cake-logo"
          /></Link>

            
       
          
            <Link to="/order" style={{ textDecoration: "none", color: "black", marginRight: "110px" }} className="right-side">Order Now</Link>
            <Link to="/gallery" style={{ textDecoration: "none", color: "black", marginRight: "-158px"  }} className="right-side2">Gallery</Link>
            
            
                
            </div>
         
  

    )
  }
}

export default Nav;
