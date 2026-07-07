import { prisma } from "../../utils/prisma";
import { UserWithRole } from "./user.dto";

;

export class UserRepository {

    async getAllUsers(): Promise<UserWithRole[]> {
    const user =  prisma.user.findMany( {
        include: {
            role: true,
        },
    });
    return user;
  }

}

export const userRepository = new UserRepository();