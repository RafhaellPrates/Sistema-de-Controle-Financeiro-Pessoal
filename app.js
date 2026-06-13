import 'dotenv/config'
import express from 'express'
const app = express()
import movimentacaoRoutes from './routes/movimentacaoRoutes.js'
import userRoutes from './routes/userRoutes.js'
import cookieParser from 'cookie-parser'


// config

    // Template Engine
    

    // Middleware
    app.use(cookieParser())
    app.use(express.urlencoded({extended:true}))
    app.use(express.json())
    app.use(express.static('public'))

    // Route
    app.use(movimentacaoRoutes)
    app.use(userRoutes)
   

app.listen(8081)