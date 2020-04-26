import React, { Component } from 'react'
import Heart from '../../../svg/heart.jsx'

import { NavLink } from "react-router-dom";



class Logo extends Component {
  
  render() {
    
    return (
      <div className="component-logo">
        <h2 className="logo">
        <NavLink activeClassName="active" exact to="/">
        Almost before we knew it, we had left the ground. <Heart fillClass="fa-w-10 fix-vertical-logo" />
        </NavLink>
        </h2>
      </div>
    )
  }
}

export default Logo;