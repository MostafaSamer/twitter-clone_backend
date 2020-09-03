let mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/twitter', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = {
    mongoose: mongoose
}