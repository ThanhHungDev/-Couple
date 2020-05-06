import React, { Component } from "react";

import Header from "../_layout/header/Header.jsx";
import Footer from "../_layout/footer/index.jsx"


class Chat extends Component {

  render() {
    let match = this.props.match;
    return (
      <div className="component-home">
        <Header match={match} group='/chat'/>
        chat {match.params.id}
        <Footer />
      </div>
    );
  }
}

export default Chat;
