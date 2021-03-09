import { Request, Response } from 'express';

import ResetPasswordService from '../services/ResetPasswordService';

class ResetPasswordController {
  async create(req: Request, res: Response) {
    const { password, token } = req.body;

    const service = new ResetPasswordService();

    await service.execute({ token, password });

    return res.status(204).json();
  }
}

export default ResetPasswordController;
