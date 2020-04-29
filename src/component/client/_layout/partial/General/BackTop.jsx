import React, { Component } from 'react';
import "../../../../../scss/react/client/page/back-top.scss"
export default class BackTop extends Component {

  constructor(props) {
    super(props);
    this.timeOut; 
  }



  trackScroll = (e) => {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {

      var btnBackTop = document.getElementsByClassName('component-back-top')
      if(btnBackTop.length){

        btnBackTop = btnBackTop[0]
        btnBackTop.classList.remove('d-none');
      }
      
    }
    if (scrolled < coords) {

      var btnBackTop = document.getElementsByClassName('component-back-top')
      if(btnBackTop.length){

        btnBackTop = btnBackTop[0]
        btnBackTop.classList.add('d-none');
      }
    }
  }

  backToTop = () => {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(this.backToTop, 10);
    }
  }

  componentDidMount(){

    window.addEventListener('scroll', this.trackScroll);
  }
  


  
  render(){
    return(
      <div className="component-back-top d-none" onClick={this.backToTop}>
        <div title="ページの先頭に移動" id="back-top" className="dpl_way">
          <i className="hero-icon hero-arrow-up-bold-box-outline"></i>
        </div>
      </div>
    )
  }
}