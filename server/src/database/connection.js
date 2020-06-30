const Sequelize = require('sequelize')
const sequelize = new Sequelize('modeloduplicata', 'root', 'gqj7789', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize


