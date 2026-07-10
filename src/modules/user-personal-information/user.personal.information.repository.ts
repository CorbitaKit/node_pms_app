import { prisma } from "../../utils/prisma";
import { UserPersonalInformationDTO } from "./user.personal.information.dto";
import { UserPersonalInformation } from '../../../generated/prisma/client';

export class UserPersonalInformationRepository
{
    store = async (data: UserPersonalInformationDTO): Promise<UserPersonalInformation> => {
        return prisma.userPersonalInformation.create({
            data
        });
    }

    update = async (data: UserPersonalInformationDTO, id: number): Promise<UserPersonalInformation> => {
        return prisma.userPersonalInformation.update({
            where: {
                user_id: data.user_id
            },
            data:  data 
        })
    }
}

export const userPersonalInformationRepository = new UserPersonalInformationRepository();