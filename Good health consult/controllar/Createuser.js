const User = require('../model/user')

module.exports = (req, res) => {
    User.create(req.body, (error, user) => {
        if (error) {
            return res.redirect('/')
        }
        res.redirect('/')
    })
}