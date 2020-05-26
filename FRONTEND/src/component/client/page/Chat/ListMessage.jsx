import React, { Component } from "react"
import { connect } from "react-redux"
import HeadInfo from "./HeadInfo.jsx"
import MessageChat from "./MessageChat.jsx"
import InputSendChat from "./InputSendChat.jsx"
import MessageChatTyping from "./MessageChatTyping.jsx"
import "../../../../scss/react/client/page/chat/list-message.scss"

class ListMessage extends Component {

  componentDidMount(){
    document.getElementById('js-scroll-to-bottom').scrollTop  = document.getElementById('js-scroll-to-bottom').scrollHeight
  }

  componentDidUpdate(){
    document.getElementById('js-scroll-to-bottom').scrollTop  = document.getElementById('js-scroll-to-bottom').scrollHeight
  }
  render() {
    
    console.log("render lại ListMessage")
    var { users } = this.props
    var userActiveChat = users.find( user => user.isActive );
    var messages = userActiveChat.message;

    var { myinfo } = this.props
    return (
      <div className="component-list-message">
        <HeadInfo />
        <div className="wrapper-list-message" id="js-scroll-to-bottom">
          { messages && messages.map( 
            (message , key) => <MessageChat key={"message-chat" + key + userActiveChat.id} myinfo={myinfo} message={message} toUser={userActiveChat} /> 
          )}
          <MessageChatTyping toUser={userActiveChat} />
        </div>
        <InputSendChat />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.userChat
  }
}
export default connect(mapStateToProps)(ListMessage);
