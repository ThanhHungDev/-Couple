import React, { Component } from "react";

import Header from "../../_layout/header/Header.jsx";
import Footer from "../../_layout/footer/index.jsx"
import SideBarChat from "./SideBarChat.jsx"
import ListMessage from "./ListMessage.jsx"

import '../../../../scss/react/client/page/chat/search-user.scss'


class Chat extends Component {

  render() {
    // console.log(data_hung);///chat {match.params.id}
    let match = this.props.match;
    return (
      <div className="component-search-user">
        <input type="text" className="search-user" name="search-user" placeholder='入力して誰かを見つける' />
        <i className="hero-icon hero-account-search-outline"></i>
      </div>
    );
  }
}

export default Chat;
