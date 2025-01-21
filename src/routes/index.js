const { Router } = require('express')

const router = Router()

const routes = () => {
  router.get('/', (req, res) => {
    const socials = require('../data/social-media-links')

    res.render('index', {
      socials
    })
  })

  return router
}

module.exports = routes