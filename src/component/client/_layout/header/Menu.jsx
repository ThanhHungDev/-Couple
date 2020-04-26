import React, { Component } from 'react'

class Menu extends Component {
  constructor(props) {

    super(props);
  }
  
  render() {
    
    return (
      <div className="component-menu">
        <ul className="wrapper-link">
          <li>
            <a href="#">trang chủ</a>
          </li>
          <li>
            <a href="#">tìm kiếm bạn</a>
          </li>
          <li>
            <a href="#">thông báo</a>
          </li>
          <li>
            <a href="#">xem trang cá nhân</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Menu;