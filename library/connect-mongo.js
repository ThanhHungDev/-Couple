var mongoose = require("mongoose"),
    CONFIG = require("../config")
    

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
!IS_PRODUCTION && mongoose.set('debug', true)
mongoose.set('useFindAndModify', true);

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

    // var Location = require("../model/Location")
    // var newLocationJapan = new Location({
    //     name : "Nhật bản",
    //     subname: "jp",
    //     headPhone : "+81"
    // })
    // newLocationJapan.save()
    // .then(jp => {
    //     console.log(jp)
    //     console.log(jp._id.toString())
    // })
    // .catch(err => {
    //     console.log( err )
    // })
    /// gỉa sử headphome = +81 = 5ec8940a4a7c080966d9e911
    ///search location 
    // Location = require("../model/Location")
    // Location.findOne({ headPhone : '+81'})
    // .then(location => {
    //     console.log(location)
    //     var newUser = new User({
    //         name, 
    //         email, 
    //         password, 
    //         phones : {
    //             locationPhone,
    //             phoneNumber : phone
    //         },
    //         avatar: "image/avatar.jpg"
    //     })
    // })
    // var newLocationJapan = new Location({
    //     name : "Nhật bản",
    //     subname: "jp",
    //     headPhone : "+81"
    // })
    // newLocationJapan.save()
    // .then(jp => {
    //     console.log(jp)
    //     console.log(jp._id.toString())
    // })
    // .catch(err => {
    //     console.log( err )
    // })
    // var newLocationVietNam = new Location({
    //     name : "Việt Nam",
    //     subname: "vi",
    //     headPhone : "+84"
    // })
    // newLocationVietNam.save()
    // .then(jp => {
    //     console.log(jp)
    //     console.log(jp._id.toString())
    // })
    // .catch(err => {
    //     console.log( err )
    // })
    // var newLocationUs = new Location({
    //     name : "Mỹ",
    //     subname: "us",
    //     headPhone : "+1"
    // })
    // newLocationUs.save()
    // .then(jp => {
    //     console.log(jp)
    //     console.log(jp._id.toString())
    // })
    // .catch(err => {
    //     console.log( err )
    // })

});
