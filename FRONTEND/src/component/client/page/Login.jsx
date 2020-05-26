import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../_layout/header/Header.jsx";
import Footer from "../_layout/footer/index.jsx";

import "../../../scss/react/client/page/login.scss"

class Login extends Component {
    render() {
        
        return (
            <div className="component-login">
                <Header />
                <div className="component-login">
                    <div className="form-login">
                        <form action="">
                            
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {}
};
export default connect(mapStateToProps)(Login)