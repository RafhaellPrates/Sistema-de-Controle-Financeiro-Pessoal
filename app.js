const express = require ('express')
const app = express()
const {engine} = require ('express-handlebars')
const {dashboard} = require('./routes/dashboard')




// config
    //template Engine
    app.engine('handlebars',engine({defaultLayout:'main'}))
    app.set('view engine','handlebars')

    app.use(express.urlencoded({extended:true}))
    app.use(express.json())
    app.use(express.static('public'))
// Rotas
app.get('/',dashboard)







app.listen(8081)
