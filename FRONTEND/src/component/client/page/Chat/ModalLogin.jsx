import React, { Component } from "react"
import Email from "../../../svg/email.jsx"
import Password from "../../../svg/password.jsx"

class ModalLogin extends Component {
  render() {
    return (
      <div className="model-wrapper-form-control modal animated fadeIn" id="component-modal-login">
        <div className="modal-header">đăng nhập</div>
        <div className="modal-body">
          <div className="input-group">
            <span className="svg-icon"> <Email /> </span>
            <input name="email" ref="email" type="text" autoCorrect="off" autoComplete="off"
            autoCapitalize="none" className="input-control" placeholder="メールアドレスを入力して"/>
          </div>
          <div className="input-group">
            <span className="svg-icon"><Password /></span>
            <input name="password" ref="password" type="password" autoCorrect="off" autoComplete="off"
              autoCapitalize="none" className="input-control" placeholder="パスワードを入力してください" />
          </div>
          <div className="link-page clear">
            <a href="#js-modal-register" className="link-register"> 登録 </a>
          </div>
        </div>
        <div className="modal-footer">
          <a href="#" className="d-inline-block btn btn-cancel-login bg-red text-white" rel="modal:close"> hủy </a>
          <a id="js-btn-login-submit-form" href="" 
          className="d-inline-block btn btn-login bg-primary-color-dark text-white" >
          ログインする
          </a>
        </div>
        <div className="js-progress-wrap animated fadeIn clear d-none">
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalLogin
