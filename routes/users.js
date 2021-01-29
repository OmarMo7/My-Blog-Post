const express = require('express')
const User = require('./../models/user')
const router = express.Router()

router.get('/login', (req, res) => {
  res.render('users/login', { user: new User() })
})


router.post('/', async (req, res, next) => {
  req.user = new User()
  next()
}, saveUserAndRedirect('login'))

function saveUserAndRedirect(path) {
  return async (req, res) => {
    let user = req.user
    user.name = req.body.name
    user.password = req.body.password
    try {
      user = await user.save()
      res.redirect('/users/:id')
    } catch (e) {
      res.render(`users/${path}`, { user: user })
    }
  }
}

module.exports = router;