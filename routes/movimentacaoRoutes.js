import express from 'express'
import autenticar from '../middleware/auth.js';
import Movimentacao_controller from '../controllers/movimentacaoController.js'
import {Dashboard_controller,logout_controller_post} from '../controllers/dashboardController.js'

const router = express.Router()

router.get('/dashboard',autenticar,Dashboard_controller)
router.post('/movimentacoes',autenticar,Movimentacao_controller.Movement_create_post)
router.get('/movimentacoes',autenticar,Movimentacao_controller.Movement_history)
router.delete('/movimentacoes/:id',autenticar,Movimentacao_controller.Movement_delete)
router.get('/movimentacoes/:id',autenticar,Movimentacao_controller.Movemente_update_get)
router.put('/movimentacoes/:id',autenticar,Movimentacao_controller.Movement_update_post)
router.post('/logout',autenticar,logout_controller_post)

export default router