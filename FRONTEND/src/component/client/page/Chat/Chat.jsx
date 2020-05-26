import React, { Component } from "react";

import Header from "../../_layout/header/Header.jsx";
import Footer from "../../_layout/footer/index.jsx"
import SideBarChat from "./SideBarChat.jsx"
import ListMessage from "./ListMessage.jsx"
import ModalSignInUp from "./ModalSignInUp.jsx"
import '../../../../scss/react/client/page/chat/chat.scss'

import $ from "jquery"
// import "jquery-modal"


class Chat extends Component {

  componentDidMount(){
    console.log("vào modal")
    // $('#component-modal-sign-in-up').modal();
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
        <ModalSignInUp />
      </div>
    );
  }
}

export default Chat;
