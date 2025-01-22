require('express-async-errors')
const express = require('express')
const helmet = require('helmet')
const routes = require('./routes')
const errorHandler = require('./middleware/error-handler')
const env = require('./utils/env')
const logger = require('./utils/logger')
const path = require('node:path')
const favicon = require('serve-favicon');

const { IS_PRODUCTION_ENV } = require('./utils/constants')

const PORT = env.get('PORT', 4321)

const app = express()

if (IS_PRODUCTION_ENV) {
  app.set('trust proxy', '1')
  app.use(helmet.hidePoweredBy())
}
app.use(helmet())

app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(favicon(path.resolve('public', 'favicon.ico')))
app.use('/primeicons', express.static(path.resolve('node_modules', 'primeicons')));


app.set('view engine', 'ejs')
app.set('views', path.resolve('src/views'))

app.use(routes())
app.use(function(req, res) {
  res.status(404).render('not-found')
})
app.use(errorHandler)

app.listen(
  PORT,
  () => {
    logger.info(`Server running at http://localhost:${PORT}`)
  }
)

process.on('SIGINT', () => {
  logger.info('SIGINT signal received: closing HTTP server')
  process.exit(0)
})
