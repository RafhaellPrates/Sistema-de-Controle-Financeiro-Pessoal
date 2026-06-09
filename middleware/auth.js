import jwt from "jsonwebtoken"


export default (req,res,next)=>{
    const token = req.cookies.token

    if(!token){
        return res.redirect('/login')
    }
   try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        req.id = decoded.id
        next()

   } catch (err) {
        return res.redirect('/login')
   }
}

