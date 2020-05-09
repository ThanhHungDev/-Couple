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
            <NavLink activeClassName="active" exact to="/">ホームページ</NavLink>
          </li>
          <li className={'dropdown-menu ' + this.getClassActive('service')}>
            <NavLink activeClassName="active" to="/service"> サービス </NavLink>
            <i className='hero-icon hero-plus-outline' onClick={this.activeMenuMobile}></i>
            <ul className="sub-link">
              <li><NavLink activeClassName="active" to="/service/system"> サービス </NavLink></li>
              <li><NavLink activeClassName="active" to="/service/hugn"> hugn </NavLink></li>
              <li><NavLink activeClassName="active" to="/service/nhi"> nhi </NavLink></li>
            </ul>
          </li>
          <li className={'dropdown-menu ' + this.getClassActive('chat')}>
            <NavLink activeClassName="active" to="/chat">チャット </NavLink>
            <i className='hero-icon hero-plus-outline' onClick={this.activeMenuMobile}></i>
            <ul className="sub-link">
              <li><NavLink activeClassName="active" to="/chat/advisory-system"> コンサルティングウェブデザイン </NavLink></li>
              <li><NavLink activeClassName="active" to="/chat/technical-support"> 技術サポート </NavLink></li>
              <li><NavLink activeClassName="active" to="/chat/website-creation-request"> ウェブサイト作成依頼 </NavLink></li>
            </ul>
          </li>
          <li>
            <NavLink activeClassName="active" to="/theme">意匠</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contact">お問い合わせ</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/register-trial">登録トライアル</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default MenuFull;