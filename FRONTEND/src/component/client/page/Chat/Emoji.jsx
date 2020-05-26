import React, { Component } from "react"
import "../../../../scss/react/client/page/chat/emoji.scss"

class Emoji extends Component {

  addIconInputChat = event => {
    var input = document.getElementById("js-input-chat")
    if(input){
      var content = input.value;
      /// add icon 
      content = content + this.props.symbol
      input.value = content
    }
  }
  
  render() {

    return (
      <i className="component-emoji" onClick={this.addIconInputChat}>{this.props.symbol}</i>
    );
  }
}
export default Emoji;