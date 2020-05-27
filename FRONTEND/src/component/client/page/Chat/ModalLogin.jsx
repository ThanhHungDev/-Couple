import React, { Component } from "react"
import Email from "../../../svg/email.jsx"
import Password from "../../../svg/password.jsx"
import { connect } from "react-redux"
import { fetchLogin , fetchRegisterAnonymous } from "../../../../library/helper.js"

class ModalLogin extends Component {

  constructor(props) {
    super(props);
     this.state = {
            email: "",
            password: "",
            alertError : '',
            progress : false
          }
  }
  login = () => {
    this.setState({ progress : true })
    var name      = this.name.value,
        email     = this.email.value,
        password  = this.password.value,
        headPhone = this.headPhone.value,
        phone     = this.phone.value
    var data = {
      name, 
      email, 
      password, 
      head_phone : headPhone, 
      phone
    }
    var instanceComponentRegister = this
    fetchRegister( data , instanceComponentRegister)
  }

  createUserAnonymous = () => {
    this.setState({ progress : true })
    var instanceComponentRegister = this
    fetchRegisterAnonymous(instanceComponentRegister, this.props.client)
  }
  render() {
    return (
      <div className="model-wrapper-form-control modal animated fadeIn" id="js-modal-login">
        <div className="modal-header">ログインする</div>
        <div className="modal-body">
          { this.state.alertError && <div className="alert alert-danger">{ this.state.alertError }</div> }
          <div className="input-group">
            <span className="svg-icon"> <Email /> </span>
            <input name="email" ref={(input) => this.email = input} autoCorrect="off" autoComplete="off"
            autoCapitalize="none" className="input-control" placeholder="メールアドレスを入力して"/>
          </div>
          <div className="input-group">
            <span className="svg-icon"><Password /></span>
            <input name="password" ref={(input) => this.password = input} type="password" autoCorrect="off" autoComplete="off"
              autoCapitalize="none" className="input-control" placeholder="パスワードを入力してください" />
          </div>
          <div className="link-page clear">
            <a href="#js-modal-register" className="link-register"> 登録 </a>
          </div>
          <div className="note-none-login">匿名でチャットできますが、長期使用の不便を考慮してください</div>
        </div>
        <div className="modal-footer">
          <button className="d-inline-block btn btn-anonymously bg-red text-white"
          onClick={ this.createUserAnonymous }> 
            匿名でチャット 
          </button>
          <button id="js-btn-login-submit-form" 
          className="d-inline-block btn btn-login bg-primary-color-dark text-white"
          onClick={ this.login }>
          ログインする
          </button>
        </div>
        {
          this.state.progress && 
          <div className="progress progress-success"><div className="progress-loadding"></div></div>
        }
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    client: state.client
  }
}
export default connect(mapStateToProps)(ModalLogin);