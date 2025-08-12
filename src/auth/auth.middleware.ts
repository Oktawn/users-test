import { NextFunction, Response } from "express";
import { AuthenticatedRequest, TokenPayload } from "./auth.interface.js";
import { RoleUser } from "../utils/role.enum.js";
import { verify } from "jsonwebtoken";
import { envConfig } from "../config/config.js";


export function authMiddleware(requiredRoles?: RoleUser[]) {
  return async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = checkTokenFromHeader(req);
    if (!token) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }
    try {
      const payload = verifyToken(token);
      if (checkRole(payload, requiredRoles)) {
        req.user = payload;
        next();
      } else {
        res.status(403).json({ message: 'Forbidden' });
      }
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized' });
      return;
    }

  }
}

function verifyToken(token: string) {
  return verify(token, envConfig.get('JWT_SECRET')) as TokenPayload;

}

function checkRole(payload: TokenPayload, roles?: RoleUser[]) {
  if (!roles || roles.length === 0) return true;
  return roles.includes(payload.role as RoleUser);
}

function checkTokenFromHeader(req: AuthenticatedRequest) {
  const [type, token] = req.headers.authorization?.split(' ') ?? [];
  return type === 'Bearer' ? token : undefined;
}