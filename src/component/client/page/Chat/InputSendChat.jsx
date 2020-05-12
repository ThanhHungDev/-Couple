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
      sup.retrieveImageFromClipboardAsBlob(event, function (base64) {
        // add it in editor
        document.getElementById("editor").innerHTML = base64;
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
      // Create an abstract canvas and get context
      var mycanvas = document.createElement("canvas");
      var ctx = mycanvas.getContext('2d');
      // Create an image
      var img = new Image();
      // Once the image loads, render the img on the canvas
      img.onload = function () {
        // Update dimensions of the canvas with the dimensions of the image
        mycanvas.width = this.width;
        mycanvas.height = this.height;
        var scale = this.height / this.width
        // Draw the image
        ctx.drawImage(img, 0, 0, 200, 200 * scale);
        // Execute callback with the base64 URI of the image
        if (typeof (callback) == "function") {
          callback(mycanvas.toDataURL("image/png"));
        }
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
        <div id="editor"></div>
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