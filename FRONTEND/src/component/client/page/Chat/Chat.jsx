import React, { Component } from "react";

import Header from "../../_layout/header/Header.jsx";
import Footer from "../../_layout/footer/index.jsx"
import SideBarChat from "./SideBarChat.jsx"
import ListMessage from "./ListMessage.jsx"
import ModalLogin from "./ModalLogin.jsx"
import ModalRegister from "./ModalRegister.jsx"
import '../../../../scss/react/client/page/chat/chat.scss'

import $ from "jquery"
import "jquery-modal"
import "../../../../scss/_modal.jquery.scss"


class Chat extends Component {

  componentDidMount(){
    ///check authentication
    if (typeof(Storage) !== 'undefined') {
      var user = JSON.parse(localStorage.getItem('user'));
      console.log(user)
      if( !user || !user._id ){
        $('#js-modal-login').modal({
          fadeDuration: 0,
          showClose: false,
          escapeClose: false,
          clickClose: false,
          closeExisting: true
        });
        $('a[href="#js-modal-register"]').click(function(event) {
          $(this).modal({
              fadeDuration: 0,
              showClose: false,
              escapeClose: false,
              clickClose: false,
              closeExisting: true
          });
          event.preventDefault();
        });
        $('a[href="#js-modal-login"]').click(function(event) {
          $(this).modal({
              fadeDuration: 0,
              showClose: false,
              escapeClose: false,
              clickClose: false,
              closeExisting: true
          });
          event.preventDefault();
        });
      }
    }
  }

  render() {
    console.log("render lại Chat")
    // console.log(data_hung);///chat {match.params.id}
    let match = this.props.match;

    var { myinfo } = this.props;
    if(!myinfo || !myinfo.avatar || !myinfo.name){
      myinfo = {};
      myinfo.avatar = '/image/avatar-hero.jpg'
      myinfo.name = 'チュオン タン フン';
    }

    return (
      <div className="component-chat">
        <Header match={match} group='/chat'/>
        <div className="bg-chat-temalate">
          <div className="wrapper-page-chat">
            <SideBarChat myinfo={myinfo} />
            <ListMessage myinfo={myinfo} />
          </div>
        </div>
        <Footer />
        <ModalLogin />
        <ModalRegister />
      </div>
    );
  }
}

export default Chat;
