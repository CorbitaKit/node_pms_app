import { RoleDTO } from "../role/role.dto";
import { Prisma } from "../../../generated/prisma/client";

export type UserDTO = {
    id: number;
    email: string;
    created_at: Date;
    updated_at: Date;
    role_id: number;
    role: RoleDTO | null;
};

export type CreateUserDTO = {
    email: string;
    password: string;
    role_id: number;
}

export type UserWithRole = Prisma.UserGetPayload<{
    include: { role: true };
}>;