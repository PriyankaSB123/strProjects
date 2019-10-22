var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user= new Schema({
    userId :{type:Number},
    name:{type:String},
    phone:{type:Number},
    email:{type:String}
   
    
})

module.exports = {
    users:mongoose.model('users', user)
};