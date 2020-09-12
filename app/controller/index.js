var userModule = require('../data/userModule')

exports.search = async(req, res)=> {
    try {
        let searchKey = req.body.data.searchKey;
        let userResult = await userModule.find({$text: {$search: searchKey}}).select({
            "name": "1",
        })
        res.status(200).send({success: 1, data: userResult, msg: ""})
    } catch (error) {
        res.status(500).send({success: 0, msg: error})
    }
}