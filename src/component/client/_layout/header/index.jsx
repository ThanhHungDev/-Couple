import React, { Component } from 'react'

import  '../../../../scss/react/client/header/menu.scss'

import { Link } from "react-router-dom";
import Logo from './Logo.jsx'
import LstWebDesignImg from "./LstWebDesignImg.jsx"

class Header extends Component {
  constructor(props) {

    super(props);
  }

  componentDidMount(){

    var heightPrevColumn = document.getElementsByClassName('js-nomal-height')[0].clientHeight;
    document.getElementsByClassName('component-web-design-image')[0]['style']['height'] = heightPrevColumn + "px";
    window.addEventListener("resize", function(){

      var heightPrevColumn = document.getElementsByClassName('js-nomal-height')[0].clientHeight;
      document.getElementsByClassName('component-web-design-image')[0]['style']['height'] = heightPrevColumn + "px";
    });
  }
  
  render() {
    
    return (
      <div className="component-header wrapper-header-page bg-gradient-home-page">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-6 col-sm-12 js-nomal-height">
              <Logo fillClass=' fix-vertical-logo'/> 
              <h1 className="des-create-explore position-relative">
                あなたのウェブサイトを作成
                <div className="decor-element animated fadeIn">
                  <svg className="rotate-circle polygon-svg-rotate" viewBox="0 0 176 198" fill="none">
                    <path opacity="0.05" d="M85.5 10.9904C87.047 10.0972 88.953 10.0972 90.5 10.9904L162.969 52.8301C164.516 53.7233 165.469 55.3739 165.469 57.1603V140.84C165.469 142.626 164.516 144.277 162.969 145.17L90.5 187.01C88.953 187.903 87.047 187.903 85.5 187.01L13.0314 145.17L8.03143 153.83L13.0314 145.17C11.4844 144.277 10.5314 142.626 10.5314 140.84V57.1603C10.5314 55.3739 11.4844 53.7233 13.0314 52.8301L85.5 10.9904Z" stroke="#020549" strokeWidth="20"></path>
                  </svg>
                </div>
              </h1>
              <div className="button-click-interactive">
                <Link to="/service" className="btn btn-success btn-create-service animated tada">
                利用サービス
                </Link>
                <Link to="/theme" className="link-create-explore">探検する</Link>
              </div>
              
              <h4 className="service-description">私たちはプロのウェブサイトデザインユニットです。 エブデザインは、日本企業の成長に対応できることをうれしく思います。</h4>
              <Link to='/register' className="text-bordered">クリックしてチャット</Link>
            </div>
            <div className="col-6 col-sm-12 pc">
              <LstWebDesignImg fillClass="component-web-design-image " />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;