import jwt from "jsonwebtoken"


export default (req,res,next)=>{
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({erro: 'usuario inválido'})
    }
   try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.id = decoded.id
        next()

   } catch{
        return res.status(401).json({erro: 'usuario inválido'})
   }
}

