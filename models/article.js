const mongoose = require('mongoose')
const marked = require('marked')
const slugify = require('slugify')
const createDomPurify = require('dompurify')
const { JSDOM } = require('jsdom')
const dompurify = createDomPurify(new JSDOM().window)
const makeURLFriendly = require('../utils/urlSlug')
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
    default: null
  },
  // name: {
  //   type: String,
  //   default: ""
  // },
  // password:{
  //   type: String,
  //   default: ""
  // }
})

articleSchema.pre('validate', function (next) {
  if (this.title) {
    str = makeURLFriendly(this.title)
    //this.slug = slugify(this.title, { lower: true, strict: true })
    let indexOfSpace = str.indexOf(' ')
    let str1 = str.substr(0,indexOfSpace)
    let str2 = str.substr(indexOfSpace+1, str.length-1)
    this.slug = str1;
    this.textType = str2;
    console.log("slug "+ this.slug)
    console.log("textType " + this.textType)
  }

  if (this.markdown) {
    this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
  }
  next()
})



///////////////////////





module.exports = mongoose.model('Article', articleSchema)