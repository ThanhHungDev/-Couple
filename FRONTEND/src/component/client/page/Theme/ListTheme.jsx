import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../_layout/header/Header.jsx";
import Footer from "../../_layout/footer/index.jsx";
import ItemTheme from './ItemTheme.jsx'
import CategoryTheme from "./CategoryTheme.jsx"

import "../../../../scss/react/client/page/categories-theme.scss"

class ListTheme extends Component {
    render() {
        var { themes } = this.props;
        var { categories } = this.props;
        return (
            <div className="component-chat">
                <Header />
                <div className="component-intro-theme bg-gradient-home-page">
                    <div className="component-categories-theme">
                        {categories &&
                            categories.map((category, index) => (
                                <CategoryTheme key={index} category={category} />
                            ))}
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
        categories : state.categoriesTheme
    };
};
export default connect(mapStateToProps)(ListTheme);
