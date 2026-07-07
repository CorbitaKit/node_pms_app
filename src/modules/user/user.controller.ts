import { userService } from "./user.service";
import { Request, Response } from 'express';

export class UserController {

    getUsers = async (req: Request, res: Response) => {
        try {
            const users = await userService.getUsers();
            res.status(200).json(users);
        } catch (err: any) {
            res.status(500).json({
                message: "Internal Server Error",
                error: err
            });
        }
    };
}

export const userController = new UserController();