import React, { Component } from "react"
import { connect } from "react-redux"
import "../../../../scss/react/client/page/chat/input-send-chat.scss"

class InputSendChat extends Component{
  constructor(props){
    super(props)

    this.state = { sendChat: false };
  }

  handleSendMessageDown = event => {

    if ( event.keyCode == 13 && !event.shiftKey) {
      console.log(event.target.value)  /// .replace(/\n/g,'<br />')
      this.setState({ sendChat: true })
      document.getElementById('js-input-chat').value = ''
      return false;
    }
  }

  handleSendMessageUp = () => {
    
    if(this.state.sendChat){
      this.setState({ sendChat: false })
      document.getElementById('js-input-chat').value = ''
    }
  }

  render(){
    
    return (
      <div className="component-input-send-chat" >
        <i className="hero-icon hero-emoticon emoticon"></i>
        <i className="hero-icon hero-file file"></i>
        <textarea id="js-input-chat" onKeyDown={this.handleSendMessageDown} onKeyUp={this.handleSendMessageUp} placeholder="メッセージを書く..."></textarea>
        <i className="hero-icon hero-send-outline send"></i>
        <i className="hero-icon hero-heart-multiple-outline react"></i>
      </div>
    );
  }
}
export default connect()(InputSendChat);