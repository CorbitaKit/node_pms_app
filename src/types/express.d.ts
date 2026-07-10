import { UserJwtPayload } from "../middlewares/authentication";

declare module "express-serve-static-core" {
    interface Request {
        user?: UserJwtPayload;
    }
}