import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import "../../../../scss/react/client/footer/footer.scss"

export default class Footer extends Component {

  render(){
    return(
      <div className="component-footer wrapper-footer-page bg-gradient-home-page">
        
        <div className="container">
          <div className="row">

            <div className="col-12">
              <h3 className="footer-title">
                チャットシステムでお客様を年中無休でサポート <br/>
                <Link to='/chat' className='footer-go-to-chat'>クリックしてチャット</Link>
              </h3>
              <p className="des-footer">経験豊富なスタッフのチームにより、ウェブサイトから問題を導き対処するだけでなく、コンサルティングを行い、ビジネスと共に成長します。</p>
            </div>
          </div>
        </div>

        <div className="option-contact">

          <div className="item-advisory">
            <span><i className='hero-icon hero-headset'></i></span>
            <div className="option-contact-content">
              <h6>コンサルティングウェブデザイン</h6>
              <Link to='/chat/advisory-system'>クリックしてチャット</Link>
            </div>
          </div>

          <div className="item-advisory">
            <span><i className='hero-icon hero-cellphone-cog'></i></span>
            <div className="option-contact-content">
              <h6>技術サポート</h6>
              <Link to='/chat/advisory-system'>クリックしてチャット</Link>
            </div>
          </div>

          <div className="item-advisory">
            <span><i className='hero-icon hero-email-edit-outline'></i></span>
            <div className="option-contact-content">
              <h6>Webリクエストを送信</h6>
              <Link to='/chat/advisory-system'>クリックしてチャット</Link>
            </div>
          </div>

        </div>


      </div>
    )
  }
}