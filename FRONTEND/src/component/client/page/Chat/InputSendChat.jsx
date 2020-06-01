import React, { Component } from "react";
import { connect } from "react-redux";
import ListEmoji from "./ListEmoji.jsx";
import "../../../../scss/react/client/page/chat/input-send-chat.scss";
import config from "../../../../config/index.js"
import { sendMessageToChannel, saveBlobToServer } from "../../../../library/helper.js"

class InputSendChat extends Component {
  constructor(props) {
    super(props);

    this.state = { sendChat: false }
    this.submitMessageChat = this.submitMessageChat.bind(this)
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
          wrapperImage.className = "remove-image js-sign-url";
          wrapperImage.onclick = function () {
            this.remove();
          };
          wrapperImage.appendChild(imgLoading);
          document.getElementById("js-image--block").appendChild(wrapperImage);
        });
      },
      false
    );
    window.onclick = function (event) {
      if(event.target){
        if(event.target.classList.contains('component-emoji')){
          return;
        }
      }
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

  submitMessageChat = function (message, style, attachment ){
    console.log( {message, style, attachment  } )
    if(!message){
      return false
    }
    if(!style){
      var emojiChat = config.EMOJIS.filter( emoji => emoji.symbol == message.trim() )
      if(emojiChat.length){
        style = "EMOJI"
      }
    }
    console.log(message); /// .replace(/\n/g,'<br />')
    if( this.props.user ){
      /// có 1 vấn đè chưa nghĩ ra cách giải quyết
      /// là nếu token hết hạn thì phải refesh như thế nào để chạy mượt? 
        /// là nếu token hết hạn thì phải refesh như thế nào để chạy mượt? 
      /// là nếu token hết hạn thì phải refesh như thế nào để chạy mượt? 
      /// giải pháp duy nhâts là tạo 1 hàm refesh token trước khi send chat
      /// sau đó chưa dispacth ngay mà send chat đã. rồi dispatch 1 lần
      var { user }   = this.props,
          instance   = this,
          dataRefesh = false
      var diff     = ((new Date).getTime() - new Date(user.tokens.period).getTime()) / 1000
      if( diff >= user.tokens.expire){
        /// fetch new token
        var dataRefesh = { userId : user._id, refesh : user.tokens.tokenRefesh, detect: this.props.client }
        console.log(dataRefesh, "refesh token trước khi send chat vì hết hạn")
      }
      var messageSendToChannel = message
      var channelSend = this.props.userChat.find( channel => {
        return channel.isActive == true
      })
      var channelId = channelSend.id
      var tokenAccess = user.tokens.tokenAccess
      var detect = this.props.client
      sendMessageToChannel( messageSendToChannel, style, attachment, channelId, tokenAccess, detect, instance, dataRefesh)
      
    }
  }

  handleSendEmojiSubmit = () => {
    var message = " 💝 "
    var style = "EMOJI"
    this.submitMessageChat(message, style, null)
  }
  handleSendMessageSubmit = () => {
    var style = ""
    var urlAttachment = []
    console.log( " vào click send submit ")
    var message = document.getElementById("js-input-chat").value
    if(!message){
      return false
    }
    document.getElementById("js-input-chat").value = ''
    var imagesDom = document.getElementById("js-image--block")
    var images = imagesDom.getElementsByClassName("remove-image")
    if(images.length){
      style = "IMAGE"
      urlAttachment = []
      for (let index_image_send = 0; index_image_send < images.length; index_image_send++) {
        urlAttachment.push(images[index_image_send].getAttribute('data-url'))
      }
    }
    document.getElementById("js-image--block").innerHTML = ''
    this.submitMessageChat(message, style, urlAttachment)
  }

  handleSendMessageDown = (event) => {
    
    if (event.keyCode == 13 && !event.shiftKey) {
      var style = ""
      var urlAttachment = []
      var imagesDom = document.getElementById("js-image--block")
      var images = imagesDom.getElementsByClassName("remove-image")
      if(images.length){
        style = "IMAGE"
        urlAttachment = []
        for (let index_image_send = 0; index_image_send < images.length; index_image_send++) {
          urlAttachment.push(images[index_image_send].getAttribute('data-url'))
        }
      }
      document.getElementById("js-image--block").innerHTML = ''
      this.submitMessageChat(event.target.value, style, urlAttachment)
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
      saveBlobToServer(blob)
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
  }
  showListEmoji = (event) => {
    var emojis = document.getElementById("js-emojis");
    if (emojis) {
      emojis.classList.add("show-temp");
    }
  };

  render() {
    if( !this.props.user || !this.props.socket || !this.props.userChat.length ){
      return null
    }
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
        <i className="hero-icon hero-send-outline send" onClick={ this.handleSendMessageSubmit }></i>
        <i className="hero-icon hero-heart-multiple-outline react" onClick={ this.handleSendEmojiSubmit }></i>
        <ListEmoji />
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    user    : state.users,
    client  : state.client,
    userChat: state.userChat,
    socket : state.socket
  }
}
export default connect(mapStateToProps)(InputSendChat);
