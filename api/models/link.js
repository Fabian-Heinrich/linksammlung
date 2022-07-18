const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema({
    url: String,
    label: String,
    description: String,
    category_ids: [mongoose.Schema.Types.ObjectId]
})

module.exports = mongoose.model('Link', linkSchema)