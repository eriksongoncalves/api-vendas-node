import { getCustomRepository } from 'typeorm';
import path from 'path';

import EtherealMail from '@config/mail/EtherealMail';
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

    const userToken = await userTokensRepository.findByUser(user.id);

    if (userToken) {
      await userTokensRepository.delete(userToken.id);
    }

    const { token } = await userTokensRepository.generate(user.id);

    const forgotPasswordTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      'forgot_password.hbs'
    );

    await EtherealMail.sendMail({
      to: {
        name: user.name,
        email: user.email
      },
      subject: '[API Vendas] Recuperação de senha',
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          name: user.name,
          link: `${process.env.APP_WEB_URL}/reset_password?token=${token}`
        }
      }
    });
  }
}

export default SendForgotPasswordEmailService;
