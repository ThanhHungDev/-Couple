import React, { Component } from "react";
import { connect } from "react-redux";
import "../../../../../scss/react/client/page/home.scss";

import ItemTheme from './ItemTheme.jsx'
class HomePage extends Component {

  render() {
    var themes = this.props.themes;

    return (
      <div className="component-intro-theme bg-gradient-home-page">
        <div className="topic-website-selector">
          <div className="title-topic">絶妙なデザイン</div>
        </div>
        <div className="component-intro-theme">
          {
            themes && themes.map((item, index)=> <ItemTheme key={index} data={item} />)
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    themes : state.themes
  }
}

export default connect(
  mapStateToProps
)(HomePage);
