import React, { Component } from "react";
import "../../../../../scss/react/client/page/alo-now.scss";
export default class AloNow extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tel : '080-3387-0674'
    }
  }
  render() {
    return (
      <div className="component-alo-now">
        <a href={this.state.tel + "tel:" } rel="nofollow">
          <span className="alo-phone">
            <span className="animated infinite zoomIn alo-ph-circle"></span>
            <span className="animated infinite pulse alo-ph-circle-fill"></span>
            <span className="animated infinite tada alo-ph-img-circle"></span>
          </span>
        </a>
      </div>
    );
  }
}
