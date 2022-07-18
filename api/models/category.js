const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    label: String
})

module.exports = mongoose.model('Category', categorySchema)