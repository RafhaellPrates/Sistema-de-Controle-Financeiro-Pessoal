import { Transacoes } from '../models/movimentacoes.js'
import { valida } from '../utils/valida.js'


const Movement_create_get = (req,res)=>{
    res.render('novamovimentacao')
}

const Movement_create_post = (req,res)=>{
    
    const {valor,descricao,tipo} = valida(req.body.valor,req.body.descricao,req.body.tipo)
    
    Transacoes.create({
        valor: valor,
        descricao: descricao,  
        tipo: tipo
    }).then(()=>{
        res.sendStatus(200)
    }).catch((err)=>{
        res.send(err)
    })
} 

const Movemente_update_get = (req,res)=>{

    Transacoes.findOne({where:{'id': req.params.id}}).then((transacoes)=>{

        transacoes = transacoes.get({plain:true})

        transacoes.isEntrada = transacoes.tipo === 'entrada'
        transacoes.isSaida = transacoes.tipo == 'saida'

        res.render('atualizar',{transacoes})
        
    }).catch((err)=>{
        res.send(err)
    })
}

const Movement_update_post = (req,res)=>{

    const  { valor,descricao,tipo } = req.body
    const dados = valida(req.body)

    if(dados.erros.length > 0){
        res.json({'erros':erros})
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
        
        res.render('mostrarHistorico',{transacoes:transacoes})
    }).catch((err)=>{
        res.Json(err)
    })
}

const Movement_Dashboard =  (req,res)=>{
    res.render('dashboard')
}
export default {
    Movement_create_post,
    Movement_create_get,
    Movement_delete,
    Movement_history,
    Movement_Dashboard,
    Movemente_update_get,
    Movement_update_post,
}