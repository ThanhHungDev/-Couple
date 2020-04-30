import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import "../../../../scss/react/client/footer/footer.scss"

export default class ContentFooter extends Component {

  render(){
    return(
      <div className="component-footer-content">
        <div className="about-us">
          <div className="company-name">
            <i className='hero-icon hero-account-group-outline'></i> 
            EBUDEZAIN Vietnam Limited Company
          </div>
          <div className="tax-code">
            <i className='hero-icon hero-star-box-multiple-outline'></i> 
            0314650129 <i className="fad fa-address-card"></i> <i className="fad fa-map-pin"></i>
            <i className="fal fa-location"></i>
          </div>
          <div className="tax-code-date">
            <i className='hero-icon hero-update'></i> 
            28-09-2017
          </div>
          <div className="address">0674, Loc Hoa Hamlet, Binh Gia Commune, Chau Duc District, Ba Ria - Vung Tau Province, Vietnam</div>
          <div className="phone">in japan: 080-3387-0674</div>
          <div className="email">thanhhung.code@gmail.com</div>
        </div>
      </div>
    )
  }
}