
import { Sequelize } from "sequelize";
import { db } from "./db.js";


 const User = db.sequelize.define('User',{

    nome: { type: db.Sequelize.STRING },
    email:{ type: db.Sequelize.STRING },
    senha: { type: db.Sequelize.STRING }

 })


 export { User }