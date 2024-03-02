import {Router} from 'express';
import signUpUser from '../controllers/signUpUser.controller.js';
const router = Router()


 router.route("/signup").post(signUpUser)



export default router;