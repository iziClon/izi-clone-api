import { Router } from 'express';

import { authController } from '../controllers';
import { authMiddleware } from '../middlewares';

const router = Router();

router.post('/registration', authMiddleware.checkIsUserExists, authMiddleware.validateRegistration, authController.registration);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/refresh');

export const authRouter = router;
