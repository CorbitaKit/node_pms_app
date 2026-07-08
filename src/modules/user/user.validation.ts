import { z } from "zod";

const UserValidation = z.object({
    email: z.email(),
    password: z.string().min(8),
    role_id: z.number().min(1)
})

export default UserValidation;