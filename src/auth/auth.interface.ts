import { Request } from "express";

interface ICreateUser {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
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