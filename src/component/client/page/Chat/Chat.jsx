import React, { Component } from "react";

import Header from "../../_layout/header/Header.jsx";
import Footer from "../../_layout/footer/index.jsx"
import SideBarChat from "./SideBarChat.jsx"
import ListMessage from "./ListMessage.jsx"

import '../../../../scss/react/client/page/chat/chat.scss'


class Chat extends Component {

  render() {
    // console.log(data_hung);///chat {match.params.id}
    let match = this.props.match;
    return (
      <div className="component-chat">
        <Header match={match} group='/chat'/>
        <div className="bg-chat-temalate">
          <div className="wrapper-page-chat">
            <SideBarChat />
            <ListMessage />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Chat;
