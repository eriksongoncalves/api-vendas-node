import { Request, Response } from 'express';

import ShowProfileService from '../services/ShowProfileService';
import UpdateProfileService from '../services/UpdateProfileService';

class ProfileController {
  async show(req: Request, res: Response) {
    const service = new ShowProfileService();
    const user_id = req.user.id;

    const user = await service.execute({ user_id });

    return res.json(user);
  }

  async update(req: Request, res: Response) {
    const { name, email, password, old_password } = req.body;
    const user_id = req.user.id;

    const service = new UpdateProfileService();

    const user = await service.execute({
      user_id,
      name,
      email,
      password,
      old_password
    });

    return res.json(user);
  }
}

export default ProfileController;
