
import { authService } from "./auth.service";
import { Request, Response } from 'express';


export class AuthController
{
    login = async (req: Request, res: Response) => 
    {
        try {
            const user = await authService.login(req.body)
            return res.status(200).json(user);
        } catch (err: any) {
            return res.status(401).json(
                {
                    message: "Invalid Credentials"
                }
            );
        }
    }
}

export const authCOntroller = new AuthController();