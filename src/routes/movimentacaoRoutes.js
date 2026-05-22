import express from 'express'
import Movimentacao_controller from '../controllers/movimentacaoController.js'
import { resolvePtr } from 'node:dns'
const router = express.Router()

router.get('/',Movimentacao_controller.Movement_Dashboard)
router.get('/nova',Movimentacao_controller.Movement_create_get)
router.post('/Nova',Movimentacao_controller.Movement_create_post)
router.get('/historico',Movimentacao_controller.Movement_history)
router.post('/deletar/:id',Movimentacao_controller.Movement_delete)
router.get('/atualizar/:id',Movimentacao_controller.Movemente_update_get)
router.post('/Atualizar/:id',Movimentacao_controller.Movement_update_post)

export default router