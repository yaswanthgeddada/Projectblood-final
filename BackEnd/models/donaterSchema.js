var mongoose = require('mongoose')
var donerSchema = new mongoose.Schema({
    dName :{ 
        type:String,
        required : true
    },
    dMobile:{
        type:String,
        required : true
    },
    dEmail:{
        type : String,
        required : true
    },
    bGroup:{
        type : String,
        required : true
    },
    dAddress:{
        type : String,
        required : true
    }


})
module.exports = mongoose.model('doners', donerSchema);
