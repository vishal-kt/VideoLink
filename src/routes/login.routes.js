// loginRoute.js

import { Router } from 'express';
import loginUser from '../controllers/loginUser.controller.js';
const router = Router();

router.route("/login").post(loginUser);

export default router;
