import { UserWithRole } from "../user/user.dto";

export type CredentialsDto = {
    email: string;
    password: string;
}

export type AuthResponseDTO = {
    user: UserWithRole,
    token: string;
}