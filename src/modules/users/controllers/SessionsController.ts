import { Request, Response } from 'express';

import CreateSessionService from '../services/CreateSessionService';

class SessionsController {
  async create(req: Request, res: Response) {
    const { email, password } = req.body;

    const createSession = new CreateSessionService();

    const user = await createSession.execute({ email, password });

    return res.json(user);
  }
}

export default SessionsController;
