import React, { Component } from "react";

import Header from "../../_layout/header/Header.jsx";
import Footer from "../../_layout/footer/index.jsx"
import SideBarChat from "./SideBarChat.jsx"
import ListMessage from "./ListMessage.jsx"
import ModalLogin from "./ModalLogin.jsx"
import ModalRegister from "./ModalRegister.jsx"
import '../../../../scss/react/client/page/chat/chat.scss'
import { connect } from "react-redux"

import "../../../../scss/_modal.jquery.scss"

import { listenLoginEvent, resfeshTokenExpire } from "../../../../library/helper.js"


class Chat extends Component {

  componentDidMount(){
    var { user } = this.props,
        instance = this
    if( !user || !user._id ){
      
      listenLoginEvent()
    }
    if(user){
      console.log( user, " chat " )
      var diff = ((new Date).getTime() - new Date(user.tokens.period).getTime()) / 1000
      if( diff >= user.tokens.expire){
        /// fetch new token
        console.log("refesh token vì hết hạn")
        var dataRefesh = { userId : user._id, refesh : user.tokens.tokenRefesh, detect: this.props.client }
        resfeshTokenExpire( dataRefesh, instance )
      }
    }
  }
  componentDidUpdate(){
    var { user } = this.props,
        instance = this
    if( !user || !user._id ){
      listenLoginEvent()
    }
  }

  render() {
    console.log("render lại Chat")
    
    var match      = this.props.match
    var myinfo = { avatar : '', name: '' }
    var { user } = this.props
    if( user && user._id ){
      myinfo.avatar = user.avatar
      myinfo.name = user.name;
    }

    return (
      <div className="component-chat">
        <Header match={match} group='/chat'/>
        <div className="bg-chat-temalate">
          <div className="wrapper-page-chat">
            <SideBarChat myinfo={myinfo} />
            <ListMessage myinfo={myinfo} />
          </div>
        </div>
        <Footer />
        <ModalLogin />
        <ModalRegister />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    user: state.users,
    client : state.client
  }
}
export default connect(mapStateToProps)(Chat)