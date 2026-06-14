import express from 'express'
import user_controller from '../controllers/userController.js'
import autenticar from '../middleware/auth.js'


const router = express.Router()

router.post('/register',user_controller.register_post )
router.post('/login',user_controller.login_post)
router.get('/me',autenticar,user_controller.me_get)


export default router