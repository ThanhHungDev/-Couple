import React, { Component } from "react";
import MenuThemeDetail from "../_layout/partial/ThemeDetail/MenuThemeDetail.jsx"
import "../../../scss/react/client/page/detail-theme.scss"

class DetailTheme extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="component-detail-theme">
        <div id="js-menu-theme-detail" className="wrapper-component-menu">
          <MenuThemeDetail />
        </div>
        <div id="js-iframe-review-template" className="wrapper-theme-detail-iframe">
          <div id="js-style-device">
            <iframe src="http://velikorodnov.com/dev/homeshop_preview/" 
            frameBorder="0" width="100%" height="100%"></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailTheme;
