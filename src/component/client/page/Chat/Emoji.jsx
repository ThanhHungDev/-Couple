import React, { Component } from "react"
import "../../../../scss/react/client/page/chat/emoji.scss"

class Emoji extends Component {

  
  render() {

    return (
      <i className={"hero-icon component-emoji hero-" + this.props.name}></i>
    );
  }
}
export default Emoji;