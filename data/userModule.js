let mongoose = require('./conn').mongoose

var Schema=mongoose.Schema;
var userData=Schema({
    name: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    },
    pass: {
        type: String,
        default: ""
    },
    LoginDevice: {
        type: String,
        default: ""
    },
    lastLoginTime: {
        type: String,
        default: ""
    }
})

var userModule=mongoose.model('userMaster',userData);

module.exports = {
    userModule: userModule
}