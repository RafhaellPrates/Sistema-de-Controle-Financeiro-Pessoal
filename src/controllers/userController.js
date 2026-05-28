import { User } from '../models/user.js';

const register_get = (req,res)=>{
    res.render('user/register')
}
const register_post = (req,res)=>{

    const {nome,email,senha} = req.body
    
    User.create({
        nome: nome,
        email: email,
        senha: senha
    }).then(()=>{
        res.sendStatus(201)

    }).catch((err)=>{
        res.status(400).json({'Erro:':err})
    })
    
}
const login_get = (req,res)=>{
    res.render('user/login')
}
const login_post = (req,res)=>{

    const {email,senha} = req.body

    User.findOne({where:{'email':email}}).then((user)=>{

        if(user){

            if(senha === user.senha){
                return res.sendStatus(200)
            }else {
                return res.status(401).json({'Erro:':'Credenciais invalidas'})
            }
        }else{
            return res.status(401).json({'Erro:': 'Credenciais invalidas'})
        }
    })
}

export default{
    register_get,
    register_post,
    login_get,
    login_post
}