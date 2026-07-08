import {db} from './db.js'

const Transacoes = db.sequelize.define('transacoes',{
    valor: { type: db.Sequelize.DECIMAL },
    descricao: { type: db.Sequelize.TEXT},
    tipo: { type: db.Sequelize.STRING }
})

export {Transacoes}