import { userRepository } from "./user.repository";
import { mapUserToDTO } from "./user.map";
import { UserDTO, CreateUserDTO, UpdateUserDTO } from "./user.dto";
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

  getUser = async (id: number): Promise<UserDTO> => {
    const user = await userRepository.getUser(id);

    if (!user) {
      throw Error("User Not Found");
    }
    
    return mapUserToDTO(user);
  }

  deleteUser = async (id: number) => {
    const user = await userRepository.deleteUser(id)
    
    return user;
  }


}

export const userService = new UserService();