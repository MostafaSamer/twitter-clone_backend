const mongoose = require('mongoose')

const tweetSchema = mongoose.Schema({
    desc:{
        type: String,
        required: true,
        trim: true
    },
    comments:[{
        comment:{
            type: String,
            required: true,
            trim: true
        }
    }],
    /*owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'userMaster'
    }*/
},{
    timestamps: true
})

const tweetModel = mongoose.model('Tweet', tweetSchema)

module.exports = tweetModel