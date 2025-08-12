import { userRepository } from "../db/db-rep.js";

export class UsersService {
  async getById(id: string) {
    try {
      const user = await userRepository.findOne({ where: { id } });
      if (!user)
        throw new Error('User not found');
      const { password, ...safeData } = user;
      return {
        status: "success",
        user: safeData
      };
    } catch (error) {
      throw new Error(`Failed to get user: ${error.message}`);
    }

  }

  async listUsers() {
    try {
      const users = await userRepository.find();
      const safeDataUsers = users.map(u => {
        const { password, ...safe } = u;
        return safe;
      });
      return {
        status: "success",
        users: safeDataUsers
      };
    } catch (error) {
      throw new Error(`Failed to list users: ${error.message}`);
    }

  }

  async blockUser(id: string) {
    try {
      const user = await userRepository.findOne({ where: { id } });
      if (!user)
        throw new Error('User not found');
      user.isActive = false;
      await userRepository.save(user);
      return {
        status: "success",
        message: "User blocked successfully"
      };
    } catch (error) {
      throw new Error(`Failed to block user: ${error.message}`);
    }
  }
}