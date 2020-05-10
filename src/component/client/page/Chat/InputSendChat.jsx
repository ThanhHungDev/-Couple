import React, { Component } from "react"
import { connect } from "react-redux"
import TYPE from "../../../../action/type.js"

class InputSendChat extends Component{

  changeActiveUser = ( id) => {

  }

  render(){
    
    return (
      <div className="component-input-send-chat" >
        <textarea>viết gì ddos vào đây</textarea>
      </div>
    );
  }
}
export default connect()(InputSendChat);