const
  conn = require('./conn'),
  Office = conn.define('office', {
    name: {
      type: conn.Sequelize.STRING
    },
    address: {
      type: conn.Sequelize.STRING
    },
    city: {
      type: conn.Sequelize.STRING
    },
    state: {
      type: conn.Sequelize.STRING
    },
    zip: {
      type: conn.Sequelize.STRING
    },
    phone: {
      type: conn.Sequelize.STRING
    },
    location: {
      type: conn.Sequelize.ARRAY(conn.Sequelize.FLOAT)
    }
  })

module.exports = Office
