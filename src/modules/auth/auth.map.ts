import { UserWithRoleAndPersonalInformation } from "../user/user.dto";
import { AuthResponseDTO } from "./auth.dto";

export const mapAuthResponseDTO = (user: UserWithRoleAndPersonalInformation, token: string): AuthResponseDTO => {
    return {
        user: user,
        token: token,
    }
    
}