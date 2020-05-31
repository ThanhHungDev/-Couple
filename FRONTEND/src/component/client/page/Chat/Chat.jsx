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
import CONFIG from "../../../../config"
import { listenLoginEvent, resfeshTokenExpire, fetchChannelMessage } from "../../../../library/helper.js"


class Chat extends Component {

  constructor(props){
    super(props)
    this.state = {
      stopUpdate : false
    }
  }

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
        var dataRefesh = { userId : user._id, refesh : user.tokens.tokenRefesh, detect: this.props.client }
        console.log(dataRefesh, "refesh token vì hết hạn")
        resfeshTokenExpire( dataRefesh, instance )
      }else if( this.props.userChat && !this.props.userChat.length ){
        
        var dataFetchChannel = { access: user.tokens.tokenAccess, ...this.props.client }
        console.log( dataFetchChannel, " fetch channel ahihi ")
        fetchChannelMessage(dataFetchChannel, instance)
      }
      
    }

    
  }
  componentDidUpdate(){
    var { user } = this.props,
        instance = this
    if( !user || !user._id ){
      listenLoginEvent()
    }

    if( !this.state.stopUpdate ){
      /// join channel ( because 3 channel is admin so join all channel )
      var EVENT = CONFIG_EVENT
      console.log( EVENT, "join channel ( because 3 channel is admin so join all channel )" )
      if( user && this.props.socket && this.props.userChat && this.props.userChat.length ){
        var idChannels = this.props.userChat.map( channel => {
          return channel.id
        })
        var dataJoinChannel = { channels: idChannels, access: user.tokens.tokenAccess, ...this.props.client }
        
        this.setState({ stopUpdate : true }, function(){
          console.log( dataJoinChannel, "---------------------------------join to channel---------------------------------join to channel---------------------------------join to channel---------------------------------join to channel---------------------------------join to channel---------------------------------join to channel---------------------------------join to channel---------------------------------join to channel---------------------------------join to channel---------------------------------join to channel---------------------------------join to channel---------------------------------join to channel---------------------------------join to channel---------------------------------join to channel---------------------------------join to channel---------------------------------join to channel---------------------------------join to channel" )
          this.props.socket.emit(EVENT.JOIN_CHANNEL, dataJoinChannel)
        })
      }
    }
    
  }

  shouldComponentUpdate(nextProps) {
    return !this.state.stopUpdate
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
    user    : state.users,
    client  : state.client,
    userChat: state.userChat,
    socket : state.socket
  }
}
export default connect(mapStateToProps)(Chat)