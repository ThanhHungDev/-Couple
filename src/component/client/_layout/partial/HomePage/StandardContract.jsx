import React, { Component } from "react";
import formatHeight from "../../../../../library/format-height.js";
import $ from "jquery";

import { Link } from 'react-router-dom';

export default class StandardContract extends Component {
  constructor(props) {
    super(props);

    this.state = {
      standardContract: [
        {
          icon: "hero-television-clean",
          text: "お客様は適切なウェブサイトのインターフェースを選択します",
        },
        {
          icon: "hero-selection-search",
          text: "情報を提供し、編集ウェブサイトをリクエストする",
        },
        {
          icon: "hero-auto-fix",
          text: "必要に応じて編集し、デモを実施します",
        },
        {
          icon: "hero-hand-okay",
          text: "製品のテスト実行と引き渡しの実施",
        },
      ],
    };
  }

  componentDidMount() {
    $(".component-standard-contract").each(function () {
      formatHeight($(this).get(0), "component-item-standard-contract");
    });
    $(window).on("resize", function () {
      $(".component-standard-contract").each(function () {
        formatHeight($(this).get(0), "component-item-standard-contract");
      });
    });
  }

  render() {
    return (
      <div className="component-standard-contract">
        {this.state.standardContract.map((item, index) => (
          <ItemStandardContract key={index + item.icon} data={item} />
        ))}
      </div>
    );
  }
}

class ItemStandardContract extends Component {
  render() {
    return (
      <div className="component-item-standard-contract">
        <Link to='/designs' className="wrapper-icon-item-standard">
          <i className={this.props.data.icon + " hero-icon animated"}></i>
        </Link>
        <h5 className="des-standard-contract"><Link to='/designs'>{this.props.data.text}</Link></h5>
      </div>
    );
  }
}
