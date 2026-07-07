import { userRepository } from "./user.repositories";
import { mapUserToDTO } from "./user.map";
import { UserDTO } from "./user.dto";

class UserService {
  public async getUsers(): Promise<UserDTO[]> {
    const users = await userRepository.getAllUsers();
    return users.map(mapUserToDTO);
  }
}

export const userService = new UserService();