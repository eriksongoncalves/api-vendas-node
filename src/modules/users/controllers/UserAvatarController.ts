import { Request, Response } from 'express';
import { classToClass } from 'class-transformer';

import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

class UserAvatarController {
  async update(req: Request, res: Response) {
    const service = new UpdateUserAvatarService();
    const { id } = req.user;

    const user = await service.execute({
      user_id: id,
      avatarFileName: req.file.filename
    });

    return res.json(classToClass(user));
  }
}

export default UserAvatarController;
