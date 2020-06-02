import React, { Component } from "react"

class ModalLogoutSuccess extends Component {

    
    render() {
        return (
            <div className="model-wrapper-form-control modal animated fadeIn" id="js-modal-logout-success">
                <div className="modal-header">ログアウト成功</div>
                <div className="modal-body">
                    <p>アカウントからログアウトしました。</p>
                    <p>メニューバーの[ログイン]をクリックして、管理者とチャットします</p>
                    <br />
                </div>
                <div className="modal-footer">
                <a className="d-inline-block btn btn-login bg-primary-color-dark text-white" href="" rel="modal:close">はい</a>
                </div>
            </div>
        );
    }
}

export default ModalLogoutSuccess