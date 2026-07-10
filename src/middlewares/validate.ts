// middleware/validate.ts
import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { HTTP_STATUS } from "../constants/http.status";

export const validate =
  (schema: z.ZodType) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      res.status(422).json({
        message: HTTP_STATUS.UNPROCESSABLE_ENTITY,
        errors: result.error.issues
      });
      return;
    }

    req.body = result.data;

    next();
  };