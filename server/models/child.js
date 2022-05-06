const mongoose = require('mongoose')
const Schema = mongoose.Schema
// usechildr Schema
const Child = new Schema(

    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        gender: { type: String, required: true },
        race: { type: String, required: true },
        city: { type: Number, ref: 'City' },
        rating: { type: Number, required: true },
        relation: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref: 'User' },	
    }
)

module.exports = mongoose.model('Child', Child)