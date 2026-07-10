import { userService } from "./user.service";
import { Request, Response } from 'express';
import { HTTP_STATUS } from "../../constants/http.status";

export class UserController {

    getUsers = async (req: Request, res: Response) => {
        try {
            const users = await userService.getUsers();
            res.status(200).json({
                data: users,
                message: HTTP_STATUS.OK
            });
        } catch (err: any) {
            res.status(500).json({
                message: HTTP_STATUS.INTERNAL_SERVER_ERROR,
                error: err
            });
        }
    };

    createUser = async (req: Request, res: Response) => {
        try {
            const user = await userService.createUser(req.body);

            res.status(201).json({
                data: user,
                message: HTTP_STATUS.CREATED
            });
        } catch (err: any) {
            res.status(500).json({
                message: HTTP_STATUS.INTERNAL_SERVER_ERROR,
                error: err.message,
            });
        }
    };

    getUser = async (req: Request, res: Response) => {
        try {
            const user = await userService.getUser(Number(req.params.id));
            res.status(200).json({
                data: user,
                message: HTTP_STATUS.OK
            });
        } catch (err: any) {
            res.status(500).json({
                message: HTTP_STATUS.INTERNAL_SERVER_ERROR,
                error: err.message
            })
        }
    }
    
    deleteUser = async (req: Request, res: Response) => {
        try {
            const user = await userService.deleteUser(Number(req.params.id));

            res.status(204).json({
                message: HTTP_STATUS.DELETED
            })
        } catch (err: any) {
            res.status(500).json({
                message: HTTP_STATUS.INTERNAL_SERVER_ERROR,
                error: err.message
            })
        }
    }


}

export const userController = new UserController();