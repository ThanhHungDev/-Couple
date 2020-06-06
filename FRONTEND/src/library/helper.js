import CONFIG from "../config"
import { generateName } from "./generate-name.js"
import $ from "jquery"
import "jquery-modal"
import { setterUser, setterChannels, addMessage } from "../action"
import { socketListenner } from "../action/socket.js"
import { setterSocket } from "../action"

var socket = null;

export function fetchRegister(data, instanceComponent) {
    var valid = validateRegister(data, instanceComponent)
    if (!valid) {
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
            instanceComponent.setState({ progress: false })
            if (response.code == 200) {
                /// open model login
                instanceComponent.setState({ alertError: '' })
                $('a[href="#js-modal-login"]').click()
            } else {
                instanceComponent.setState({ alertError: response.message })
            }
        })
        .catch(error => {
            instanceComponent.setState({ progress: false, alertError: error.message })
        })
}

export function fetchRegisterAnonymous(instanceComponent, detect) {
    var nameGen = generateName()
    var data = {
        name: nameGen + "👨🏿‍💻" + "[anonymous]",
        email: nameGen.toLowerCase().replace(/\s/g, '.') + (new Date).getTime() + "@ebudezain.com",
        password: "123456",
        head_phone: "+84",
        phone: "12345674",
        anonymous: true
    }
    var valid = validateRegister(data, instanceComponent)
    if (!valid) {
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
            instanceComponent.setState({ progress: false })
            if (response.code != 200) {
                instanceComponent.setState({ alertError: "システムエラーが発生しました。もう一度ボタンを押してください" })
                return false
            }
            /// modal close
            $.modal.close()
            instanceComponent.setState({ alertError: '' })
            var { email, password } = data,
                dataLogin = { email, password, ...detect }
            return fetchLoginAnonymous(dataLogin, instanceComponent)
        })
        .catch(error => {
            console.log(error)
            instanceComponent.setState({ progress: false, alertError: "システムエラーが発生しました。もう一度ボタンを押してください" })
        })
}
export function fetchLoginAnonymous(data, instanceComponent) {
    var valid = validateLogin(data, instanceComponent)
    if (!valid) {
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
            instanceComponent.setState({ progress: false });
            if (response.code != 200) {
                throw new Error("システムエラーが発生しました。もう一度ボタンを押してください")
            }
            console.log(JSON.stringify(response.data), "data logied ")
            /// save user to local storage
            if (typeof (Storage) !== 'undefined') {
                var userLogin = response.data
                localStorage.setItem('user', JSON.stringify(userLogin));
                instanceComponent.props.dispatch(setterUser(userLogin))
                instanceComponent.setState({ alert: '' });
                /// fetch data message channel
                data.email = null
                data.password = null
                var dataFetchChannel = { access: userLogin.tokens.tokenAccess, ...data }
                fetchChannelMessage(dataFetchChannel, instanceComponent)
            } else {
                alert('このアプリケーションはこのブラウザをサポートしていません。アップグレードしてください');
                instanceComponent.setState({ alert: response.user_message })
            }
        })
        .catch(error => {
            $('a[href="#js-modal-login"]').click()
            instanceComponent.setState({ progress: false, alertError: "システムエラーが発生しました。もう一度ボタンを押してください" })
        })
}
export function fetchLogin(data, instanceComponent) {
    var valid = validateLogin(data, instanceComponent)
    if (!valid) {
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
            instanceComponent.setState({ progress: false });
            if (response.code != 200) {
                throw new Error(response.message)
            }
            console.log(JSON.stringify(response.data))
            /// save user to local storage
            if (typeof (Storage) !== 'undefined') {
                /// modal close
                $.modal.close()
                var userLogin = response.data
                localStorage.setItem('user', JSON.stringify(userLogin))
                instanceComponent.setState({ alert: '' })
                instanceComponent.props.dispatch(setterUser(userLogin))
                
                /// fetch data message channel
                data.email = null
                data.password = null
                var dataFetchChannel = { access: userLogin.tokens.tokenAccess, ...data }
                fetchChannelMessage(dataFetchChannel, instanceComponent)
            } else {
                alert('このアプリケーションはこのブラウザをサポートしていません。アップグレードしてください');
                instanceComponent.setState({ alert: response.user_message, progress: false });
            }
        })
        .catch(error => {
            $('a[href="#js-modal-login"]').click()
            instanceComponent.setState({ progress: false, alertError: error.message })
        })
}

export function resfeshTokenExpire(data, instanceComponent) {
    var { userId, refesh, detect } = data
    var isValid = validateRefeshToken(data)
    if (!isValid) {
        alert("アカウントの有効期限が切れています。もう一度ログインしてください")
        return false
    }
    var dataRefesh = { userId, refesh, ...detect }
    fetch(CONFIG.SERVER.ASSET() + '/api/user/refesh', {
        method: 'POST',
        body: JSON.stringify(dataRefesh),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(response => {
            if (response.code != 200) {
                throw new Error("システムエラーが発生しました。もう一度ボタンを押してください")
            }
            console.log(JSON.stringify(response.data), "data refesh token ")
            /// save user to local storage
            if (typeof (Storage) !== 'undefined') {
                var user = JSON.parse(localStorage.getItem('user'))
                user.tokens = response.data
                localStorage.setItem('user', JSON.stringify(user))
                instanceComponent.props.dispatch(setterUser(user))
                /// fetch data channel
                var dataFetchChannel = { access: user.tokens.tokenAccess, ...detect }
                console.log(dataFetchChannel, "fetchChannelMessage in resfeshTokenExpire")
                fetchChannelMessage(dataFetchChannel, instanceComponent)
            } else {
                alert('このアプリケーションはこのブラウザをサポートしていません。アップグレードしてください')
                instanceComponent.setState({ alert: response.user_message, progress: false })
            }
        })
        .catch(error => {
            console.log(error, " have error ")
            localStorage.setItem('user', JSON.stringify(null))
            instanceComponent.props.dispatch(setterUser(null))
            $('a[href="#js-modal-login"]').click()
            instanceComponent.setState({ progress: false, alertError: "システムエラーが発生しました。もう一度ボタンを押してください" })
        })
}

export function listenLoginEvent() {
    $('#js-modal-login').modal({
        fadeDuration: 0,
        showClose: false,
        escapeClose: false,
        clickClose: false,
        closeExisting: true
    });
    $('a[href="#js-modal-register"]').click(function (event) {
        $(this).modal({
            fadeDuration: 0,
            showClose: false,
            escapeClose: false,
            clickClose: false,
            closeExisting: true
        });
        event.preventDefault();
    });
    $('a[href="#js-modal-login"]').click(function (event) {
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

function validateRefeshToken(data) {
    try {
        var { userId, refesh, detect } = data,
            { browser, browserMajorVersion, browserVersion, os, osVersion } = detect
        if (!userId || !refesh || !browser || !browserMajorVersion || !browserVersion || !os || !osVersion) {
            throw new Error("遮る")
        }
        return true
    } catch (error) {
        if (typeof (Storage) !== 'undefined') {
            localStorage.setItem('user', JSON.stringify(null))
        }
        return false
    }
}
function validateLogin(data, instanceComponent) {
    try {
        var { email, password, browser, browserMajorVersion, browserVersion, os, osVersion } = data
        if (!email) {
            throw Error("メールは必須フィールドです")
        }
        if (!password) {
            throw Error("パスワードは必須フィールドです")
        }
        if (!browser || !browserMajorVersion || !browserVersion || !os || !osVersion) {
            throw new Error("遮る")
        }
        return true
    } catch (error) {
        instanceComponent.setState({ progress: false, alertError: error.message })
        return false
    }
}
function validateRegister(data, instanceComponent) {
    try {
        var { name, email, password, head_phone, phone } = data
        if (!name) {
            throw Error("名前は必須フィールドです")
        }
        if (!email) {
            throw Error("メールは必須フィールドです")
        }
        if (!password) {
            throw Error("パスワードは必須フィールドです")
        }
        if (!head_phone) {
            throw Error("国は必須フィールドです")
        }
        if (!phone) {
            throw Error("電話番号は必須フィールドです")
        }
        return true
    } catch (error) {
        instanceComponent.setState({ progress: false, alertError: error.message })
        return false
    }

}

export function fetchChannelMessage(data, instanceComponent) {
    var isValid = validateFetchChannelMessage(data)
    if (!isValid) {
        alert("エラーが発生しました。しばらくしてからもう一度お試しください")
        return false
    }

    fetch(CONFIG.SERVER.ASSET() + '/api/user/channel-message', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(response => {
            console.log(JSON.stringify(response.data), "data fetch channel ")
            if (response.code != 200) {
                throw new Error("エラーが発生しました。しばらくしてからもう一度お試しください")
            }
            instanceComponent.props.dispatch(setterChannels(response.data))
        })
        .catch(error => {
            console.log(error, " have error ")

        })
}

function validateFetchChannelMessage(data) {
    try {
        var { access, browser, browserMajorVersion, browserVersion, os, osVersion } = data
        if (!access || !browser || !browserMajorVersion || !browserVersion || !os || !osVersion) {
            throw new Error("遮る")
        }
        return true
    } catch (error) {
        console.log(error, "validateFetchChannelMessage")
        return false
    }
}

export function socketInitialConnect(socketIOClient, instanceApp) {

    var EVENT = CONFIG_EVENT
    socket = socketIOClient(CONFIG.SERVER.ASSET());
    var ApplicationDom = document.getElementById("Application")
    socket.on('connect', function () {

        ApplicationDom && ApplicationDom.classList.remove("connect-socket-error")
        //// set config
        socketListenner(socket, instanceApp)
        instanceApp.props.dispatch(setterSocket(socket))
    });
    socket.on('disconnect', function () {
        instanceApp.props.dispatch(setterSocket(null))
        ApplicationDom && ApplicationDom.classList.add("connect-socket-error")
    });
    socket.on('connect_error', function () {
        ApplicationDom && ApplicationDom.classList.add("connect-socket-error")
    });
}

export function sendMessageToChannel(message, style, attachment, channelId, access, detect, instanceComponent, dataRefesh) {
    var EVENT = CONFIG_EVENT
    console.log({ message, channelId, access, detect, instanceComponent, dataRefesh })
    if (!dataRefesh) {
        socket.emit(EVENT.SEND_MESSAGE, { message, style, attachment, channelId, access, ...detect })
        /// 
        instanceComponent.props.dispatch(addMessage({ type: true, content: message, style, attachment }))
        return false
    }
    //// userId : user._id, refesh : user.tokens.tokenRefesh, detect: this.props.client 
    var { userId, refesh, detect } = dataRefesh
    var dataFetch = { userId, refesh, ...detect }
    fetch(CONFIG.SERVER.ASSET() + '/api/user/refesh', {
        method: 'POST',
        body: JSON.stringify(dataFetch),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(response => {
            if (response.code != 200) {
                throw new Error("システムエラーが発生しました。もう一度ボタンを押してください")
            }
            console.log(JSON.stringify(response.data), "data refesh token before send message chat ")
            /// save user to local storage
            if (typeof (Storage) !== 'undefined') {
                var user = JSON.parse(localStorage.getItem('user'))
                user.tokens = response.data
                localStorage.setItem('user', JSON.stringify(user))
                access = user.tokens.tokenAccess
                socket.emit(EVENT.SEND_MESSAGE, { message, style, attachment, channelId, access, ...detect })
                instanceComponent.props.dispatch(setterUser(user))
                instanceComponent.props.dispatch(addMessage({ type: true, content: message, style, attachment }))
            } else {
                alert('このアプリケーションはこのブラウザをサポートしていません。アップグレードしてください')
            }
            return false
        })
        .catch(error => {
            console.log(error, " have error ")
            alert(" refesh lại trình duyệt ")
            return false
        })
}

export function saveBlobToServer(blob) {
    console.log(blob)

    let form = new FormData()
    form.append('image', blob)

    fetch(CONFIG.SERVER.ASSET() + '/api/user/image', {
        method: 'POST',
        body: form
    })
        .then(res => res.json())
        .then(response => {
            if (response.code != 200) {
                throw new Error("ファイルの保存中にエラーが発生しました")
            }
            var reWriteUrl = document.getElementById("js-image--block").getElementsByClassName("js-sign-url")
            if (reWriteUrl.length) {
                reWriteUrl[0].setAttribute("data-url", response.data.url)
                reWriteUrl[0].classList.remove("js-sign-url")
            }
        })
        .catch(error => {
            console.log(error)
            var reWriteUrl = document.getElementById("js-image--block").getElementsByClassName("js-sign-url")
            if (reWriteUrl.length) {
                reWriteUrl[0].setAttribute("data-url", "/image/avatar-hero.jpg")
                reWriteUrl[0].classList.remove("js-sign-url")
            }
        })
}

export function sendTypingMessageToChannel(channelId, access, detect, instanceComponent) {
    var EVENT = CONFIG_EVENT
    socket.emit(EVENT.SEND_TYPING, { channelId, access, ...detect })
    return false
}

export function logout(userId, access, detect, instanceComponent) {

    var dataLogout = { userId, access, ...detect }
    fetch(CONFIG.SERVER.ASSET() + '/api/user/logout', {
        method: 'POST',
        body: JSON.stringify(dataLogout),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(response => {
            if (response.code != 200) {
                console.log(response)
                throw new Error("ログアウトに失敗")
            }
            if (typeof (Storage) !== 'undefined') {
                localStorage.setItem('user', JSON.stringify(null))
                instanceComponent.props.dispatch(setterUser(null))
            } else {
                alert('このアプリケーションはこのブラウザをサポートしていません。アップグレードしてください')
            }
            $('#js-modal-logout-success').modal({
                fadeDuration: 0,
                showClose: true
            });
        })
        .catch(error => {
            console.log(error, " have error ")
            alert("ログアウトに失敗")
            return false
        })
}


export function drawMapContact(config) {
    if(!document.getElementById("map-contact-canvas")){
        return false
    }

    var styles = [
        {
            stylers: [{ saturation: 0 }],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 0 },
                { visibility: "simplified" },
            ],
        },
        {
            featureType: "road",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
        },
    ];
    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles, {
        name: "Google Map",
    });
    var myLatlng = new google.maps.LatLng(35.707616, 139.669912);
    var mapOptions = {
        zoom: 17,
        scrollwheel: false,
        center: myLatlng,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"],
        },
    };

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: '/image/map-icon.png'
    });
    var map = new google.maps.Map(
        document.getElementById("map-contact-canvas"),
        mapOptions
    );

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set("map_style", styledMap);
    map.setMapTypeId("map_style");
    marker.setMap(map);

    var address_detail =
        '<div class="address_detail_map">' +
        '<h4 class="main_color">' +
        config.SITE.company_name + 
        '</h4>' +
        config.SITE.address +
        "</div>";

    address_detail = address_detail.split("\n").join("<br />");
    var infowindow = new google.maps.InfoWindow({
        content: address_detail,
    });

    marker.addListener("click", function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}


export function fetchSendMail(data, instanceComponent) {
    var valid = validateContactSendMail(data, instanceComponent)
    if (!valid) {
        return false
    }
    fetch(CONFIG.SERVER.ASSET() + '/api/mail/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(response => {
            instanceComponent.setState({ progress: false })
            if (response.code == 200) {
                /// open model login
                instanceComponent.setState({ alertError: '', alertSuccess: "管理者にメールを送信しました。 管理者が応答するまでお待ちください" })
            } else {
                instanceComponent.setState({ alertError: response.message })
            }
            instanceComponent.name.value = ""
            instanceComponent.email.value = ""
            instanceComponent.mobile.value = ""
            instanceComponent.message.value = ""
        })
        .catch(error => {
            instanceComponent.setState({ progress: false, alertError: error.message })
            instanceComponent.name.value = ""
            instanceComponent.email.value = ""
            instanceComponent.mobile.value = ""
            instanceComponent.message.value = ""
        })
}
function validateContactSendMail(data, instanceComponent) {
    try {
        var { name, email, mobile } = data
        if (!name) {
            throw Error("名前は必須フィールドです")
        }
        if (!email) {
            throw Error("メールは必須フィールドです")
        }
        if (!mobile || !mobile.match(/\d+/g)) {
            throw Error("電話番号は必須フィールドです")
        }
        return true
    } catch (error) {
        instanceComponent.setState({ progress: false, alertError: error.message })
        return false
    }

}