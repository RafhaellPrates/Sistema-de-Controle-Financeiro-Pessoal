import {Transacoes} from '../models/movimentacoes.js'

export const criarNovaMovimentacao = (req,res)=>{
    
    Transacoes.create({
        valor: req.body.valor,
        descricao: req.body.descricao,  
        tipo: req.body.tipo
    }).then(()=>{
    
    }).catch((err)=>{
        res.send(err)
    })
}