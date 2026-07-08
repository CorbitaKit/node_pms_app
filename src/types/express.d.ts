import { UserJwtPayload } from "../middleware/authentication";

declare module "express-serve-static-core" {
    interface Request {
        user?: UserJwtPayload;
    }
}