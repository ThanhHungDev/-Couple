import React, { Component } from "react";
import Header from "../_layout/header/Header.jsx";
import Footer from "../_layout/footer/index.jsx";
import "../../../scss/react/client/page/contact.scss";
import config from "../../../config"
import { Link } from "react-router-dom";
import { drawMapContact } from "../../../library/helper.js"

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){

        drawMapContact( config )
    }

    render() {
        return (
            <div className="component-contact-page">
                <Header />
                <div className="component-contact">
                <div id="map-contact-canvas" className="map-contact"></div>
                    <div className="form-contact">
                        <h1 className="contact-intro">プロのウェブサイトデザイン会社</h1>
                        <h2 className="title-contact">連絡先</h2>
                        <div className="left-infor">
                            <h2 className="mycompany">EBUDEZAIN Vietnam Limited Company</h2>
                            <div className="contact-address">
                                <div className="company-name">
                                    <i className="hero-icon hero-account-group-outline"></i>
                                    <span>{config.SITE.company_name}</span>
                                </div>
                                <div className="tax-code">
                                    <i className="hero-icon hero-star-box-multiple-outline"></i>
                                    <span> {config.SITE.tax} </span>
                                </div>
                                <div className="tax-code-date">
                                    <i className="hero-icon hero-update"></i>
                                    <span> {config.SITE.tax_register}</span>
                                </div>
                                <div className="address">
                                    <i className="hero-icon hero-home-map-marker"></i>
                                    <span>{config.SITE.address}</span>
                                </div>
                                <div className="phone">
                                    <i className="hero-icon hero-cellphone-nfc"></i>
                                    <span>
                                        日本の電話：
                                        <a href={"tel:" + config.SITE.phone}>
                                            {config.SITE.phone}
                                        </a>
                                    </span>
                                </div>
                                <div className="email">
                                    <i className="hero-icon hero-card-account-mail-outline"></i>
                                    <span>
                                        <a href={"mailto:" + config.SITE.email}>
                                            {config.SITE.email}
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <h3 className="intro-chat-contact">
                            アカウントを作成したり、管理者を通じてチャットページで匿名でアクセスしたりすると、無料サービスを利用できるようになります
                            <Link to="/chat" >チャットページに行く</Link>
                            </h3>
                        </div>
                        <div className="right-form-contact">
                            <div className="form-input">
                                <label> あなたのフルネーム <i>✵</i></label>
                                <input type="text" />
                            </div>
                            <div className="form-input">
                                <label> メールアドレス <i>✵</i></label>
                                <input type="text" />
                            </div>
                            <div className="form-input">
                                <label> 電話番号 <i>✵</i></label>
                                <input type="text" />
                            </div>
                            <div className="form-input">
                                <label> メッセージ内容 </label>
                                <textarea className=""></textarea>
                            </div>
                            <button className="btn-send-mail-contact">メール管理者に送信</button>
                        </div>
                    </div>
                    
                </div>
                <Footer />
            </div>
        );
    }
}

export default Contact;
