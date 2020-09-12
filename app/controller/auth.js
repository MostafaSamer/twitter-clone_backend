
const JWT  = require('jsonwebtoken')
const User = require('../data/userModule')

const auth = async (req, res, next)=>{
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decode = JWT.verify(token, 'SignatureKeyCreatedByYoussef')
        const user = await User.findOne({_id: decode._id, 'tokens.token': token})

        if(!user){
            throw new Error('Error in authentcation')
        }

        req.token = token
        req.user  = user
        next()
    } catch (error) {
        res.status(500).send({error: e})
    }
}

module.exports = auth