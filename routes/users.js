const
  { User, Office } = require('../models').models,
  router = require('express').Router(),
  bodyParser = require('body-parser')

router
  .use(bodyParser.urlencoded({extended: false}))

  .get('users', function (req, res, next) {
    User.findAll({ order: 'id', include: [ Office ] })
    .then(users => res.send(users))
    .catch(next)
  })

  .delete('users/:id', function (req, res, next) {
    let id = req.params.id
    User.find({ where: {id: id} })
    .then(user => user.destroy())
    .then(() => res.send(id))
    .catch(next)
  })

  .put('users/:id', function (req, res, next) {
    let id = req.params.id
    User.find({ where: {id: id} })
    .then(user => user.update(req.body))
    .then(user => res.send(user))
    .catch(next)
  })

  .post('users', function (req, res, next) {
    User.create(req.body)
    .then(user => res.send(user))
    .catch(next)
  })

module.exports = router
