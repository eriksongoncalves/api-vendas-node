import { Request, Response } from 'express';

import SendForgotPasswordEmailService from '../services/SendForgotPasswordEmailService';

class ForgotPasswordController {
  async create(req: Request, res: Response) {
    const { email } = req.body;

    const service = new SendForgotPasswordEmailService();

    await service.execute({ email });

    return res.status(204).json();
  }
}

export default ForgotPasswordController;
