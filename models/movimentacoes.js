import {db} from './db.js'

const transacoes = db.sequelize.define('transacoes',{
    tipo: { type: db.Sequelize.STRING },
    valor: { type: db.Sequelize.INTEGER },
    descricao: { type: db.Sequelize.TEXT},
    data:{ type: db.Sequelize.DATE}
})

export {transacoes}