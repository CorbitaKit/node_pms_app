import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export interface AuthRequest extends Request {
    user?: {
        id: number;
        email: string;
        roleId: number;
    };
}

export const authenticate = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Unauthorized",
        });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.user = decoded as AuthRequest["user"];

        next();
    } catch {
        return res.status(401).json({
            message: "Invalid or expired token",
        });
    }
};