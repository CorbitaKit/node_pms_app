import { Genders } from "../../../generated/prisma/enums";

export type UserPersonalInformationDTO = {
    first_name: string;
    last_name: string;
    phone_number: string;
    gender: Genders;
    user_id: number;
}