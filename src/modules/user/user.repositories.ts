import { prisma } from "../../utils/prisma";
import { User } from "../../../generated/prisma/client";

export class UserRepository {

    async getAllUsers(): Promise<User[]> {
    const user =  prisma.user.findMany( {
        include: {
            role: true,
        },
    });
    console.log("Retrieved users from repository:", user);
    return user;
  }

}

export const userRepository = new UserRepository();