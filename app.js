const
  express = require('express'),
  app = express(),
  nunjucks = require('nunjucks'),
  path = require('path'),
  db = require('./models'),
  port = process.env.PORT || 3000,
  morgan = require('morgan')

app.engine('html', nunjucks.render)
app.set('view engine', 'html')
nunjucks.configure('views', {noCache: true})

app.use(morgan('dev'))
app.use(require('method-override')('_method'))
app.use('/public', express.static(path.join(__dirname, 'public')))

let config = process.env
try {
  config = require('./env.json')
} catch (ex) {

}

app.use(function (req, res, next) {
  res.locals.GOOGLE_API_KEY = config.GOOGLE_API_KEY
  next()
})

app.get('/', function (req, res, next) {
  res.render('index')
})

app.use('/users', require('./routes/users'))
app.use('/offices', require('./routes/offices'))

app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', { error: err })
})

app.listen(port, function () {
  console.log(`listening on port ${port}`)
  db.sync()
  .then(() => db.seed())
  .catch(err => console.log(err))
})
