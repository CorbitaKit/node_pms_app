import { userRepository } from "./user.repository";
import { mapUserToDTO } from "./user.map";
import { UserDTO, CreateUserDTO } from "./user.dto";
import bcrypt from "bcrypt";

class UserService {
  getUsers = async (): Promise<UserDTO[]> => {
    const users = await userRepository.getAllUsers();
    return users.map(mapUserToDTO);
  }

  createUser = async (data: CreateUserDTO): Promise<UserDTO> => {
    data.password = await bcrypt.hash(data.password, 10)
    const user = await userRepository.createUser(data)
    return mapUserToDTO(user);
  }


}

export const userService = new UserService();