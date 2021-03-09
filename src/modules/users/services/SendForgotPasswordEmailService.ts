import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import UserTokensRepository from '../typeorm/repositories/UserTokensRepository';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
  email: string;
}

class SendForgotPasswordEmailService {
  async execute({ email }: IRequest) {
    const userTokensRepository = getCustomRepository(UserTokensRepository);
    const userRepository = getCustomRepository(UsersRepository);

    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User does not exists.');
    }

    const userToken = userTokensRepository.generate(user.id);

    if (!user) {
      throw new AppError('User does not exists.');
    }

    return userToken;
  }
}

export default SendForgotPasswordEmailService;
