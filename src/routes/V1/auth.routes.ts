import Router from 'express';
import { authCOntroller } from '../../modules/auth/auth.controller';
import AuthValidation from '../../modules/auth/auth.validation';
import { validate } from '../../middlewares/validate';

const router = Router();

router.post('/login',validate(AuthValidation), authCOntroller.login)

export default router;