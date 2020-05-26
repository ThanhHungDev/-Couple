import React, { Component } from 'react'
import '../../../../scss/react/client/header/menu-full.scss'
import NavLinkCustom from '../partial/General/NavLinkCustom.jsx'
import WindowsClose from '../../../svg/windows-close.jsx'

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
  closeMenuToggle = event => {
    if(window.innerWidth > 767){
      return;
    }
    document.getElementById('js-toggle-menu-mobile').classList.toggle('open');
    document.body.classList.remove('neo-scroll')
  }
  render() {
    
    return (
      <div id='js-toggle-menu-mobile' className="component-menu menu-full">
        <span className="mobile head-line-close-menu" onClick={this.closeMenuToggle}><WindowsClose /></span>
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
          <li><NavLinkCustom to="/login" text='ログイン' /></li>
        </ul>
      </div>
    )
  }
}

export default MenuFull;

