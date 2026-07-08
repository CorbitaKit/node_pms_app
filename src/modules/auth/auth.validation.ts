import { z } from "zod";

const AuthValidation = z.object({
    email: z.email(),
    password: z.string().min(8)
});

export default AuthValidation;