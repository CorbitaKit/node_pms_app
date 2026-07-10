// middleware/validate.ts
import { Request, Response, NextFunction } from "express";
import { z } from "zod";

export const validate =
  (schema: z.ZodType) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      res.status(422).json({
        message: "Validation failed",
        errors: result.error.issues
      });
      return;
    }

    req.body = result.data;

    next();
  };