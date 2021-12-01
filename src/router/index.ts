import { Router } from 'express';
import mailController from '../controllers/mailController';

const router = Router();

router.post('/sendmail', mailController.send);

export default router;
