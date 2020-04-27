import React, { Component } from 'react'

import  '../../../../scss/react/client/header/menu.scss'

import { Link } from "react-router-dom";
import Logo from './Logo.jsx'

class Header extends Component {
  constructor(props) {

    super(props);
  }
  
  render() {
    
    return (
      <div className="component-header wrapper-header-page bg-gradient-home-page">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-6">
              <Logo fillClass=' fix-vertical-logo'/> 
              <h1 class="des-create-explore">CREATE AND EXPLORE</h1>
              <Link to="/service" className="btn btn-success btn-create-service">use service</Link>
              <Link to="/theme" className="link-create-explore">EXPLORE</Link>
            </div>
            <div className="col-6">
              <Logo fillClass=' fix-vertical-logo'/> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;