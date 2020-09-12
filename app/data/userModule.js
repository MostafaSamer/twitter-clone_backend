const mongoose = require('mongoose')
const check = require('express-validator').check
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')
const tweetModel = require('./tweetsModule')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    pass: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    },
    LoginDevice: {
        type: String,
        default: ""
    },
    lastLoginTime: {
        type: String,
        default: ""
    },
    emailVerfied: {
        type: Boolean,
        default: false
    },
    follwers: [{
        follwer: {
            type: mongoose.Schema.Types.ObjectId
        }
    }],
    follwing: [{
        follwer: {
            type: mongoose.Schema.Types.ObjectId
        }
    }],
},{
    timestamps: true
})

userSchema.index({name: 'text', '/name/': 'text'});

const userModule = mongoose.model('userMaster',userSchema);

module.exports = userModule