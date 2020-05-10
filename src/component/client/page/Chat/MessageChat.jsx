import React, { Component } from "react"
import { connect } from "react-redux"
import TYPE from "../../../../action/type.js"
import '../../../../scss/react/client/page/chat/message-chat.scss'

class MessageChat extends Component{

  render(){
    var { myinfo } = this.props
    var { message } = this.props
    var { toUser } = this.props

    var userInfo = toUser;

    if( !message.type ){
      var typeMessage = 'float-left ';
    }else{
      var typeMessage = 'float-right by-me ';
      userInfo = myinfo;
    }
    return (
      <div className="component-message-chat" >

        <div className={ typeMessage + "chat-group" }>
          <figure className="avatar">
            <img src={ userInfo.avatar } alt=""/>
          </figure>
          <div className="message-content">
            <div className="text">{ message.content }</div>
            <div className="time">{ message.time }</div>
          </div>
        </div>

      </div>
    );
  }
}
export default connect()(MessageChat);