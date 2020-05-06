import React, { Component } from 'react'
import { NavLink, Link } from "react-router-dom"

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
  render() {
    
    return (
      <div id='js-toggle-menu-mobile' className="component-menu">
        <ul className="wrapper-link">
          <li>
            <NavLink activeClassName="active" exact to="/">ホームページ</NavLink>
          </li>
          <li className={'dropdown-menu ' + this.getClassActive('service')}>
            <NavLink activeClassName="active" to="/service">
              サービス <i className='hero-icon hero-plus-outline'></i>
            </NavLink>
            <ul className="sub-link">
              <li><NavLink activeClassName="active" to="/service/system"> サービス </NavLink></li>
              <li><NavLink activeClassName="active" to="/service/hugn"> hugn </NavLink></li>
              <li><NavLink activeClassName="active" to="/service/nhi"> nhi </NavLink></li>
            </ul>
          </li>
          <li className={'dropdown-menu ' + this.getClassActive('chat')}>
            <NavLink activeClassName="active" to="/chat">
              チャット <i className='hero-icon hero-plus-outline'></i>
            </NavLink>
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