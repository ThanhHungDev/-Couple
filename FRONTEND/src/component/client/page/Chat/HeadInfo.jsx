import React, { Component } from "react";
import { connect } from "react-redux"
import "../../../../scss/react/client/page/chat/head-info.scss"

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

  render() {

    console.log("render lại head ìon")
    var { users } = this.props
    var userActiveChat = users.find( user => user.isActive );

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
          
        </div>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.userChat
  }
}
export default connect(mapStateToProps)(HeadInfo);