import React, { Component } from "react"
import config from "../../../../../config"

class ResponsiveLayer extends Component {
  constructor(props) {
    super(props);
    var winWidth = window.innerWidth,
    _device = "laptop-device"
    if( winWidth < 767 ){
      _device = "mobile-device"
    }
    if( winWidth > 767 && winWidth <= 960){
      _device = "tablet-device"
    }
    if( winWidth > 960 ){
      _device = "laptop-device"
    }
    this.state = {
        device : _device
    }
  }

  componentDidMount(){
    this.handleDevice(this.state.device)
  }

  handleDevice = _device => {
    console.log( _device )
    this.setState( { device : _device}, function(){
      var domStyle = document.getElementById("js-style-device")
      if( domStyle ){
        if( this.state.device == "laptop-device" ){
          var iframe = document.getElementById("js-iframe-review-template")
          var menuThemeDetail = document.getElementById("js-menu-theme-detail")
          if( iframe && menuThemeDetail ){
            var height = menuThemeDetail.clientHeight;
            domStyle.style.height = ( window.innerHeight - height - 5 ) + "px";
          }else{
            domStyle.style.height = null;
          }
        }else if( this.state.device == "tablet-device" ){
          domStyle.style.height = "768px";
        }else if( this.state.device == "mobile-device" ){
          domStyle.style.height = "540px";
        }
        if(domStyle.classList.contains(this.state.device)){
          return;
        }
        domStyle.classList.remove("laptop-device")
        domStyle.classList.remove("tablet-device")
        domStyle.classList.remove("mobile-device")
        domStyle.classList.add(this.state.device)

      }
    })
  }

  render() {
    var { device } = this.state
    return (
        <ul id="js-handle-device" className="component-menu-detail-theme-responsive">
            <li><img src={config.SERVER.ASSET() + "/image/responsive.png" } /></li>
            <li onClick={ () => this.handleDevice( "laptop-device" ) } className={ device == "laptop-device" ? "active" : '' }><i className="hero-icon hero-laptop"></i></li>
            <li onClick={ () => this.handleDevice( "tablet-device" ) } className={ device == "tablet-device" ? "active" : '' }><i className="hero-icon hero-tablet-ipad"></i></li>
            <li onClick={ () => this.handleDevice( "mobile-device" ) } className={ device == "mobile-device" ? "active" : '' }><i className="hero-icon hero-cellphone"></i></li>
        </ul>
    );
  }
}

export default ResponsiveLayer;