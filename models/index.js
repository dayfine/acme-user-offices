const
  conn = require('./conn'),
  User = require('./User'),
  Office = require('./Office')

User.belongsTo(Office)
Office.hasMany(User)

const sync = () => conn.sync({ force: true })

const seed = () => {
  return require('./seed')(User, Office)
}

module.exports = {
  sync,
  seed,
  models: {
    User,
    Office
  }
}
