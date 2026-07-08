import Router from 'express';
import { authCOntroller } from '../../modules/auth/auth.controller';

const router = Router();

router.post('/login', authCOntroller.login)

export default router;