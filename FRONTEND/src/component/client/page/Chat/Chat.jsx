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

import { listenLoginEvent } from "../../../../library/helper.js"


class Chat extends Component {

  componentDidMount(){
    var { auth } = this.props
    console.log( auth , "authe")
    if( !auth || !auth._id ){
      listenLoginEvent()
    }
  }

  render() {
    console.log("render lại Chat")
    // console.log(data_hung);///chat {match.params.id}
    let match = this.props.match;

    if (typeof(Storage) !== 'undefined') {
      var user = JSON.parse(localStorage.getItem('user'))
      if( user && user._id ){
        var myinfo = {};
        myinfo.avatar = user.avatar
        myinfo.name = user.name;
      }else{
        var myinfo = { avatar : '', name: '' }
      }
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
    auth: state.users
  }
}
export default connect(mapStateToProps)(Chat)