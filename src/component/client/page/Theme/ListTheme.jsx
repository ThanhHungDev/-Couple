import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../_layout/header/Header.jsx";
import Footer from "../../_layout/footer/index.jsx";
import ItemTheme from './ItemTheme.jsx'

class ListTheme extends Component {
    render() {
        var { themes } = this.props;

        return (
            <div className="component-chat">
                <Header />
                <div className="component-intro-theme bg-gradient-home-page">
                    <div className="topic-website-selector">
                        <div className="title-topic">絶妙なデザイン</div>
                    </div>
                    <div className="component-intro-theme">
                        {themes &&
                            themes.map((item, index) => (
                                <ItemTheme key={index} data={item} />
                            ))}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        themes: state.themes,
    };
};
export default connect(mapStateToProps)(ListTheme);
