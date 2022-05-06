const Child = require('../models/child')
const User = require('../models/user')
// create method to create child
createChild = (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a child',
        })
    }
    const child = new Child(body)
    if (!child) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }
    child
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: child._id,
                message: 'Child created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Child not created!',
            })
        })
}
// update method to update child
updateChild = async (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }
    Child.findOne({ _id: req.params.id }, (err, child) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Child not found!',
            })
        }
        child.name = body.name
        child.age = body.age
        child.gender = body.gender
        child.race = body.race
        child.city = body.city
        child.relation = body.relation
        child.rating = body.rating
        child
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: child._id,
                    message: 'Child updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Child not updated!',
                })
            })
    })
}
// delete method to delete child
deleteChild = async (req, res) => {
    await Child.findOneAndDelete({ _id: req.params.id }, (err, child) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        if (!child) {
            return res
                .status(404)
                .json({
                    success: false,
                    error: `Child not found`
                })
        }
        // remove child from user child array
        User.findById(child.user._id, (err, user) => {
            if (err) {
                return res.status(500).end()
            }
            user.children.remove(req.params.id)
            user.save(err => {
                if (err) {
                    return res.status(500).end()
                }
            })
        })
        return res.status(200).json({
            success: true,
            data: child
        })
    }).catch(err => console.log(err))
}
// get method to get child
getChildById = async (req, res) => {
    await Child.findOne({ _id: req.params.id })
        .populate('user') // populate nested objects
        .populate('city') // populate nested objects
        .exec((err, child) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    error: err
                })
            }
            if (!child) {
                return res
                    .status(404)
                    .json({
                        success: false,
                        error: `Child not found`
                    })
            }
            return res.status(200).json({
                success: true,
                data: child
            })
        })
}
// get method to get children
getChildren = async (req, res) => {
    await Child.find({})
        .populate('user') // populate nested objects
        .populate('city') // populate nested objects
        .exec((err, children) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    error: err
                })
            }
            if (!children.length) {
                return res
                    .status(404)
                    .json({
                        success: false,
                        error: `Child not found`
                    })
            }
            return res.status(200).json({
                success: true,
                data: children
            })
        })
}

module.exports = {
    createChild,
    updateChild,
    deleteChild,
    getChildById,
    getChildren
}