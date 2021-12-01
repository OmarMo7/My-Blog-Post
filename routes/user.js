const express = require('express')
const User = require('../models/user')
const Article = require('../models/article')
const router = express.Router()
const userLogin = []


router.get('/login', (req, res) => {
  res.render('user/login', { user: new User() })
})

router.get("/", async (req, res) => {
  const articles = await Article.find().sort({ createdAt: "desc" });
  let user = new User();
  user.name = userLogin;
  user.password = userLogin;
  res.render("articles/index", { articles: articles, user: user });
});


router.post('/', async (req, res, next) => {
  req.user = new User()
  next()
}, saveUserAndRedirect())

function saveUserAndRedirect() {
  return async (req, res) => {
    let user = new User()
    user.name = req.body.name
    user.password = req.body.password
    userLogin.push(user)
    let article = await Article.find().sort({ createdAt: 'desc' })

    try {
      // user = await user.save()
      res.render('articles/index', { articles: article, user: user })
    } catch (e) {
      res.render('articles/index')
    }
  }
}

console.log(userLogin)

module.exports = userLogin
module.exports = router;