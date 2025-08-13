import { ICreateUser, ILogin } from "./auth.interface.js";
import { AuthService } from "./auth.service.js";
import { Request, Response } from "express";

const authService = new AuthService();
export class AuthController {

  async create(req: Request, res: Response) {
    const body: ICreateUser = req.body;
    body.dateOfBirth = new Date(body.dateOfBirth);
    try {
      const user = await authService.createUser(body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: error?.message });
    }
  }


  async login(req: Request, res: Response) {
    const body: ILogin = req.body;
    try {
      const user = await authService.login(body);
      res.status(200).json(user);
    } catch (error) {
      res.status(401).json({ message: error?.message });
    }
  }

}