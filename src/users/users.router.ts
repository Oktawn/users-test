import { Router } from "express";
import { UsersController } from "./users.controller.js";
import { authMiddleware } from "../auth/auth.middleware.js";
import { RoleUser } from "../utils/role.enum.js";

export const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/:id', authMiddleware(), usersController.getById);

usersRouter.get('/', authMiddleware([RoleUser.ADMIN]), usersController.list);

usersRouter.put('/:id/block', authMiddleware(), usersController.block);