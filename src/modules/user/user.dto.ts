import { RoleDTO } from "../role/role.dto";
import { Prisma } from "../../../generated/prisma/client";
import { UserPersonalInformationDTO } from "../user-personal-information/user.personal.information.dto";

export type UserDTO = {
    id: number;
    email: string;
    created_at: Date;
    updated_at: Date;
    role_id: number;
    role: RoleDTO | null;
    personal_information: UserPersonalInformationDTO | null
};

export type CreateUserDTO = {
    email: string;
    password: string;
    role_id: number;
}

export type UserWithRoleAndPersonalInformation = Prisma.UserGetPayload<{
    include: { role: true, personal_information: true };
}>;