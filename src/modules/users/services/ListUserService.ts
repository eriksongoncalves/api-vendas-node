import { getCustomRepository } from 'typeorm';

import UsersRepository from '../typeorm/repositories/UsersRepository';

class ListUserService {
  async execute() {
    const usersRepository = getCustomRepository(UsersRepository);

    return usersRepository.find();
  }
}

export default ListUserService;
