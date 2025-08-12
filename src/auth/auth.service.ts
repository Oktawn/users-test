import { compareSync, hashSync } from "bcrypt";
import { userRepository } from "../db/db-rep.js";
import { ICreateUser, ILogin, TokenPayload } from "./auth.interface.js";
import jwt from "jsonwebtoken";
import ms from "ms";
import { envConfig } from "../config/config.js";

export class AuthService {

  async createUser(data: ICreateUser) {
    try {
      const exUser = await userRepository.findOne({ where: { email: data.email } });
      if (exUser)
        throw new Error('User already exists');

      const newUser = userRepository.create({
        ...data,
        password: hashSync(data.password, 12)
      });
      await userRepository.save(newUser);
      return {
        status: "success",
        message: "User created successfully"
      }
    } catch (error) {
      throw new Error('User creation failed');
    }
  }

  async login(data: ILogin) {
    try {
      const isUser = await userRepository.findOne({ where: { email: data.email } });
      if (isUser && compareSync(data.password, isUser.password)) {
        const token = await this.generateToken({
          userId: isUser.id,
          role: isUser.role
        });
        return {
          "status": "success",
          "user": {
            id: isUser.id,
            email: isUser.email,
            role: isUser.role
          },
          "accessToken": token
        }
      }
    } catch (error) {
      throw new Error('Login failed');
    }
  }
  async generateToken(data: TokenPayload) {
    const clearToken: TokenPayload = {
      userId: data.userId,
      role: data.role
    };
    return jwt.sign(clearToken, envConfig.get("JWT_SECRET"), {
      expiresIn: ms(envConfig.get("JWT_EXPIRES_IN") as ms.StringValue)
    });
  }


}