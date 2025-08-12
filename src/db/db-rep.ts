  import { UsersEntity } from "../entities/users.entity.js";
import { AppDataSource } from "../data-sourse.js";

export const userRepository = AppDataSource.getRepository(UsersEntity);
