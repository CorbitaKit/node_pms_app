import Router from 'express';
import { userController } from '../../modules/user/user.controller';
import { validate } from '../../middlewares/validate';
import UserValidation from '../../modules/user/user.validation';
import { authorization } from "../../middlewares/authorization";
import { PERMISSIONS } from '../../constants/permission'
const router = Router();


router.get(
  '/users', 
  userController.getUsers
);

router.post(
  '/users', 
  authorization(PERMISSIONS.CREATE_USER), 
  validate(UserValidation), 
  userController.createUser
);

router.get(
  '/users/:id',
  userController.getUser
);


router.delete(
  '/users/:id',
  authorization(PERMISSIONS.DELETE_USER),
  userController.deleteUser
);

export default router;