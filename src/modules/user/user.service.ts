import { userRepository } from "./user.repositories";
import { mapUserToDTO } from "./user.map";
import { UserDTO } from "./user.dto";

class UserService {
  public async getUsers() {
    const users = await userRepository.getAllUsers();
    console.log("Retrieved users:", users);
    // return users.map(mapUserToDTO);
  }
}

export const userService = new UserService();