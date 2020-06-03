import React, { Component } from "react";

// import SearchUser from "./SearchUser.jsx"
import ListUser from "./ListUser.jsx"
import "../../../../scss/react/client/page/chat/sidebar.scss"

class SideBarChat extends Component {

  render() {
    console.log("render sidebar")
    var { myinfo } = this.props;
    
    return (
      <div className="component-sidebar-chat">
        <div className="myinfo">
          <div className="avatar">
            <figure className="state-avatar active-online">
              <img src={myinfo.avatar} alt=""/>
            </figure>
            <span className="name">{myinfo.name}</span>
          </div>
        </div>
        <div className="list-user">
          {/* <SearchUser /> */}
          <ListUser />
        </div>
      </div>
    );
  }
}

export default SideBarChat;
