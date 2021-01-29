const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const userRouter = require('./routes/users')
const methodOverride = require('method-override')
const app = express()


mongoose.connect('mongodb+srv://Omar:1177@cluster0.ivfso.mongodb.net/MY-BLOG-POST?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})

mongoose.connection.once('open', function () {
  console.log('Connection has been successfully established!.. ');
}).on('error', function (error) {
  console.log('Connection error!.. ', error);
})
// app.use("/public", express.static(__dirname+ '/public'));
// console.log(__dirname + '/public')
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles })
})

app.use('/articles', articleRouter)


// app.post('/', async (req, res, next) => {
//   req.article = new Article() // supposed to be another model to apply on
//   next()
// }, checkAdminAndRedirect())

// app.get('/',  (req, res) => {
//   res.render('users/user', {})
// })

// function checkAdminAndRedirect() {
//   return async (req, res) => {
//     let article = req.article
//     article.name = req.body.name
//     article.password = req.body.password
//     res.redirect('articles/index')
//   }
// }


// app.use('/users', userRouter)
app.listen(5000)