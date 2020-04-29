import React, { Component } from "react";
import Header from "../_layout/header/index.jsx";
import Footer from "../_layout/footer/index.jsx";
import "../../../scss/react/client/page/home.scss";
import ServiceWebsiteSelector from "../_layout/partial/HomePage/ServiceWebsiteSelector.jsx";

import HomeIntroLayout from "../_layout/partial/HomePage/HomeIntroLayout.jsx"

import $ from "jquery";

import checkInViewPosition from "../../../library/check-in-view-position.js"

import BackTop from "../_layout/partial/General/BackTop.jsx"
import AloNow from "../_layout/partial/General/AloNow.jsx"


class Home extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    var $animation_elements = $(".animate-support");
    $( window ).scroll(function() {
      checkInViewPosition($, $animation_elements)
    });
  }

  render() {
    return (
      <div className="component-home">
        <Header />
        <ServiceWebsiteSelector />
        <HomeIntroLayout />
        <BackTop />
        <AloNow />
        <Footer />
      </div>
    );
  }
}

export default Home;
