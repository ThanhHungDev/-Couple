var mongoose = require("mongoose"),
    CONFIG = require("../config"),
    User = require("../model/User"),
    Subcribe = require("../model/Subscribe")
// var subscribe = require("../model/Subscribe")

var IS_PRODUCTION = CONFIG.IS_ENVIROMENT_PRODUCT

/// connect mongodb
mongoose.connect(CONFIG.database.mongodb, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
        useNewUrlParser: true
    }
)
IS_PRODUCTION && mongoose.set('debug', true)

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connected ' + CONFIG.database.mongodb);
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// When the connection is open
mongoose.connection.on('open', function () {
    console.log('Mongoose default connection is open');
    console.log('===================================');
    // // Thêm mới một phần tử của mô hình SomeModel
    // var subscribe_instance = new subscribe({ endpoint: 'hùng handsome', keys: {hung : "đẹp trai" , ability : "cute hạt me"} })
    
    // // Lưu phần tử vừa thêm mới lại, thông qua việc truyền vào một hàm callback
    // subscribe_instance.save(function (err) {
    //     if (err){
    //         console.log("have error save subscriber! ")
    //     }
    //     // saved!
    //     console.log("have success save subscriber! ")
    // });
    // Subcribe.find({email : "thanhhung.tud.testing@gmail.com"}, {
    //     $lookup:
    //     {
    //         from: 'users',
    //         localField: 'author',
    //         foreignField: '_id',
    //         as: 'orderdetails'
    //     }
    // })
    // .then((data)=>{
    //     console.log(data)
    // })
    // .catch(err => {
    //     console.error(err.message, " error hero")
    // })
});
