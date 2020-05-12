import React, { Component } from "react"
import { connect } from "react-redux"
import "../../../../scss/react/client/page/chat/input-send-chat.scss"

class InputSendChat extends Component{
  constructor(props){
    super(props)

    this.state = { sendChat: false };
  }

  componentDidMount(){
    var sup = this;
    window.addEventListener("paste", function (event) {
      // Handle the event
      sup.retrieveImageFromClipboardAsBlob(event, function (imgLoading) {
        // add it in editor
        imgLoading.width = 100
        /// create wrapper img 
        var wrapperImage = document.createElement("div");
        wrapperImage.className = 'remove-image'
        wrapperImage.onclick = function(){
          this.remove();
        }
        wrapperImage.appendChild(imgLoading)
        document.getElementById("js-image--block").appendChild(wrapperImage);
      });
    }, false);
  }


  handleSendMessageDown = event => {

    if ( event.keyCode == 13 && !event.shiftKey) {
      console.log(event.target.value)  /// .replace(/\n/g,'<br />')
      this.setState({ sendChat: true })
      document.getElementById('js-input-chat').value = ''
      return false;
    }
  }

  handleSendMessageUp = () => {
    
    if(this.state.sendChat){
      this.setState({ sendChat: false })
      document.getElementById('js-input-chat').value = ''
    }
  }
  retrieveImageFromClipboardAsBlob = (pasteEvent, callback) => {
    if (!pasteEvent.clipboardData) {
      if (typeof callback == "function") {
        /// call calback function undefine
        callback(undefined);
      }
    };
    var items = pasteEvent.clipboardData.items;
    if (!items) {
      if (typeof callback == "function") {
        /// call calback function undefine
        callback(undefined);
      }
    };
    for (var i = 0; i < items.length; i++) {
      // Skip content if not image
      if (items[i].type.indexOf("image") == -1) continue;
      // Retrieve image on clipboard as blob
      var blob = items[i].getAsFile();
      // Create an image
      var img = new Image();
      // Once the image loads, render the img on the canvas
      img.onload = function () {
        // Update dimensions of the canvas with the dimensions of the image
        callback(this);
      };
      // Crossbrowser support for URL
      var URLObj = window.URL || window.webkitURL;
      // Creates a DOMString containing a URL representing the object given in the parameter
      // namely the original Blob
      img.src = URLObj.createObjectURL(blob);
    }
  }

  render(){
    
    return (
      <div className="component-input-send-chat" >
        <div id="js-image--block" className="image-block"></div>
        <i className="hero-icon hero-emoticon emoticon"></i>
        <i className="hero-icon hero-file file"></i>
        <textarea id="js-input-chat" onKeyDown={this.handleSendMessageDown} onKeyUp={this.handleSendMessageUp} placeholder="メッセージを書く..."></textarea>
        <i className="hero-icon hero-send-outline send"></i>
        <i className="hero-icon hero-heart-multiple-outline react"></i>
      </div>
    );
  }
}
export default connect()(InputSendChat);