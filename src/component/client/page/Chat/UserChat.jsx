import React, { Component } from "react"
import { connect } from "react-redux"
import TYPE from "../../../../action/type.js"

class UserChat extends Component{

  changeActiveUser = ( id) => {

    this.props.dispatch({ type: TYPE.CHAT.CHANGE_USER_CHAT_DEFAULT, payload : id })
  }

  render(){
    var { user } = this.props
    var classActiveOnline = user.isOnline ? ' active ' : ''
    var classActiveMessage = user.isActive ? ' active-message ' : ''
    return (
      <div className="component-user-chat-sidebar" >
        <div className={ classActiveOnline + classActiveMessage + "user-chat"} 
        onClick={() => this.changeActiveUser( user.id )} >
          <figure className="state-avatar">
            <img src={user.avatar} alt=""/>
          </figure>
          <div className="text-info">
            <span className="name">{user.name}</span>
            <span className="last-message">{user.message[0].content}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(UserChat);