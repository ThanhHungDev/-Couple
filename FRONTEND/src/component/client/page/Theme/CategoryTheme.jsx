import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CategoryTheme extends Component {
    render() {
        var { category } = this.props
        
        return (
            <div className="component-category-theme">
                <Link className="link-icon-theme" to={"theme/" + category.slug}><i className={"hero-icon " + category.icon } ></i></Link>
                <Link className="link-name-theme" to={"theme/" + category.slug}>{ category.name }</Link>
            </div>
        )
    }
}
