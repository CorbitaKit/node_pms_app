import { UserDTO, UserWithRole } from "./user.dto";

export const mapUserToDTO = (user: UserWithRole): UserDTO => ({
    id: user.id,
    email: user.email,
    created_at: user.created_at,
    updated_at: user.updated_at,
    role_id: user.role_id,
    role: {
        id: user.role.id,
        name: user.role.name,
    },
});