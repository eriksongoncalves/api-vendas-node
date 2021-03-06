import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import CreateUserService from '../services/CreateUserService';
import ListUserService from '../services/ListUserService';

class UsersController {
  async index(_req: Request, res: Response) {
    const listUsers = new ListUserService();

    const users = await listUsers.execute();

    return res.json(classToClass(users));
  }

  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, email, password });

    return res.json(classToClass(user));
  }
}

export default UsersController;
