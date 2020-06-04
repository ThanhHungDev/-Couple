import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../../../scss/react/client/footer/footer.scss";
import config from "../../../../config"
import $ from "jquery";
var jQuery = $;

export default class ContentFooter extends Component {
  
  componentDidMount() {
    
    this.drawGoogleMap();
    var thisPointer = this;

    jQuery(window).on("resize", function (e) {
      thisPointer.drawGoogleMap();
    });
  }
  drawGoogleMap = ()=>{
    var styles = [
      {
        stylers: [{ saturation: 0 }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          //  { lightness: 100 },
          { visibility: "simplified" },
        ],
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ];
    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles, {
      name: "Google Map",
    });
    var myLatlng = new google.maps.LatLng(10.651623, 107.270763);
    var mapOptions = {
      zoom: 10,
      scrollwheel: false,
      center: myLatlng,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"],
      },
    };

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      icon: '/image/map-icon.png'
    });
    var map = new google.maps.Map(
      document.getElementById("map-canvas"),
      mapOptions
    );

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set("map_style", styledMap);
    map.setMapTypeId("map_style");
    marker.setMap(map);

    var address_detail =
      '<div class="address_detail_map">' +
      '<h4 class="main_color">'+
      config.SITE.company_name +
      '</h4>' +
      config.SITE.address +
      "</div>";

    address_detail = address_detail.split("\n").join("<br />");
    var infowindow = new google.maps.InfoWindow({
      content: address_detail,
    });

    marker.addListener("click", function () {
      infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
  }

  render() {
    return (
      <div className="component-footer-content ">
        <div className="about-us animated fadeIn">
          <h3 className="title">私たちについて</h3>
          <div className="company-name">
            <i className="hero-icon hero-account-group-outline"></i>
            <span>{ config.SITE.company_name }</span>
          </div>
          <div className="tax-code">
            <i className="hero-icon hero-star-box-multiple-outline"></i>
            <span> { config.SITE.tax } </span>
          </div>
          <div className="tax-code-date">
            <i className="hero-icon hero-update"></i>
            <span> { config.SITE.tax_register }</span>
          </div>
          <div className="address">
            <i className="hero-icon hero-home-map-marker"></i>
            <span>
              { config.SITE.address }
            </span>
          </div>
          <div className="phone">
            <i className="hero-icon hero-cellphone-nfc"></i>
            <span>
              日本の電話： <a href={ "tel:" + config.SITE.phone }> { config.SITE.phone }</a>
            </span>
          </div>
          <div className="email">
            <i className="hero-icon hero-card-account-mail-outline"></i>
            <span>
              <a href={ "mailto:" + config.SITE.email }> { config.SITE.email } </a>
            </span>
          </div>
        </div>

        <div className="service-us animated fadeDown">
          <h3 className="title">私たちのサービス</h3>
          <div className="seo-standard">
            <i className="hero-icon hero-google-ads"></i>
            <Link to="create-web-standard-seo">SEO標準Webデザイン</Link>
          </div>
          <div className="chat-realtime">
            <i className="hero-icon hero-message-text-outline"></i>
            <Link to="create-web-chat-realtime">
              リアルタイムWebチャットの設計
            </Link>
          </div>
          <div className="recruit">
            <i className="hero-icon hero-human-male-child"></i>
            <Link to="create-web-recruit">採用されたウェブデザイン</Link>
          </div>
          <div className="news">
            <i className="hero-icon hero-newspaper-variant-outline"></i>
            <Link to="create-web-news">ニュースウェブデザイン</Link>
          </div>
          <div className="marketing-sale-online">
            <i className="hero-icon hero-ballot-recount-outline"></i>
            <Link to="create-web-marketing-sale-online">
              販売ウェブデザイン
            </Link>
          </div>
          <div className="responsive">
            <i className="hero-icon hero-responsive"></i>
            <Link to="create-web-responsive">
              モバイルレスポンシブウェブデザイン
            </Link>
          </div>
        </div>

        <div id="map-canvas" className="map-us"></div>
      </div>
    );
  }
}
