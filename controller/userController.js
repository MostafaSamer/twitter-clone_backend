var userModule = require('../data/userModule').userModule
const md5 = require('md5')

exports.userLogin = async(req, res)=> {
    try {
        let data = req.body.data;
        let emailSearch = await userModule.findOne({email: data.email})
        if(!emailSearch || emailSearch.pass != md5(data.password)) {
            res.status(400).json({success: 0, msg: "Email or Password is incorrect!"})
            return;
        }
        await userModule.findOneAndUpdate({_id: emailSearch._id}, {
            LoginDevice: req.get('User-Agent'),
            lastLoginTime: new Date()
        })
        res.status(200).json({success: 1, data: emailSearch, msg: "Login Succesfull"})
    } catch (error) {
        res.status(500).json({success: 0, msg: error})
    }
}

exports.userLogout = async(req, res)=> {
    try {
        res.status(200).json({success: 1, data: emailSearch, msg: "Logout Succesfull"})
    } catch (error) {
        res.status(500).json({success: 0, msg: error})
    }
}

exports.userRegister = async(req, res)=> {
    try {
        let data = req.body.data
        let emailSearch = await userModule.findOne({email: data.email})
        if(emailSearch) {
            res.status(400).json({success: 0, msg: "Email Already Used!"})
            return;
        }
        data.pass = md5(data.pass)
        let userData = await new userModule(data).save();
        res.status(200).json({success: 1, data: userData, msg: "Register Succesfull"})
    } catch (error) {
        res.status(500).json({success: 0, msg: error})
    }
}