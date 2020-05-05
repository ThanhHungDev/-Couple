import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

class Menu extends Component {
  constructor(props) {

    super(props);
  }
  
  render() {
    
    return (
      <div className="component-menu">
        <ul className="wrapper-link">
          <li>
            <NavLink activeClassName="active" exact to="/">ホームページ</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/service">サービス</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/chat">チャット</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/theme">意匠</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default Menu;