const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)
const makeURLFriendly = require('../utils/urlSlug')
// const setDirection = require('../utils/direction')
const isRightToLeft = /[\u0590-\u05ff\u0600-\u06ff]/u
let str = new String()
const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  markdown: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  sanitizedHtml: {
    type: String,
    required: true
  },
  textType: {
    type: String,

  }
})

articleSchema.pre('validate', function (next) {
  if (this.title != null) {
    this.slug = makeURLFriendly(this.title) 
    str = this.slug
    str = str.split("-")
    console.log("slug "+ this.slug)
    console.log("textType " + this.textType)
    if (isRightToLeft.test(str[0])) { this.textType = "rtl"; }
    else this.textType = "ltr"
  }

  if (this.markdown) {
    this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
  }
  next()
})



///////////////////////





module.exports = mongoose.model('Article', articleSchema)