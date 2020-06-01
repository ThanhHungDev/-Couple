import React, { Component } from "react"
import { connect } from "react-redux"
import TYPE from "../../../../action/type.js"
import '../../../../scss/react/client/page/chat/message-chat.scss'
import CONFIG from "../../../../config"

class MessageChat extends Component{

  render(){
    var { myinfo } = this.props
    var { message } = this.props
    var { toUser } = this.props

    var userInfo = toUser

    if(!toUser){
      return null
    }

    if( !message.type ){
      var typeMessage = 'float-left ';
    }else{
      var typeMessage = 'float-right by-me ';
      userInfo = myinfo;
    }
    var { style } = message
    return (
      <div className="component-message-chat" >

        <div className={ typeMessage + "chat-group" }>
          <figure className="avatar">
            <img src={ userInfo.avatar } alt=""/>
          </figure>
          <div className="message-content">
            {
              style == "IMAGE" && 
              <div className={ style } >
                { message.attachment.map( (image, index) => {
                  return <div key={"wrapper-attachment" + index + image} className="wrapper-attachment">
                    <img src={ CONFIG.SERVER.ASSET() + image } /> 
                  </div>
                })}
              </div>
            }
            <div className={ style + " text" } >{ message.content }</div>
            <div className="time">{ message.time }</div>
          </div>
        </div>

      </div>
    );
  }
}
export default connect()(MessageChat);