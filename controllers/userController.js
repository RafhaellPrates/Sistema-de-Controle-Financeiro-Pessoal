
import { User } from '../models/user.js';
import bcryptjs  from 'bcryptjs'


const register_get = (req,res)=>{
    res.render('user/register')
}
const  register_post = async (req,res)=>{

   try{

    const {nome,email} = req.body

    const email_disponivel = await User.findOne({where:{'email':email}})

    if(email_disponivel){
        return res.status(409).json({erro:'Email indísponivel'})        

    }else{ 
        
        const senha = await bcryptjs.hash(req.body.senha,10)

        await User.create({
       
            nome: nome,
            email: email,
            senha: senha

        })  
            return res.sendStatus(201)
    }
    
   }catch (err){
        return res.status(400).json({erro:'ERRO ao criar usuario'})
   }  
}
const login_get = (req,res)=>{
    res.render('user/login')
}
const login_post = async (req,res)=>{

    const {email,senha} = req.body

    try{

        const user = await User.findOne({where: { 'email':email } })
        
        if(!user){
            return res.status(401).json({erro:'Credenciais inválidas'})
        }

        const match = await bcryptjs.compare(senha,user.senha)

        if(match){
            return res.sendStatus(200)
        }else{
            return res.status(401).json({erro:'Credenciais inválidas'})
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({erro:'Erro interno'})
    }
}

export default{
    register_get,
    register_post,
    login_get,
    login_post
}