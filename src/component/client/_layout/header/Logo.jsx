import React, { Component } from 'react'

import { NavLink } from "react-router-dom";

import LayerGroup from "../../../svg/layer-group.jsx";



class Logo extends Component {
  
  render() {
    
    return (
      <div className="component-logo">
        <h2 className="logo">
          <NavLink activeClassName="active" exact to="/">
            <LayerGroup /> EBUDEZAIN
          </NavLink>
        </h2>
      </div>
    )
  }
}

export default Logo;