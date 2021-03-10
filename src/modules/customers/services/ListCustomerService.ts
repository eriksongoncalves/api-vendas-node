import { getCustomRepository } from 'typeorm';

import CustomersRepository from '../typeorm/repositories/CustomersRepository';

class ListCustomerService {
  async execute() {
    const repository = getCustomRepository(CustomersRepository);

    return repository.find();
  }
}

export default ListCustomerService;
