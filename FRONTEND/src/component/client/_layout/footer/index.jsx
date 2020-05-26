import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import "../../../../scss/react/client/footer/footer.scss"
import ContentFooter from './Content.jsx'
export default class Footer extends Component {

  render(){
    return(
      <div className="component-footer wrapper-footer-page bg-gradient-home-page">
        
        <div className="container head-footer">
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
            <i className='hero-icon hero-message-cog-outline'></i>
            <div className="option-contact-content">
              <h6 className="type"><Link to='/chat/advisory-system'>コンサルティングウェブデザイン</Link></h6>
              <Link className="link" to='/chat/advisory-system'>クリックしてチャット</Link>
            </div>
          </div>

          <div className="item-advisory">
            <i className='hero-icon hero-certificate-outline'></i>
            <div className="option-contact-content">
              <h6 className="type"><Link to='/chat/advisory-system'>技術サポート</Link></h6>
              <Link className="link" to='/chat/advisory-system'>クリックしてチャット</Link>
            </div>
          </div>

          <div className="item-advisory">
            <i className='hero-icon hero-email-edit-outline'></i>
            <div className="option-contact-content">
              <h6 className="type"><Link to='/chat/advisory-system'>Webリクエストを送信</Link></h6>
              <Link className="link" to='/chat/advisory-system'>クリックしてチャット</Link>
            </div>
          </div>

        </div>
        <ContentFooter />


      </div>
    )
  }
}