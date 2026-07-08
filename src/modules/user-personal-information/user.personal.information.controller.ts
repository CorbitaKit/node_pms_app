import { userPersonalInformationService } from "./user.personal.information.service";
import { Request, Response } from "express";

class UserPersonalInformationController
{
    store = async (req: Request, res: Response) => {
        try {
            const userPersonalInformation = await userPersonalInformationService.store(req.body)
            res.status(201).json(userPersonalInformation);
        } catch (err: any) {
            res.status(500).json({ message: 'Internal Server Error'});
        }
    }
}

export const userPersonalInformationController = new UserPersonalInformationController(); 