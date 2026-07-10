
import { useState } from "react"
import { Link, useNavigate } from "react-router"
import MostraMsg from "../utils/Msg"


export default function Login(){

    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault();

        const url = import.meta.env.VITE_API_URL
    
        return fetch(`${url}/login`,{
            credentials: 'include',
            method:'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify({email:email ,senha: senha})

        }).then(res => {

            if(!res.ok){
                MostraMsg('Email ou senha invalidos ', false)
                
            }else{ 
                navigate('/')

            }
        }).catch((err)=>{
            console.error('Erro', err)
        })


    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div>
                <label>Email:  </label>
                <input type="email" value={email} 
                placeholder="Exemplo@gmail.com"
                onChange={(e)=> setEmail(e.target.value)}required/>

                <br />
                <label>Senha: </label>
                <input type="password" value={senha} 
                placeholder="********" 
                onChange={(e)=> setSenha(e.target.value)}required/>
                
                <br />
                <button type="submit">Logar</button>
                <button ><Link to={'/register'}>Registrar</Link></button>
            </div>

        </form>

    )
}

