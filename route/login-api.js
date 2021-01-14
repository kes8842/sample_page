const express = require('express');
const router = express.Router();
const passport = require('passport')


router.get('/', (req, res, next) => {
    if (req.isAuthenticated() && req.user) {
        return res.json({ user: req.user.id })
    }
    return res.json({ user: null })
})

router.post('/', (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.json({ auth: true })
    }

    passport.authenticate('local', (authError, user, info) => {
        if (authError) {
            console.error(authError)
        }

        if (!user) {
            return res.json(info)
        }

        return req.login(user, (loginError) => {
            if (loginError) {
                console.error(loginError)
                return next(loginError)
            }
            return res.json({ id: user.id })
        })
    })(req, res, next)
})

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err)
        }
    })
})

module.exports = router
