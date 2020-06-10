import React, { Component } from "react";
import { connect } from "react-redux"
import "../../../../scss/react/client/page/chat/head-info.scss"
import { caller } from "../../../../library/helper.js"

class HeadInfo extends Component {

  renderTextEndTimeonline = time => {

    var endTime = new Date( time.replace(/-/g, "/") )
    var timeNow = new Date

    var diffTime = Math.abs(timeNow - endTime)
    diffTime = parseInt(diffTime)

    var diffTimeMinute = Math.round(diffTime / (1000 * 60 ))

    if( diffTimeMinute >= 60 ){

      var diffTimeHour = Math.round(diffTimeMinute / 60)
      if( ( diffTimeHour / 24 ) < 1 ){
        return diffTimeHour + "時間前にアクティブ"
      }
      return Math.round(diffTimeHour / 24) + "日前にアクティブ"
    }else {
      return "アクティブ" + diffTimeMinute + "分前"
    }
  }

  componentDidUpdate(){
    var { userChat } = this.props
    var userActiveChat = userChat.find( user => user.isActive )

    /// tìm được channel đang chat
    if(userActiveChat){
      if( typeof userActiveChat.peerid == undefined ){
        console.log("EMIT PEER ID")
      }
    }
  }

  handleCallerClick = event => {
    console.log("render lại head ìon")
    var { userChat } = this.props
    var userActiveChat = userChat.find( user => user.isActive )

    if(!userActiveChat){
      alert("failling, you can f5 page")
      return null
    }

    caller(userActiveChat, this.props.user, this.props.client)
  }

  render() {

    console.log("render lại head ìon")
    var { userChat } = this.props
    var userActiveChat = userChat.find( user => user.isActive )

    if(!userActiveChat){
      return null
    }

    var timeOnline = ''
    if( userActiveChat.isOnline ){

      var timeOnline = "オンライン"
    }else{

      var timeOnline = this.renderTextEndTimeonline(userActiveChat.timeEndOnline)
    }
    

    return (
      <div className="component-head-info">

        <div className="user-active-chat">
          <figure className="state-avatar active-online">
            <img src={userActiveChat.avatar} alt=""/>
          </figure>
          <div className="text-info">
            <span className="name">{ userActiveChat.name }</span>
            <span className={ ( userActiveChat.isOnline ? "active-now" : '' ) + " time-online"}>{ timeOnline }</span>
          </div>
          <video id="id-peer-remote" width="300" controls></video>
          <video id="id-peer-local" width="300" controls></video>
          <button onClick={ this.handleCallerClick }>call</button>
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    userChat: state.userChat,
    users : state.users,
    user    : state.users,
    client  : state.client
  }
}
export default connect(mapStateToProps)(HeadInfo);