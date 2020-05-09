import React, { Component } from 'react'
import { NavLink, Link } from "react-router-dom"
import '../../../../scss/react/client/header/menu-full.scss'

class MenuFull extends Component {
  constructor(props) {

    super(props);
  }
  getClassActive = to => {
    let { group } = this.props
    if( group && group == to ){
      return 'active';
    }
    return '';
  }
  activeMenuMobile = event => {
    if(window.innerWidth > 767){
      return;
    }
    let dropdownClick = event.target.parentElement;
    if(dropdownClick.classList.contains('active')){
      dropdownClick.classList.remove('active');
    }else{
      dropdownClick.classList.add('active-temp');
    }
    let lstDropDown = document.getElementById('js-toggle-menu-mobile').getElementsByClassName('dropdown-menu');
    if(lstDropDown.length){
      for (let index = 0; index < lstDropDown.length; index++) {

        
        if(lstDropDown[index].classList.contains('active')){
          lstDropDown[index].classList.remove('active');
        }
        if(lstDropDown[index].classList.contains('active-temp')){
          lstDropDown[index].classList.remove('active-temp');
          lstDropDown[index].classList.add('active');
        }
      }
    }
  }
  render() {
    
    return (
      <div id='js-toggle-menu-mobile' className="component-menu menu-full">

        <ul className="wrapper-link">
          <li>
            <NavLinkCustom exact={true} to="/" text='ホームページ' />
          </li>
          <li className={'dropdown-menu ' + this.getClassActive('service')}>
            <NavLinkCustom to="/service" text='サービス' />
            <i className='hero-icon hero-plus-outline' onClick={this.activeMenuMobile}></i>
            <ul className="sub-link">
              <li><NavLinkCustom to="/service/system" text='サービス' /></li>
              <li><NavLinkCustom to="/service/hung" text='hùng' /></li>
              <li><NavLinkCustom to="/service/nhin" text='nhi' /></li>
            </ul>
          </li>
          <li className={'dropdown-menu ' + this.getClassActive('chat')}>
            <NavLinkCustom to="/chat" text='チャット' />
            <i className='hero-icon hero-plus-outline' onClick={this.activeMenuMobile}></i>
            <ul className="sub-link">
              <li><NavLinkCustom to="/chat/advisory-system" text='コンサルティングウェブデザイン' /></li>
              <li><NavLinkCustom to="/chat/technical-support" text='技術サポート' /></li>
              <li><NavLinkCustom to="/chat/website-creation-request" text='ウェブサイト作成依頼' /></li>
            </ul>
          </li>
          <li><NavLinkCustom to="/theme" text='意匠' /></li>
          <li><NavLinkCustom to="/contact" text='お問い合わせ' /></li>
          <li><NavLinkCustom to="/register-trial" text='登録トライアル' /></li>
        </ul>
      </div>
    )
  }
}

export default MenuFull;



class NavLinkCustom extends Component{

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