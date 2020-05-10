import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

export default class NavLinkCustom extends Component{

  closeMenuToggle = event => {
    if(window.innerWidth > 767){
      return;
    }
    document.getElementById('js-toggle-menu-mobile').classList.toggle('open');
    document.body.classList.remove('neo-scroll')
  }
  render(){
    return(
      <NavLink onClick={this.closeMenuToggle} activeClassName="active" exact = {this.props.exact} to={this.props.to}>{this.props.text}</NavLink>
    )
  }
}