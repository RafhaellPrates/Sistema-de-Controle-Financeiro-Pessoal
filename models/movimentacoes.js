const { FORCE } = require('sequelize/lib/index-hints')
const db = require ('./db')

const estado = db.sequelize.define('estado',{
    saldo: { type: db.Sequelize.INTEGER },
    entradas: { type: db.Sequelize.INTEGER },
    saidas: { type: db.Sequelize.INTEGER}
})

module.exports = estado