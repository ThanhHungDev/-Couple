import React, { Component } from "react";
import Emoji from "./Emoji.jsx";
import config from "../../../../config/index.js"

class ListEmoji extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div id="js-emojis" className="component-list-emoji">
        { config.EMOJIS.map((item) => (
          <Emoji key={item.sign} symbol={item.symbol} sign={item.sign} />
        ))}
      </div>
    );
  }
}
export default ListEmoji;
