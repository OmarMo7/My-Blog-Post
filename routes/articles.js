const express = require('express')
const Article = require('./../models/article')
const router = express.Router()


router.get('/new', (req, res) => {
  res.render('articles/new', { article: new Article() })
})

router.get('/edit/:id', async (req, res) => {
  // console.log(req.params.id)
  const article = await Article.findById(req.params.id)
  // console.log(article.textType)
  res.render('articles/edit', { article: article })
})


// router.get('/login', async (req, res) => {
//   const article = await Article.findById(req.params.id)

//   res.render('articles/login')
// })

router.get('/:slug', async (req, res) => {
  
  const article = await Article.findOne({ slug: req.params.slug })
  if (article == null) res.redirect('/')
  // console.log(article.title)
  // console.log(article.slug)
  // console.log(article.id)
  res.render('articles/show', { article: article })
})

router.post('/', async (req, res, next) => {
  req.article = new Article()
  next()
}, saveArticleAndRedirect('new'))

router.put('/:id', async (req, res, next) => {
  // console.log(req.params.id)
  req.article = await Article.findOne({ slug: req.params.id }) //MOTHERFUCKIN LINE!!
  // console.log(req.article)
  next()
}, saveArticleAndRedirect('edit'))

router.delete('/:id', async (req, res) => {
  await Article.findByIdAndDelete(req.params.id)
  res.redirect('/')
})

function saveArticleAndRedirect(path) {
  return async (req, res) => {
    let article = req.article
    article.title = req.body.title
    article.description = req.body.description
    article.markdown = req.body.markdown
    article.textType = req.body.textType
    // console.log("article before saving: " + article)
    try {
      article = await article.save()
      res.redirect(`/articles/${article.slug}`)
      // console.log("article after saving: "+ article)
    } catch (e) {
      // console.log(e)
      res.render(`articles/${path}`, { article: article })
    }
  }
}

module.exports = router