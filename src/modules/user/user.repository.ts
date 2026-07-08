import { prisma } from "../../utils/prisma";
import { UserWithRole } from "./user.dto";
import { CreateUserDTO } from "./user.dto";
import { CredentialsDto } from "../auth/auth.dto";

export class UserRepository 
{

    async getAllUsers(): Promise<UserWithRole[]> {
    const users =  prisma.user.findMany( {
        include: {
            role: true,
        },
    });
    return users;
  }

    async createUser(data: CreateUserDTO): Promise<UserWithRole> {
        return prisma.user.create({
            data,
            include: {
                role: true,
            },
        });
    }

    async findUser(data: CredentialsDto): Promise<UserWithRole | null>{
        return prisma.user.findUnique({
            where: {
                email: data.email
            },
            include: {
                role: true,
            }
        })
    }


}

export const userRepository = new UserRepository();