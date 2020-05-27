import React, { Component } from "react"
import { connect } from "react-redux"
import Name from "../../../svg/name.jsx"
import Email from "../../../svg/email.jsx"
import Password from "../../../svg/password.jsx"
import Phone from "../../../svg/phone.jsx"

import $ from "jquery"
import "select2"
import CONFIG from "../../../../config"


class ModalRegister extends Component {

  constructor(props) {
    super(props);
     this.state = {
            name: "",
            email: "",
            password: "",
            headPhone : "",
            phone: "",
            alertError : '',
            progress : false
          };
    
    this.name      = React.createRef()
    this.email     = React.createRef()
    this.password  = React.createRef()
    this.headPhone = React.createRef()
    this.phone     = React.createRef()
  }

  componentDidMount(){
    $(".js-select-headphone").select2({
      placeholder: "国を選択",
      width: '100%'
    });
  }
  register = () => {
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
    fetch( CONFIG.SERVER.ASSET()  + '/api/user/register',{
      method: 'POST', 
      body: JSON.stringify(data), 
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => {
      this.setState({ progress : false })
      if( response.code == 200 ){
        /// open model login
        this.setState({ alertError : '' })
        $('a[href="#js-modal-login"]').click()
      }else{
        this.setState({ alertError : response.message })
      }
    })
    .catch(error => console.error('Error:', error))
  }

  createUserAnonymously = () => {
    alert("đã click")
  }
  render() {
    return (
      <div className="model-wrapper-form-control modal animated fadeIn" id="js-modal-register">
        <div className="modal-header">登録</div>
        <div className="modal-body">
          { this.state.alertError && <div className="alert alert-danger">{ this.state.alertError }</div> }
          <div className="input-group">
            <span className="svg-icon"> <Name /> </span>
            <input name="name" className="input-control" 
            ref={(input) => this.name = input} placeholder="あなたの名前を入力します。"/>
          </div>
          <div className="input-group">
            <span className="svg-icon"> <Email /> </span>
            <input name="email" autoCorrect="off" autoComplete="off" autoCapitalize="none" className="input-control" 
            ref={(input) => this.email = input} placeholder="メールアドレスを入力して"/>
          </div>
          <div className="input-group">
            <span className="svg-icon"><Password /></span>
            <input name="password" type="password" autoCorrect="off" autoComplete="off"
              autoCapitalize="none" className="input-control" 
              ref={(input) => this.password = input} placeholder="パスワードを入力してください" />
          </div>
          <div className="group-input-mobile">
            <div className="col-3 select-location">
              <select className="js-select-headphone"  ref={(input) => this.headPhone = input}>
                <option value="">国を選択</option>
                <option value="+81">Japan</option>
                <option value="+84">Việt Nam</option>
              </select>
            </div>
            <div className="col-9">
              <div className="input-group">
                <span className="svg-icon"><Phone /></span>
                <input name="phone" autoCorrect="off" autoComplete="off" autoCapitalize="none" className="input-control" 
                  ref={(input) => this.phone = input} placeholder="パスワードを入力してください" />
              </div>
            </div>
          </div>
          <div className="link-page clear">
            <a href="#js-modal-login" className="link-register"> ログインする </a>
          </div>
          <div className="note-none-login">匿名でチャットできますが、長期使用の不便を考慮してください</div>
        </div>
        <div className="modal-footer">
          <button className="d-inline-block btn btn-anonymously bg-red text-white" 
          onClick={ this.createUserAnonymously }> 匿名でチャット </button>
          <button id="js-btn-login-submit-form" 
          className="d-inline-block btn btn-login bg-primary-color-dark text-white" 
          onClick={ this.register }>
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
export default connect(mapStateToProps)(ModalRegister);
