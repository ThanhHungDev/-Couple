import React, { Component } from "react";
import "../../../../../scss/react/client/page/home.scss";

import BoxClassic from "../../../../svg/box-classic.jsx";

import StandardContract from "./StandardContract.jsx";

class ServiceWebsiteSelector extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="component-service-website-selector">
        <div className="topic-website-selector">
          <div className="title-topic">ウェブサイトのデザインニーズ</div>
        </div>
        <div className="wrapper-website-selector clear animated fadeInRight">
          <div className="block-website-selector">
            <div className="icon-title-block">
              <span className="icon-title">
                <i className="icon-abs-middle hero-icon hero-creation"></i>
                <BoxClassic fillColor="#DDC2E5" />
              </span>
            </div>
            <h6 className="text-center">ウェブサイトのデザイン</h6>
            <h4 className="title-block-language">事業</h4>
            <p className="content-language">ビジネスの開発と促進、ブランド価値の向上</p>
          </div>
          <div className="block-website-selector clear middle animated fadeInUp">
            <div className="icon-title-block">
              <span className="icon-title">
                <i className="icon-abs-middle hero-icon hero-format-list-text"></i>
                <BoxClassic fillColor="#FFD5C5" />
              </span>
            </div>
            <h6 className="text-center">ウェブサイトのデザイン</h6>
            <h4 className="title-block-language">ご自身の要件に応じた</h4>
            <p className="content-language">アイデアを与えてビジネスに集中し、残りは私たちに任せます</p>
          </div>
          <div className="block-website-selector clear animated fadeInLeft">
            <div className="icon-title-block">
            <span className="icon-title">
              <i className="icon-abs-middle hero-icon hero-auto-fix"></i>
              <BoxClassic fillColor="#f5d285" />
            </span>
            </div>
            <h6 className="text-center">ウェブサイトのデザイン</h6>
            <h4 className="title-block-language">電子商取引</h4>
            <p className="content-language">ビジネスを促進し、オンライン市場を支配する</p>
          </div>
        </div>
        <StandardContract />
      </div>
    );
  }
}

export default ServiceWebsiteSelector;
