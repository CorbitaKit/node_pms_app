import { Router } from "express";
import { userPersonalInformationController } from "../../modules/user-personal-information/user.personal.information.controller";
import { validate } from "../../middlewares/validate";
import UserInformationValidation from "../../modules/user-personal-information/user.personal.information.validation";

const router = Router();


router.post('/user-personal-information', validate(UserInformationValidation), userPersonalInformationController.store)

router.put('/user-personal-information/:id', validate(UserInformationValidation), userPersonalInformationController.update)

export default router;