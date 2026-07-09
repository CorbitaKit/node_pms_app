import { prisma } from "../../utils/prisma";
import { UserWithRoleAndPersonalInformation } from "./user.dto";
import { CreateUserDTO } from "./user.dto";
import { CredentialsDto } from "../auth/auth.dto";

export class UserRepository 
{

    getAllUsers = async (): Promise<UserWithRoleAndPersonalInformation[]> => {
        const users =  prisma.user.findMany({
            include: {
                role: true,
                personal_information: true
            },
        });
        return users;
    }
    
    createUser = async (data: CreateUserDTO): Promise<UserWithRoleAndPersonalInformation> => {
        return prisma.user.create({
            data,
            include: {
                role: true,
                personal_information: true
            },
        });
    }

    findUser = async (data: CredentialsDto): Promise<UserWithRoleAndPersonalInformation | null> => {
        return prisma.user.findUnique({
            where: {
                email: data.email
            },
            include: {
                role: true,
                personal_information: true
            }
        })
    }


}

export const userRepository = new UserRepository();