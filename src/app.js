import 'dotenv/config'
import express from 'express'
const app = express()
import { engine } from 'express-handlebars'
import movimentacaoRoutes from './routes/movimentacaoRoutes.js'
import userRoutes from './routes/userRoutes.js'

// config

    // Template Engine
    app.engine('handlebars',engine({defaultLayout:'main'}))
    app.set('view engine','handlebars')

    // Middleware
    app.use(express.urlencoded({extended:true}))
    app.use(express.json())
    app.use(express.static('public'))

    // Route
    app.use(movimentacaoRoutes)
    app.use(userRoutes)
   

app.listen(8081)