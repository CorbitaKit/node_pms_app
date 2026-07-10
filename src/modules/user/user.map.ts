import { UserDTO, UserWithRoleAndPersonalInformation } from "./user.dto";

export const mapUserToDTO = (user: UserWithRoleAndPersonalInformation): UserDTO => ({
  id: user.id,
  email: user.email,
  created_at: user.created_at,
  updated_at: user.updated_at,
  role_id: user.role_id,
  role: user.role,
  personal_information: user.personal_information,
});