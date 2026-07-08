import { RoleDTO } from "../role/role.dto";
import { Prisma } from "../../../generated/prisma/client";

export type UserDTO = {
    id: number;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    roleID: number;
    role: RoleDTO | null;
};

export type CreateUserDTO = {
    email: string;
    password: string;
    roleID: number;
}

export type UserWithRole = Prisma.UserGetPayload<{
    include: { role: true };
}>;