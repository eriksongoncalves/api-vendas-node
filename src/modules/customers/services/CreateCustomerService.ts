import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import CustomersRepository from '../typeorm/repositories/CustomersRepository';

interface IRequest {
  name: string;
  email: string;
}

class CreateCustomerService {
  async execute({ name, email }: IRequest) {
    const customersRepository = getCustomRepository(CustomersRepository);
    const customerExists = await customersRepository.findByEmail(email);

    if (customerExists) {
      throw new AppError('Email address already used');
    }

    const customer = customersRepository.create({
      name,
      email
    });

    await customersRepository.save(customer);

    return customer;
  }
}

export default CreateCustomerService;
