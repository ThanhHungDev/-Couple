import CONFIG from "../config"
import { generateName } from "./generate-name.js"
import $ from "jquery"
import "jquery-modal"
import { setterUser } from "../action"

export function fetchRegister (data, instance) {
    var valid = validateRegister( data , instance)
    if( !valid ){
        return false
    }
    fetch(CONFIG.SERVER.ASSET() + '/api/user/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => {
        instance.setState({ progress: false })
        if (response.code == 200) {
            /// open model login
            instance.setState({ alertError: '' })
            $('a[href="#js-modal-login"]').click()
        } else {
            instance.setState({ alertError: response.message })
        }
    })
    .catch(error => {
        instance.setState({ progress: false, alertError: error.message })
    })
}

export function fetchRegisterAnonymous ( instance, detect ) {
    var nameGen = generateName()
    var data = {
        name      : nameGen + "👨🏿‍💻" + "[anonymous]",
        email     : nameGen.toLowerCase().replace(/\s/g, '.') + (new Date).getTime() + "@ebudezain.com",
        password  : "123456",
        head_phone: "+84",
        phone     : "12345674",
        anonymous: true
    }
    var valid = validateRegister( data , instance)
    if( !valid ){
        return false
    }
    fetch(CONFIG.SERVER.ASSET() + '/api/user/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => {
        if (response.code != 200) { 
            instance.setState({ progress: false, alertError: "システムエラーが発生しました。もう一度ボタンを押してください" })
            return false
        }
        /// modal close
        $.modal.close()
        instance.setState({ progress: false, alertError: ''})
        var { email, password } = data,
            dataLogin           = { email, password, ... detect }
        return fetchLoginAnonymous ( dataLogin, instance)
    })
    .catch(error => {
        console.log(error)
        instance.setState({ progress: false, alertError: "システムエラーが発生しました。もう一度ボタンを押してください" })
    })
}
export function fetchLoginAnonymous ( data, instance ){
    var valid = validateLogin( data , instance)
    if( !valid ){
        return false
    }
    return fetch(CONFIG.SERVER.ASSET() + '/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => {
        if( response.code != 200 ){
            throw new Error("システムエラーが発生しました。もう一度ボタンを押してください")
        }
        console.log( JSON.stringify(response.data), "data logied ")
        /// save user to local storage
        if (typeof(Storage) !== 'undefined') {
            localStorage.setItem('user', JSON.stringify(response.data));
            instance.props.dispatch( setterUser(response.data) )
        } else {
            alert('このアプリケーションはこのブラウザをサポートしていません。アップグレードしてください');
            instance.setState({ alert : response.user_message , progress : false });
        }
    })
    .catch(error => {
        $('a[href="#js-modal-login"]').click()
        instance.setState({ progress: false, alertError: "システムエラーが発生しました。もう一度ボタンを押してください" })
    })
}
export function fetchLogin ( data, instance ){
    var valid = validateLogin( data , instance)
    if( !valid ){
        return false
    }
    fetch(CONFIG.SERVER.ASSET() + '/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => {
        if( response.code != 200 ){
            throw new Error(response.message)
        }
        console.log( JSON.stringify(response.data))
        /// save user to local storage
        if (typeof(Storage) !== 'undefined') {
            /// modal close
            $.modal.close()
            localStorage.setItem('user', JSON.stringify(response.data));
            instance.props.dispatch( setterUser(response.data) )
        } else {
            alert('このアプリケーションはこのブラウザをサポートしていません。アップグレードしてください');
            instance.setState({ alert : response.user_message , progress : false });
        }
    })
    .catch(error => {
        $('a[href="#js-modal-login"]').click()
        instance.setState({ progress: false, alertError: error.message })
    })
}

export function resfeshTokenExpire( data , instance ){
    var { userId, refesh, detect } = data
    var isValid = validateRefeshToken( data )
    if( !isValid ){
        alert( "アカウントの有効期限が切れています。もう一度ログインしてください")
        return false
    }
    var dataRefesh = { userId, refesh, ... detect }
    fetch(CONFIG.SERVER.ASSET() + '/api/user/refesh', {
        method: 'POST',
        body: JSON.stringify(dataRefesh),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => {
        if( response.code != 200 ){
            throw new Error("システムエラーが発生しました。もう一度ボタンを押してください")
        }
        console.log( JSON.stringify(response.data), "data refesh token ")
        /// save user to local storage
        if (typeof(Storage) !== 'undefined') {
            var user = JSON.parse(localStorage.getItem('user'))
            user.tokens = response.data
            localStorage.setItem('user', JSON.stringify(user))
            instance.props.dispatch( setterUser(user) )
        } else {
            alert('このアプリケーションはこのブラウザをサポートしていません。アップグレードしてください')
            instance.setState({ alert : response.user_message , progress : false })
        }
    })
    .catch(error => {
        $('a[href="#js-modal-login"]').click()
        instance.setState({ progress: false, alertError: "システムエラーが発生しました。もう一度ボタンを押してください" })
    })
}

export function listenLoginEvent(){
    $('#js-modal-login').modal({
        fadeDuration: 0,
        showClose: false,
        escapeClose: false,
        clickClose: false,
        closeExisting: true
      });
      $('a[href="#js-modal-register"]').click(function(event) {
        $(this).modal({
            fadeDuration: 0,
            showClose: false,
            escapeClose: false,
            clickClose: false,
            closeExisting: true
        });
        event.preventDefault();
      });
      $('a[href="#js-modal-login"]').click(function(event) {
        $(this).modal({
            fadeDuration: 0,
            showClose: false,
            escapeClose: false,
            clickClose: false,
            closeExisting: true
        });
        event.preventDefault();
      });
}

function validateRefeshToken( data ){
    try {
        var { userId, refesh, detect }                                      = data,
            { browser, browserMajorVersion, browserVersion, os, osVersion } = detect
        if( !userId || !refesh || !browser || !browserMajorVersion || !browserVersion || !os || !osVersion ){
            throw new Error("遮る")
        }
        return true
    } catch (error) {
        if (typeof(Storage) !== 'undefined') {
            localStorage.setItem('user', JSON.stringify(null))
        }
        return false
    }
}
function validateLogin( data, instance ){
    try {
        var { email, password } = data
        if( !email ){
            throw Error("メールは必須フィールドです")
        }
        if( !password ){
            throw Error("パスワードは必須フィールドです")
        }
        return true
    } catch (error) {
        instance.setState({ progress: false, alertError: error.message })
        return false
    }
}
function validateRegister( data , instance){
    try {
        var { name, email, password, head_phone, phone } = data
        if( !name ){
            throw Error("名前は必須フィールドです")
        }
        if( !email ){
            throw Error("メールは必須フィールドです")
        }
        if( !password ){
            throw Error("パスワードは必須フィールドです")
        }
        if( !head_phone ){
            throw Error("国は必須フィールドです")
        }
        if( !phone ){
            throw Error("電話番号は必須フィールドです")
        }
        return true
    } catch (error) {
        instance.setState({ progress: false, alertError: error.message })
        return false
    }
    
}