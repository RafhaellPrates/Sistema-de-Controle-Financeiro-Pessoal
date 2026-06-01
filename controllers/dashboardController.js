
import { where } from "sequelize";
import { Transacoes } from "../models/movimentacoes.js";

export default (req,res)=>{

    let entrada = 0
    let saida = 0 

    Transacoes.findAll().then((transacoes)=>{
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

        const formata_saldo = saldo.toLocaleString('pt-br',{
            style:'currency',
            currency:'BRL'})

        const formata_entrada = entrada.toLocaleString('pt-br',{
            style:'currency',
            currency:'BRL'})
        const formata_saida = saida.toLocaleString('pt-br',{
            style:'currency',
            currency:'BRL'
        })

        res.render('movimentacoes/dashboard',{
            saldo: formata_saldo,
            entrada: formata_entrada,
            saida: formata_saida})

    }).catch((err)=>{
        console.log(err)
    })
    
   
}
