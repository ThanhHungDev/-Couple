import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../../scss/react/client/page/item-theme.scss";

export default class ItemTheme extends Component {
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
      <div className="component-item-theme wrapper-item-theme">
        <figure className="box-modern-figure">
          <Link className="theme-img-scroll" to="/register">
            <img src={itemData.img} alt='' />
          </Link>
          <figcaption className="box-modern-title">
            <h5 className='name'>{itemData.name}</h5>
            <h6 className='author'>{itemData.author}</h6>
            <Link className='btn-trial' to="/register">裁判</Link>
          </figcaption>
        </figure>
        
      </div>
    );
  }
}
