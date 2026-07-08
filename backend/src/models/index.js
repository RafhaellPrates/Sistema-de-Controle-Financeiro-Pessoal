import { User } from './user.js';
import { Transacoes } from './movimentacoes.js';

User.hasMany( Transacoes, {foreignKey: 'user_id' })
Transacoes.belongsTo( User, {foreignKey: 'user_id'})

export {
    User,
    Transacoes
}
