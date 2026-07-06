import { UserDTO } from "./user.dto";
import { User } from "../../../generated/prisma/client";


export const mapUserToDTO = (user: User): UserDTO => {
    console.log(user)
    return {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        role: {
            id: user.role.id,
            name: user.role.name,
        },
    };
}