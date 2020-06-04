var nodemailer = require('nodemailer')  // khai báo sử dụng module nodemaile
var CONFIG     = require("../config")



module.exports.sendMail = function( req, res ){
    var transporter =  nodemailer.createTransport({ // config mail server
        service: 'Gmail',
        auth: {
            user: CONFIG.mailler.email,
            pass: CONFIG.mailler.password
        }
    });
    var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'Thanh Batmon',
        to: 'tomail@gmail.com',
        subject: 'Test Nodemailer',
        text: 'You recieved message from ' + req.body.email,
        html: '<p>You have got a new message</b><ul><li>Username:' + req.body.name + '</li><li>Email:' + req.body.email + '</li><li>Username:' + req.body.message + '</li></ul>'
    }
    transporter.sendMail(mainOptions, function(err, info){
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            console.log('Message sent: ' +  info.response);
            res.redirect('/');
        }
    });
}