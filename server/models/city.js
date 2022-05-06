const mongoose = require('mongoose')
const Schema = mongoose.Schema
// city Schema
const City = new Schema(

    {
        _id: { type: Number, required: true },
        name: { type: String, required: true },
        rating: { type: Number, required: true }
    }
)

module.exports = mongoose.model('City', City)