import { z } from "zod";
import { Genders } from "../../../generated/prisma/enums";

const UserInformationValidation = z.object({
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    phone_number: z.string(),
    gender: z.enum(Genders),
    user_id: z.number(),
});

export default UserInformationValidation;