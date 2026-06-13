import { Transacoes } from '../models/index.js'
import { valida } from '../utils/valida.js'


const Movement_create_post = (req,res)=>{

    
    const  { valor,descricao,tipo } = req.body
    const dados = valida(valor,descricao,tipo)
    
    if(dados.erros.length > 0){
        return  res.status(400).json({'erros':dados.erros})
    }else{

    Transacoes.create({
        valor: dados.valor,
        descricao: dados.descricao,  
        tipo: dados.tipo,
        user_id: req.id

    }).then(()=>{
        res.sendStatus(201)
    }).catch((err)=>{
        res.status(400).json({'Erro: ':err})
    })}
} 

const Movemente_update_get = (req,res)=>{

    Transacoes.findOne({where:{'user_id' : req.id , 'id': req.params.id}}).then((transacoes)=>{

        if(!transacoes){

            return res.sendStatus(404)
        }else{
            
            transacoes = transacoes.get({plain:true})

            res.json({transacoes:transacoes})
        }

    }).catch((err)=>{
        res.json({err})
    })
}

const Movement_update_post = (req,res)=>{
    
    const dados = valida(req.body.valor,req.body.descricao,req.body.tipo)
    
    if(dados.erros.length > 0){
        res.json({'erros':dados.erros})
    }else{
        Transacoes.update({
            valor: dados.valor,
            descricao: dados.descricao,
            tipo: dados.tipo},
            {where:{'user_id': req.id , 'id':req.params.id}}).then(([linhas])=>{

                if(linhas === 0 ){
                    return res.sendStatus(404)
                }else {
                    return res.sendStatus(200)
                }
            
        }).catch((err)=>{
            res.json({err})
        })
    }
}

const Movement_delete = (req,res)=>{
    Transacoes.destroy({where:{'user_id': req.id , 'id': req.params.id}}).then((deletados)=>{
        if(deletados === 0 ){
            res.sendStatus(404)
        }else{
            res.sendStatus(200)
        }
        
    }).catch((err)=>{
        res.sendStatus(404)
    })
}

const Movement_history = (req,res)=>{
    Transacoes.findAll({where: {'user_id': req.id}, order:[['id','DESC']]}).then((transacoes)=>{
        transacoes = transacoes.map(p => p.get({plain: true}))
        
        res.json({transacoes:transacoes})

    }).catch((err)=>{
        res.json({err})
    })
}


export default {
    Movement_create_post,
    Movement_delete,
    Movement_history,
    Movemente_update_get,
    Movement_update_post,
}