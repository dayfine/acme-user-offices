const
  conn = require('./conn'),
  User = conn.define('user', {
    name: {
      type: conn.Sequelize.STRING
    },
    title: {
      type: conn.Sequelize.ENUM(
        'Intern', 'Associate', 'Sr. Associate',
        'Manager', 'Director', 'Managing Director')
    }
  })

module.exports = User
