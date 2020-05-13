import React, { Component } from "react";
import Emoji from "./Emoji.jsx";

class ListEmoji extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emojis: [
        { name: "emoticon", content: "F0C68" },
        { name: "emoticon-angry", content: "F0C69" },
        { name: "emoticon-angry-outline", content: "F0C6A" },
        { name: "emoticon-confused", content: "F10DE" },
        { name: "emoticon-confused-outline", content: "F10DF" },
        { name: "emoticon-cool", content: "F0C6B" },
        { name: "emoticon-cool-outline", content: "F01F3" },
        { name: "emoticon-cry", content: "F0C6C" },
        { name: "emoticon-cry-outline", content: "F0C6D" },
        { name: "emoticon-dead", content: "F0C6E" },
        { name: "emoticon-dead-outline", content: "F069B" },
        { name: "emoticon-devil", content: "F0C6F" },
        { name: "emoticon-devil-outline", content: "F01F4" },
        { name: "emoticon-excited", content: "F0C70" },
        { name: "emoticon-excited-outline", content: "F069C" },
        { name: "emoticon-frown", content: "F0F4C" },
        { name: "emoticon-frown-outline", content: "F0F4D" },
        { name: "emoticon-happy", content: "F0C71" },
        { name: "emoticon-happy-outline", content: "F01F5" },
        { name: "emoticon-kiss", content: "F0C72" },
        { name: "emoticon-kiss-outline", content: "F0C73" },
        { name: "emoticon-lol", content: "F1214" },
        { name: "emoticon-lol-outline", content: "F1215" },
        { name: "emoticon-neutral", content: "F0C74" },
        { name: "emoticon-neutral-outline", content: "F01F6" },
        { name: "emoticon-outline", content: "F01F2" },
        { name: "emoticon-poop", content: "F01F7" },
        { name: "emoticon-poop-outline", content: "F0C75" },
        { name: "emoticon-sad", content: "F0C76" },
        { name: "emoticon-sad-outline", content: "F01F8" },
        { name: "emoticon-tongue", content: "F01F9" },
        { name: "emoticon-tongue-outline", content: "F0C77" },
        { name: "emoticon-wink", content: "F0C78" },
        { name: "emoticon-wink-outline", content: "F0C79" },
      ],
    };
  }
  render() {
    return (
      <div id="js-emojis" className="component-list-emoji">
        {this.state.emojis.map((item) => (
          <Emoji
            key={item.name}
            name={item.name}
            icon={item.content}
          />
        ))}
      </div>
    );
  }
}
export default ListEmoji;
