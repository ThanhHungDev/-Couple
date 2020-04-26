import React, { Component } from "react";

import $ from "jquery";

import "slick-carousel";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

import curve from "../../../../library/artc.js";

var jQuery = $;
curve(jQuery);

class Slider extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    
    if ($("#curve-text").length) {
      $("#curve-text").arctext({ radius: 150 });
    }
    $(".slider").slick({
      infinite: true,
      arrows: true,
      slidesToShow: 1,
      dots: true,
      // autoplay:true,
      // autoplaySpeed:1500
    });
  }
  render() {
    return (
      <div className="component-slider position-relative">
        <div className="slider animated fadeIn line-height-0">
          <div className="image">
            <img src="image/slide-1.jpg" alt="" />
          </div>
          <div className="image">
            <img src="image/slide-2.jpg" alt="" />
          </div>
        </div>
        <div className="content-text animated slideInDown">
          <div className="caption">
            <div className="couple-text">
              <h3 id="curve-text">We'll Create Marriages</h3>
            </div>
          </div>
          <div className="description">
            <h2 className="couple-name">Danial &amp; Floes</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
