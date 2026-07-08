import { Link } from "react-router"


const Register = ()=>{
    return(
        <div>
            <form >
            <h2>Register</h2>
            <div>
                <label>Nome: </label>
                <input type="text" placeholder="Seu nome" required/>
                <br />
                <label>Email: </label>
                <input type="email" placeholder="Exemplo@gmail.com" required/>
                <br />
                <label>Senha: </label>
                <input type="password" placeholder="********" required/>
                <br />
                <button type="submit">Registrar</button>
                <button><Link to={'/login'}>Login</Link></button>

            </div>
        </form>
        </div>
        
    )
}
export default Register