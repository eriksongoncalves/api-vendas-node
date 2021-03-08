import { Request, Response } from 'express';

import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

class UserAvatarController {
  async update(req: Request, res: Response) {
    const service = new UpdateUserAvatarService();
    const { id } = req.user;

    const user = await service.execute({
      user_id: id,
      avatarFileName: req.file.filename
    });

    return res.json(user);
  }
}

export default UserAvatarController;
