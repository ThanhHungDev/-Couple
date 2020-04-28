import React, { Component } from "react";

class LstWebDesignImg extends Component {
  componentDidMount() {
    window.addEventListener("scroll", function (event) {
      var DF_SCALE_PERCENT = 0.5;
      var scroll = this.scrollY;
      var wrapperComponent = document.getElementsByClassName(
        "component-web-design-image"
      );
      if (wrapperComponent.length) {
        var positionScroll = wrapperComponent[0].clientHeight;

        var scale = 0;
        if (scroll > positionScroll) {
          scale = 100;
        } else {
          scale = parseInt((scroll * 100 * 100) / positionScroll) / 100.0;
        }
        scale *= DF_SCALE_PERCENT;

        document.getElementsByClassName("box-samples-img-1")[0]['style']['top'] = 20 + scale + '%';
        document.getElementsByClassName("box-samples-img-2")[0]['style']['top'] = 10 - scale + '%';
        document.getElementsByClassName("box-samples-img-3")[0]['style']['bottom'] = 10 - scale + '%';
        document.getElementsByClassName("box-samples-img-3")[0]['style']['right'] = 20 - scale + '%';
      }
    });
  }
  render() {
    return (
      <div className={this.props.fillClass + ' position-relative'}>
        <img
          className="img-classic box-samples-img-1 animated jackInTheBox"
          src="image/general/img-sample-1-413x566.jpg"
          alt=""
          width="413"
          height="566"
        />
        <img
          className="img-classic box-samples-img-2 animated rollIn"
          src="image/general/img-sample-2-413x566.jpg"
          alt=""
          width="413"
          height="566"
        />
        <img
          className="img-classic box-samples-img-3 animated zoomIn"
          src="image/general/img-sample-3-413x566.jpg"
          alt=""
          width="413"
          height="566"
        />
      </div>
    );
  }
}

export default LstWebDesignImg;
