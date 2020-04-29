import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../../../scss/react/client/page/home.scss";

export default class ItemCraftLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    var itemDefault = {
      img: '/image/intro-layout/page-1-465x357.jpg',
      des: 'DEFAULT'
    }
    var itemData = this.props.data ? this.props.data : itemDefault ;

    return (
      <div className="component-item-craft-layout wrapper-item-craft-layout">
        <figure className="box-modern-figure">
          <Link to="/register">
            <img
              src={itemData.img}
              alt=""
              width="465"
              height="357"
            />
          </Link>
        </figure>
        <h5 className="box-modern-title">
          <Link to="/register">{itemData.des}</Link>
        </h5>
      </div>
    );
  }
}
