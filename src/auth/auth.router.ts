import { Router } from "express";
import { AuthController } from "./auth.controller.js";

export const authRouter = Router();
const authController = new AuthController();

authRouter.post('/create', authController.create);
authRouter.post('/login', authController.login);
