import { Transacoes } from '../models/movimentacoes.js'
import { valida } from '../utils/valida.js'


const Movement_create_get = (req,res)=>{
    res.render('movimentacoes/novamovimentacao')
}

const Movement_create_post = (req,res)=>{
    
    const  { valor,descricao,tipo } = req.body
    const dados = valida(valor,descricao,tipo)
    
    if(dados.erros.length > 0){
        return  res.status(400).json({'erros':dados.erros})
    }else{
    Transacoes.create({
        valor: dados.valor,
        descricao: dados.descricao,  
        tipo: dados.tipo
    }).then(()=>{
        res.sendStatus(201)
    }).catch((err)=>{
        res.status(400).json({'Erro: ':err})
    })}
} 

const Movemente_update_get = (req,res)=>{

    Transacoes.findOne({where:{'id': req.params.id}}).then((transacoes)=>{

        transacoes = transacoes.get({plain:true})

        transacoes.isEntrada = transacoes.tipo === 'entrada'
        transacoes.isSaida = transacoes.tipo == 'saida'

        res.render('movimentacoes/atualizar',{transacoes})
        
    }).catch((err)=>{
        res.send(err)
    })
}

const Movement_update_post = (req,res)=>{

    const  { valor,descricao,tipo } = req.body
    
    const dados = valida(valor,descricao,tipo)
    
    if(dados.erros.length > 0){
        res.json({'erros':dados.erros})
    }else{
        Transacoes.update({valor,descricao,tipo},
            {where:{'id':req.params.id}}).then(()=>{
            res.sendStatus(200)
        }).catch((err)=>{
            res.send(err)
        })
    }
}

const Movement_delete = (req,res)=>{
    Transacoes.destroy({where:{'id': req.params.id}}).then(()=>{
        res.sendStatus(200)
    }).catch((err)=>{
        res.sendStatus(404)
    })
}

const Movement_history = (req,res)=>{
    Transacoes.findAll({order:[['id','DESC']]}).then((transacoes)=>{
        transacoes = transacoes.map(p => p.get({plain: true}))
        
        res.render('movimentacoes/mostrarHistorico',{transacoes:transacoes})
    }).catch((err)=>{
        res.Json(err)
    })
}


export default {
    Movement_create_post,
    Movement_create_get,
    Movement_delete,
    Movement_history,
    Movemente_update_get,
    Movement_update_post,
}