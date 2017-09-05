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
app.use('/users', require('./routes/users'))
app.use('/offices', require('./routes/offices'))
app.get('/', function (req, res, next) {
  res.render('index')
})

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
