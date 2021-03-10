import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';

interface IRequest {
  id: string;
}

class DeleteCustomerService {
  async execute({ id }: IRequest) {
    const customersRepository = getCustomRepository(CustomersRepository);

    const customer = await customersRepository.findById(id);

    if (!customer) {
      throw new AppError('Customer not found');
    }

    await customersRepository.remove(customer);
  }
}

export default DeleteCustomerService;
