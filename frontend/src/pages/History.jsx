import { useEffect , useState } from 'react'
import {Link} from 'react-router'

export default  function History(){

    const url = import.meta.env.VITE_API_URL
    const [historico ,setHistorico] = useState([])
    useEffect(()=>{
        fetch(`${url}/movimentacoes`,{credentials:'include'})
        .then(res => res.json())
        .then( history => setHistorico(history.transacoes) )
        .catch((err)=>{
            console.log('Erro: '+ err)
        })
    },[])

    return( 
        <div>
            <h1>History</h1>

            <ul>
                {historico.map((p)=> <li key={p.id}>Tipo: {p.tipo} Valor: {p.valor} <br/> Descrição: {p.descricao} <br /><br /></li> )}
                
            </ul>
            <button><Link to={'/'}>Dashboard</Link></button>
        </div>
    )
}