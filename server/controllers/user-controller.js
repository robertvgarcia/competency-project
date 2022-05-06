const User = require('../models/user')
const Child = require('../models/child')
// create method
createUser = (req, res) => {
    User.deleteMany({}, err => {
        if (err) console.log(err)
    })
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        })
    }
    const user = new User(body)
    if (!user) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }
    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created!',
            })
        })
}
// update method
updateUser = async (req, res) => {
    const body = req.body
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }
    User.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'User not found!',
            })
        }
        user.name = body.name
        user.age = body.age
        user.gender = body.gender
        user.email = body.email
        user.children.push(body.children)
        user
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: user._id,
                    message: 'User updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'User not updated!',
                })
            })
    })
}
// delete method
deleteUser = async (req, res) => {
    await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        if (!user) {
            return res.status(404).json({
                success: false,
                error: `User not found`
            })
        }
    }).then(async () => {
        await Child.deleteMany({ user: req.params.id }, (err, child) => {
            if (err) {
                return res.status(400).json({
                     success: false,
                     error: err
                    })
            }
            if (!child) {
                return res.status(404).json({
                    success: false,
                    error: `Child not found`
                })
            }
            return res.status(200).json({
                success: true,
                data: child
            })
        }).catch(err => console.log(err))
    })
}
// get user method
getUserById = async (req, res) => {
    await User.findOne({ _id: req.params.id })
        .populate('children') // populate nested object
        .exec((err, user) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    error: err
                })
            }
            if (!user) {
                return res.status(404).json({
                    success: false,
                    error: `User not found`
                })
            }
            return res.status(200).json({
                success: true,
                data: user
            })
        })
}
// get users method
getUsers = async (req, res) => {
    await User.find({})
        .populate({
            path: 'children',
            populate: { path: 'city'}
        }) // populate nested objects
        .exec((err, users) => {
            if (err) {
                return res.status(400).json({
                    success: false,
                    error: err
                })
            }
            if (!users.length) {
                return res.status(404).json({
                    success: false,
                    error: `User not found`
                })
            }
            return res.status(200).json({
                success: true,
                data: users
            })
        })
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    getUsers
}