import { NextFunction, Request, Response } from "express";
import { HTTP_STATUS } from "../constants/http.status";
import { Roles } from "../../generated/prisma/enums";



export const authorization = (roles: readonly Roles[]) => {

    return (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {

        if (!req.user) {
            return res.status(401).json({
                message: HTTP_STATUS.UNAUTHORIZED
            });
        }

        if (!roles.includes(req.user.role.name)) {
            return res.status(403).json({
                message: HTTP_STATUS.FORBIDDEN
            });
        }

        next();
    }
}