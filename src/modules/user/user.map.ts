import { UserDTO, UserWithRole } from "./user.dto";

export const mapUserToDTO = (user: UserWithRole): UserDTO => ({
    id: user.id,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    roleID: user.roleID,
    role: {
        id: user.role.id,
        name: user.role.name,
    },
});