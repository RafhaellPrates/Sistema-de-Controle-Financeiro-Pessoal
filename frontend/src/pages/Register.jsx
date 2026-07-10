import { useState } from "react";
import { Link, useNavigate } from "react-router";
import MostraMsg from "../utils/Msg";



export default function Register (){
    const [nome ,setNome] = useState('')
    const [email ,setEmail] = useState('')
    const [senha ,setSenha] = useState('')
    const navigate = useNavigate()
    

    async function handleSubmit(e){
        e.preventDefault();

        const url = import.meta.env.VITE_API_URL

        return fetch(`${url}/register`,{
            credentials: 'include',
            method: 'POST',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify({email:email, senha:senha, nome:nome})

        }).then( res => {
            if(!res.ok){
                MostraMsg('Email já cadastrado.', false)

            }else{
                MostraMsg('Usuario cadastrado com sucesso!!', true)
                navigate('/login')
            }
            
        }).catch((err)=>{
            console.log(err)
        })
    }


    return(
        <div>
            <form onSubmit={handleSubmit} >
            <h2>Register</h2>
            <div>
                <label>Nome: </label>
                <input type="text" value={nome}
                onChange={(e)=>{ setNome(e.target.value)}}
                placeholder="Seu nome" required/>
                <br />

                <label>Email: </label>
                <input type="email" value={email}
                onChange={(e)=>{ setEmail(e.target.value)}}
                placeholder="Exemplo@gmail.com" required/>
                <br />

                <label>Senha: </label>
                <input type="password" value={senha}
                onChange={(e)=>{ setSenha(e.target.value)}}
                placeholder="********" required/>
                <br />

                <button type="submit">Registrar</button>
                <button><Link to={'/login'}>Login</Link></button>

            </div>
        </form>
        </div>
        
    )
}
