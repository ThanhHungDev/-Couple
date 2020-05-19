'use strict'

//Tạo ra 1 hàm khởi tạo cơ sở (tựa như lớp cơ sở)
function Controller(_databaseCollection){

    this.databaseCollection = _databaseCollection;
}
  
//Có thể thêm thuộc tính vào thuộc tính prototype của hàm khởi tạo
Controller.prototype.parserJson = function(data){

    return JSON.stringify(data)
};

Controller.prototype.setRedis = function( _redis ){

    this.REDIS = _redis
};

module.exports = Controller;