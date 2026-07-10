import { prisma } from "../../utils/prisma";
import { UserWithRoleAndPersonalInformation, CreateUserDTO } from "./user.dto";
import { CredentialsDto } from "../auth/auth.dto";

export class UserRepository 
{

    getAllUsers = async (): Promise<UserWithRoleAndPersonalInformation[]> => {
        const users =  prisma.user.findMany({
            where: { deleted_at: null},

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

    getUser = async (id: number): Promise<UserWithRoleAndPersonalInformation | null> => {
        return prisma.user.findFirst({
            where: {
                id: id,
                deleted_at: null
            },
            include: {
                role: true,
                personal_information: true
            }
        });
    }

    deleteUser = async (id: number) => {
        return prisma.user.update({
            where: { id },
            data: {
                deleted_at: new Date()
            }
        });
    }


}

export const userRepository = new UserRepository();