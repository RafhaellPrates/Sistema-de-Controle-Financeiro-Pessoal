import { Transacoes } from "../models/index.js";

const Dashboard_controller = (req,res)=>{

    let entrada = 0
    let saida = 0 

    Transacoes.findAll( { where: {'user_id' : req.id} }).then((transacoes)=>{
        transacoes.forEach((transacoes)=>{
        
            transacoes = transacoes.get({plain:true})

            if(transacoes.tipo === 'entrada'){
                entrada += Number(transacoes.valor)
            }
            if(transacoes.tipo === 'saida'){
                saida += Number(transacoes.valor)
            }
        })

        const saldo = entrada - saida

        return res.json({
            saldo: saldo,
            entrada: entrada,
            saida: saida
        })

    }).catch((err)=>{
        return res.json({err})
    }) 
}

const logout_controller_post = (req,res)=>{

    res.clearCookie('token')
    res.sendStatus(200)
}

export {
    Dashboard_controller,
    logout_controller_post
}
