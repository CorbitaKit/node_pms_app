import { prisma } from "../../utils/prisma";
import { UserPersonalInformationDTO } from "./user.personal.information.dto";
import { UserPersonalInformation } from '../../../generated/prisma/client';

export class UserPersonalInformationRepository
{
    store = async(data: UserPersonalInformationDTO): Promise<UserPersonalInformation> => {
        return prisma.userPersonalInformation.create({
            data
        });
    }
}

export const userPersonalInformationRepository = new UserPersonalInformationRepository();