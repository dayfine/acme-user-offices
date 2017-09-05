const
  { User, Office } = require('../models').models,
  router = require('express').Router(),
  bodyParser = require('body-parser')

router
  .use(bodyParser.urlencoded({extended: false}))

  .get('/', function (req, res, next) {
    Office.findAll({ order: ['id'], include: [ User ] })
    .then(offices => res.send(offices))
    .catch(next)
  })

  .delete('/:id', function (req, res, next) {
    let id = req.params.id
    Office.find({ where: {id: id} })
    .then(office => office.destroy())
    .then(() => res.send(id))
    .catch(next)
  })

  .post('/', function (req, res, next) {
    Office.create(req.body)
    .then(office => res.send(office))
    .catch(next)
  })

module.exports = router
