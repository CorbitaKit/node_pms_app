import { UserPersonalInformationDTO } from "./user.personal.information.dto";
import { mapUserInformationToDTO } from "./user.personal.information.map";
import { userPersonalInformationRepository } from "./user.personal.information.repository";

export class UserPersonalInformationService
{
    store = async (data: UserPersonalInformationDTO): Promise<UserPersonalInformationDTO> => {
        const userPersonalInformation = await userPersonalInformationRepository.store(data)

        return mapUserInformationToDTO(userPersonalInformation);
    }

    update = async (data: UserPersonalInformationDTO, id: number): Promise<UserPersonalInformationDTO> => {
        const userPersonalInformation = await userPersonalInformationRepository.update(data, id);

        return mapUserInformationToDTO(userPersonalInformation);
    }
}

export const userPersonalInformationService = new UserPersonalInformationService();