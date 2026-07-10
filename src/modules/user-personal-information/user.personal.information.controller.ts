import { HTTP_STATUS } from "../../constants/http.status";
import { userPersonalInformationService } from "./user.personal.information.service";
import { Request, Response } from "express";

class UserPersonalInformationController
{
    store = async (req: Request, res: Response) => {
        try {
            const userPersonalInformation = await userPersonalInformationService.store(req.body)
            res.status(201).json({
                data: userPersonalInformation,
                message: HTTP_STATUS.OK
            });
        } catch (err: any) {
            res.status(500).json({ message: HTTP_STATUS.INTERNAL_SERVER_ERROR });
        }
    }

    update = async (req: Request, res: Response) => {
        try {
            const userPersonalInformation = await userPersonalInformationService.update(req.body, Number(req.params.id))
            res.status(200).json({
                data: userPersonalInformation,
                message: HTTP_STATUS.OK
            })
        } catch(err: any) {
            res.status(500).json({ message: HTTP_STATUS.INTERNAL_SERVER_ERROR })
        }
    }
}

export const userPersonalInformationController = new UserPersonalInformationController(); 