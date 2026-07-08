import { CredentialsDto, AuthResponseDTO } from "./auth.dto";
import { userRepository } from "../user/user.repository";
import bcrypt from "bcrypt";
import jwt, { SignOptions } from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../../config/config";
import { mapAuthResponseDTO } from "./auth.map";

export class AuthService
{
    async login(data: CredentialsDto): Promise<AuthResponseDTO>
    {
        const user = await userRepository.findUser(data);

        if (!user) {
            throw new Error("Invalid Credentials");
        }

        const isValidPassword = await bcrypt.compare(
            data.password,
            user.password
        );

        if (!isValidPassword) {
            throw new Error("Invalid Credentials");
        }
        const accessToken = jwt.sign(
            {
                id: user.id,
                email: user.email,
                roleID: user.role.id
            },
            JWT_SECRET!,
            {
                expiresIn: JWT_EXPIRES_IN as SignOptions['expiresIn'],
            }
        );
        return mapAuthResponseDTO(user, accessToken);
    }
}

export const authService = new AuthService();