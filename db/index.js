const Sequelize = require("sequelize")
const db = new Sequelize ("postgres://lange:password@localhost:5432/integradorback",{
    logging: false
})


module.exports = db