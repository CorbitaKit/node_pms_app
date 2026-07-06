import { userService } from "./user.service";

export class UserController {

    getUsers = async (req: any, res: any) => {
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