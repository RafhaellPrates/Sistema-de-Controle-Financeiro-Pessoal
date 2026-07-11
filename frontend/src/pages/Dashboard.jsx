import { useEffect, useState } from "react"

export default function Dashboard(){
    const [ saldo ,setSaldo ] = useState(0)
    const [ saida ,setSaida ] = useState(0)
    const [ entrada ,setEntrada ] = useState(0)
    const url = import.meta.env.VITE_API_URL

    const formatador = new Intl.NumberFormat('pt-BR',{
        style:'currency',
        currency:'BRL'
    })
    
    useEffect(()=>{
        fetch(`${url}/dashboard`,{credentials:'include'})
        .then( res => res.json())
        .then(dados =>{
            setEntrada(dados.entrada)
            setSaida(dados.saida)
            setSaldo(dados.saldo)
        })
        .catch((err)=>{
            console.log('Erro:' + err)
        })
    },[])
   
    return (
    <div>
        <h1>Dashboard</h1>
        <div>
            <p>Saldo: {formatador.format(saldo)}</p>
        </div>
        <div>
            <p>Entradas: {formatador.format(entrada)}</p>
        </div>
        <div>
            <p>Saidas: {formatador.format(saida)}</p>
        </div>
    </div>    
    )
}
