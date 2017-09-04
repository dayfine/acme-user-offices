const
  conn = require('./conn'),
  // Order = require('./Order'),
  // LineItem = require('./LineItem'),
  // Product = require('./Product')
  User = require('./User'),
  Office = require('./Office')

User.belongsTo(Office)
Office.hasMany(User)

const sync = () => conn.sync({ force: true })

const seed = () => {
  return require('./seed')(User)
}

module.exports = {
  sync,
  seed,
  models: {
    // Order,
    // LineItem,
    // Product
    User,
    Office
  }
}
