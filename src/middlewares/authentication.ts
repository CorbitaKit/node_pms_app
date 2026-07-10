import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config";
import { HTTP_STATUS } from "../constants/http.status";

export interface UserJwtPayload extends jwt.JwtPayload {
    id: number;
    email: string;
    role_id: number;
}

export interface AuthRequest extends Request {
    user?: UserJwtPayload;
}

export const authenticate = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
        return res.status(401).json({
            message: HTTP_STATUS.UNAUTHORIZED,
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as UserJwtPayload;

        req.user = decoded;

        next();
    } catch {
        return res.status(401).json({
            message: HTTP_STATUS.EXPIRED_TOKEN,
        });
    }
};