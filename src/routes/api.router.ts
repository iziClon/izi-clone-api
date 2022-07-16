import { Router } from 'express';

import { commonRouter } from './common.router';
import { authRouter } from './auth.router';

const router = Router();

router.use('/common', commonRouter);
router.use('/auth', authRouter);

export const apiRouter = router;
