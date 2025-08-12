import { Request, Response } from "express";
import { UsersService } from "./users.service.js";
import { AuthenticatedRequest } from "../auth/auth.interface.js";
import { RoleUser } from "../utils/role.enum.js";

const usersService = new UsersService();

export class UsersController {
  async getById(req: AuthenticatedRequest, res: Response) {
    try {
      const { id } = req.params;
      if (req.user!.userId !== id &&
        req.user!.role !== RoleUser.ADMIN) {
        res.status(403).json({ message: "Forbidden" });
        return;
      }
      const user = await usersService.getById(id);
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }
      res.json(user);
    } catch (e) {
      res.status(500).json({ message: "Failed to get user" });
    }
  }

  async list(_: Request, res: Response) {
    try {
      const users = await usersService.listUsers();
      res.json(users);
    } catch (e) {
      res.status(500).json({ message: "Failed to list users" });
    }
  }

  async block(req: AuthenticatedRequest, res: Response) {
    try {
      const { id } = req.params as { id: string };
      if (req.user!.userId !== id &&
        req.user!.role !== RoleUser.ADMIN) {
        res.status(403).json({ message: "Forbidden" });
        return;
      }
      const ok = await usersService.blockUser(id);
      if (!ok) {
        res.status(404).json({ message: "User not found" });
        return;
      }
      res.status(204).json(ok);
    } catch (e) {
      res.status(500).json({ message: "Failed to block user" });
    }
  }
}
