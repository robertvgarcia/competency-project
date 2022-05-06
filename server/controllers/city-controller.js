const City = require('../models/city')
const cities = require('../../client/src/data/cities')
// delete existing cities before creating again
City.deleteMany({}, err => {
    if (err) console.log(err)
}).then(() => {
    cities.map(city => {
        const newCity = new City(city)
        newCity.save()
    })
    console.log(`${cities.length} Los Angeles county cities added to database!`)
})
// get method to get cities
getCities = async (req, res) => {
    await City.find({})
        .populate('child') // populate nested object
        .exec((err, cities) => {
            if (err) {
                return res.status(400).json({ success: false, error: err })
            }
            if (!cities.length) {
                return res
                    .status(404)
                    .json({ success: false, error: `City not found` })
            }
            return res.status(200).json({ success: true, data: cities })
        })
}

module.exports = { getCities }