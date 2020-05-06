import React, { Component } from 'react'
import IconAlignJustify from '../../../svg/align-justify.jsx'

export default class ButtonHambeger extends Component {


  toggleMenu = () => {

    let listLink = document.getElementById('js-toggle-menu-mobile');
    if(listLink){

      listLink.classList.toggle('open');
      document.body.classList.toggle('neo-scroll')
    }
  }
  render() {
    return (
      <div className="component-button-hambeger mobile" onClick={ this.toggleMenu }>
        <IconAlignJustify />
      </div>
    )
  }
}