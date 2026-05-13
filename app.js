import 'dotenv/config'
import express from 'express'
const app = express()
import {engine} from 'express-handlebars'
import {dashboard} from './routes/dashboard.js'
import {novaMovimentacao} from './routes/adicionarmovimentacoes.js'
import {criarNovaMovimentacao} from './routes/criarNovaMovimentacao.js'




// config
    //template Engine
    app.engine('handlebars',engine({defaultLayout:'main'}))
    app.set('view engine','handlebars')

    app.use(express.urlencoded({extended:true}))
    app.use(express.json())
    app.use(express.static('public'))


// Rotas
app.get('/',dashboard)
app.get('/novaMovimentacao',novaMovimentacao)
app.post('/criarNovaMovimentacao',criarNovaMovimentacao)


app.listen(8081)