import { RoleUser } from "../utils/role.enum.js";
import { Request } from "express";

interface ICreateUser {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  role: RoleUser;
  active: boolean;
  email: string;
  password: string;
}

interface ILogin {
  email: string;
  password: string;
}

interface IBlockUser {
  userId: string;
}

interface TokenPayload {
  userId: string;
  role: string;
}

interface AuthenticatedRequest extends Request {
  user?: TokenPayload;
}

export {
  ICreateUser,
  ILogin,
  IBlockUser,
  TokenPayload,
  AuthenticatedRequest
}