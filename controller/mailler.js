var nodemailer = require('nodemailer')  // khai báo sử dụng module nodemaile
var CONFIG     = require("../config")



module.exports.contact_mailler = function( req, res ){
    var transporter =  nodemailer.createTransport({ // config mail server
        service: 'Gmail',
        auth: {
            user: CONFIG.mailler.email,
            pass: CONFIG.mailler.password
        }
    });
    var mailOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: CONFIG.mailler.email,
        to: req.body.email,
        subject: "リクエストを送信していただきありがとうございます",
        html: `<p>連絡をリクエストし、このメールを読んでいただきありがとうございます、${ req.body.name }様。 <br/>
        <b>管理者からできるだけ早くご連絡します。 心から感謝します。</b> <br/>
        良い一日を過ごしてください！<br/>
        宜しくお願いします<br/>
        EBUDEZAIN Vietnam Limited Company。
        </p>`
    }

    var mailOptionAdmin = { // thiết lập đối tượng, nội dung gửi mail
        from: CONFIG.mailler.email,
        to: CONFIG.mailler.email,
        subject: "có người yêu cầu gửi mail",
        html: `<p>name : ${ req.body.name } <br/>
        <b> email :</b> ${ req.body.email } <br/>
        <b> mobile :</b> ${ req.body.mobile } <br/>
        <b> message :</b> ${ req.body.message } <br/>
        宜しくお願いします<br/>
        EBUDEZAIN Vietnam Limited Company。
        </p>`
    }

    transporter.sendMail(mailOptions, function(err, info){
        if (err) {
            console.log( err )

            response = { code: 500, message: res.__("contact mail error"), internal_message: res.__("contact mail error")}
        } else {
            response = { code: 200, message: res.__("contact mail success"), 
            internal_message: res.__("contact mail success")}
        }
        return res.end(JSON.stringify(response))
    })
    transporter.sendMail(mailOptionAdmin, function(err, info){})
}