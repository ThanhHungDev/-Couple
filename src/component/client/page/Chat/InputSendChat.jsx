import React, { Component } from "react"
import { connect } from "react-redux"
import "../../../../scss/react/client/page/chat/input-send-chat.scss"

class InputSendChat extends Component{

  render(){
    
    return (
      <div className="component-input-send-chat" >
        <i className="hero-icon hero-emoticon emoticon"></i>
        <i className="hero-icon hero-file file"></i>
        <textarea placeholder="メッセージを書く..."></textarea>
        <i className="hero-icon hero-send-outline send"></i>
        <i className="hero-icon hero-heart-multiple-outline react"></i>
      </div>
    );
  }
}
export default connect()(InputSendChat);