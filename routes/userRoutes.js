import express from 'express'
import user_controller from '../controllers/userController.js'


const router = express.Router()

router.get('/',user_controller.register_get)
router.post('/register',user_controller.register_post )
router.get('/login',user_controller.login_get)
router.post('/login',user_controller.login_post)


export default router