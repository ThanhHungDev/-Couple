import React, { Component } from "react";
import { connect } from "react-redux";
import "../../../../../scss/react/client/page/home.scss";

import ItemCraftLayout from "./ItemCraftLayout.jsx";


class HomeIntroLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){

  }

  render() {

    var craftLayouts = this.props.CRAFT_LAYOUTS;

    return (
      <div className="component-home-intro-layout bg-gradient-home-page">
        <div className="topic-website-selector">
          <div className="title-topic">絶妙なデザイン</div>
        </div>
        <div className="component-home-intro-layout">
          {
            craftLayouts.map((item, index)=> <ItemCraftLayout key={index} data={item} />)
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CRAFT_LAYOUTS : state.CRAFT_LAYOUTS
  }
}

export default connect(
  mapStateToProps
)(HomeIntroLayout);
