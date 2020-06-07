import React, { Component } from "react"
import { NavLink, Link } from "react-router-dom"
import LayerGroup from "../../../../svg/layer-group.jsx"
import ResponsiveLayer from "../../partial/ThemeDetail/ResponsiveLayer.jsx"
import config from "../../../../../config"

class MenuThemeDetail extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="component-menu-theme">
          <NavLink activeClassName="active" exact to="/"><LayerGroup /> </NavLink>
          <ResponsiveLayer />
          <div className="selector-theme">
            <span><Link to='/chat' className="btn-goto-chat-detail-theme"><i className="hero-icon hero-cellphone-message"></i>管理者とチャットする</Link></span>
            {/* <span><i className="hero-icon hero-phone-in-talk-outline"></i><a href={ "tel:" + config.SITE.phone }> { config.SITE.phone }</a></span> */}
            <span><Link to="/contact" className="btn-select-design-here"> <i className="hero-icon hero-hand-pointing-right"></i> このデザインを選択 </Link></span>
          </div>
      </div>
    );
  }
}

export default MenuThemeDetail;