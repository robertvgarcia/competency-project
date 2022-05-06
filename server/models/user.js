const mongoose = require('mongoose')
const Schema = mongoose.Schema
// user Schema
const User = new Schema(

    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        gender: { type: String, required: true },
        email: { type: String, required: true },
        children: [{ type: Schema.Types.ObjectId, ref: 'Child' }]	
    }
)

module.exports = mongoose.model('User', User)