import { Router } from "express";
import { userPersonalInformationController } from "../../modules/user-personal-information/user.personal.information.controller";

const router = Router();


router.post('/user-personal-information', userPersonalInformationController.store)

export default router;