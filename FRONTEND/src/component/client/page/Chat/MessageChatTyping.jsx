import React, { Component } from "react";

class MessageChatTyping extends Component {
  render() {
    var { toUser } = this.props
    if(!toUser){
      return null
    }
    console.log(toUser, "toUser")
    var typeMessage = 'float-left ';
    return (
      <div id="js-typing" className="component-message-chat typing-chat-messsage" channel={toUser.id}>
        <div className={ typeMessage + "chat-group" }>
          <figure className="avatar">
            <img src={ toUser.avatar } alt=""/>
          </figure>
          <div className="message-content typing-message">
            <div className="text">
            <span className="typing-text">{ toUser.name  && toUser.name + " が入力しています "}</span>
              <div className="ticontainer">
                <div className="tiblock">
                  <div className="tidot"></div>
                  <div className="tidot"></div>
                  <div className="tidot"></div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MessageChatTyping;
