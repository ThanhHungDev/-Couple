import React, { Component } from "react"
import Email from "../../../svg/email.jsx"
import Password from "../../../svg/password.jsx"

class ModalLogin extends Component {
  createUserAnonymously = () => {
    alert("đã click")
  }
  render() {
    return (
      <div className="model-wrapper-form-control modal animated fadeIn" id="js-modal-login">
        <div className="modal-header">ログインする</div>
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
          <div className="note-none-login">匿名でチャットできますが、長期使用の不便を考慮してください</div>
        </div>
        <div className="modal-footer">
          <button className="d-inline-block btn btn-anonymously bg-red text-white"
          onClick={ this.createUserAnonymously }> 
            匿名でチャット 
          </button>
          <button id="js-btn-login-submit-form" 
          className="d-inline-block btn btn-login bg-primary-color-dark text-white" >
          ログインする
          </button>
        </div>
      </div>
    );
  }
}

export default ModalLogin
