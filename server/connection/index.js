const mongoose = require('mongoose')
// connect to database
mongoose
    .connect('mongodb://localhost/grasp', 
    {         
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection
module.exports = db