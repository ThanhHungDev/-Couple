import React, { Component } from 'react'

import  '../../../../scss/react/client/header/menu.scss'

import { Link } from "react-router-dom";
import Logo from './Logo.jsx'

import MenuFull from './MenuFull.jsx'

import ButtonHambeger from './ButtonHambeger.jsx'


class Header extends Component {
  render() {
    
    return (
      <div className="component-header wrapper-header bg-gradient-home-page position-relative">
        <Logo /> 
        <MenuFull match = {this.props.match}/>
        <ButtonHambeger />
      </div>
    )
  }
}

export default Header;