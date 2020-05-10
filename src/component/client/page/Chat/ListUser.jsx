import React, { Component } from "react";
import "../../../../scss/react/client/page/chat/list-user.scss"
import UserChat from "./UserChat.jsx"
import { connect } from "react-redux"

class ListUser extends Component {

  render() {

    var { users } = this.props;

    console.log("render list user")

    return (
      <div className="component-list-user">
        { users && users.map(user => <UserChat key={user.id} user={user} />)}
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.userChat
  }
}

export default connect(mapStateToProps)(ListUser);
