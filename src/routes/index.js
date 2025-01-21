const { Router } = require('express')

const router = Router()

const socials = require('../data/social-media-links')

const routes = () => {
  router.get('/', (req, res) => {
    res.render('index', {
      socials
    })
  })

  router.get('/about', (req, res) => {
    res.render('about', {
      socials
    })
  })

  router.get('/books', (req, res) => {
    res.render('books', {
      socials
    })
  })

  router.get('/books/:slug', (req, res) => {
    res.render('book', {
      socials
    })
  })

  router.get('/events', (req, res) => {
    res.render('events', {
      socials
    })
  })

  router.get('/contact', (req, res) => {
    res.render('contact', {
      socials
    })
  })

  return router
}

module.exports = routes