import { RoleDTO } from "../role/role.dto";

export type UserDTO {
    id: number;
    email: string;
    createdAt: DateTime;
    updatedAt: DateTime;
    RoleID: number;
    role: RoleDTO;
}