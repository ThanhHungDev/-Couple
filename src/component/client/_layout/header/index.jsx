import React, { Component } from 'react'

import  '../../../../scss/react/client/header/menu.scss'

import Slider from "./Slider.jsx"


import Logo from './Logo.jsx'
import Menu from "./Menu.jsx"
import BtnToggle from "./BtnToggle.jsx"

class Header extends Component {
  constructor(props) {

    super(props);
  }
  
  render() {
    
    return (
      <div className="component-header">
        <div className="container">
          <div className="row">
            <div className="col-12 gradient">
              <Logo />
              <Menu />  
              <BtnToggle />
            </div>
          </div>
        </div>
        <Slider />
      </div>
    )
  }
}

export default Header;