import React, { Component } from "react";
import { connect } from "react-redux";
import ListEmoji from "./ListEmoji.jsx";
import "../../../../scss/react/client/page/chat/input-send-chat.scss";
import config from "../../../../config/index.js"

class InputSendChat extends Component {
  constructor(props) {
    super(props);

    this.state = { sendChat: false };
  }

  componentDidMount() {
    var sup = this;
    window.addEventListener(
      "paste",
      function (event) {
        // Handle the event
        sup.retrieveImageFromClipboardAsBlob(event, function (imgLoading) {
          // add it in editor
          imgLoading.width = 100;
          /// create wrapper img
          var wrapperImage = document.createElement("div");
          wrapperImage.className = "remove-image";
          wrapperImage.onclick = function () {
            this.remove();
          };
          wrapperImage.appendChild(imgLoading);
          document.getElementById("js-image--block").appendChild(wrapperImage);
        });
      },
      false
    );
    window.onclick = function () {
      var emojis = document.getElementById("js-emojis");
      if (emojis) {
        emojis.classList.remove("show");
        setTimeout(function () {
          if (emojis.classList.contains("show-temp")) {
            emojis.classList.remove("show-temp");
            emojis.classList.add("show");
          }
        }, 100);
      }
    };
  }

  handleSendMessageDown = (event) => {
    if (event.keyCode == 13 && !event.shiftKey) {
      console.log(event.target.value); /// .replace(/\n/g,'<br />')
      this.setState({ sendChat: true });
      document.getElementById("js-input-chat").value = "";
      return false;
    }
    if( event.keyCode == 32 ){
      var input = document.getElementById("js-input-chat")
      if(input){
        var content = input.value;
        /// get word last
        var words = content.split(" ");
        var wordLastest = words[words.length - 1];
        console.log(wordLastest)
        //// check have sysbol 
        var emojisCall = config.EMOJIS.filter(item => item.sign == wordLastest)
        console.log(emojisCall)
        if(emojisCall.length){
          /// add icon 
          var lastIndex = content.lastIndexOf(" ")
          input.value = content.substring(0, lastIndex) +  " " +emojisCall[0].symbol
        }
      }
    }
  };

  handleSendMessageUp = () => {
    if (this.state.sendChat) {
      this.setState({ sendChat: false });
      document.getElementById("js-input-chat").value = "";
    }
  };
  retrieveImageFromClipboardAsBlob = (pasteEvent, callback) => {
    if (!pasteEvent.clipboardData) {
      if (typeof callback == "function") {
        /// call calback function undefine
        callback(undefined);
      }
    }
    var items = pasteEvent.clipboardData.items;
    if (!items) {
      if (typeof callback == "function") {
        /// call calback function undefine
        callback(undefined);
      }
    }
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
      try {
        img.src = URLObj.createObjectURL(blob);
      } catch (error) {
        console.log(error);
      }
    }
  };
  showListEmoji = (event) => {
    var emojis = document.getElementById("js-emojis");
    if (emojis) {
      emojis.classList.add("show-temp");
      console.log("ssdfds");
    }
  };

  render() {
    return (
      <div className="component-input-send-chat">
        <div id="js-image--block" className="image-block"></div>
        <i
          className="hero-icon hero-sticker-emoji emoticon"
          onClick={this.showListEmoji}
        ></i>
        <textarea
          id="js-input-chat"
          onKeyDown={this.handleSendMessageDown}
          onKeyUp={this.handleSendMessageUp}
          placeholder="メッセージを書く..."
        ></textarea>
        <i className="hero-icon hero-send-outline send"></i>
        <i className="hero-icon hero-heart-multiple-outline react"></i>
        <ListEmoji />
      </div>
    );
  }
}
export default connect()(InputSendChat);
