import { UserPersonalInformationDTO } from "./user.personal.information.dto";
import { UserPersonalInformation } from '../../../generated/prisma/client'


export const mapUserInformationToDTO = (userPersonalInformation: UserPersonalInformation): UserPersonalInformationDTO => {
    return {
        first_name: userPersonalInformation.first_name,
        last_name: userPersonalInformation.last_name,
        phone_number: userPersonalInformation.phone_number,
        user_id: userPersonalInformation.user_id,
        gender: userPersonalInformation.gender

    }
}