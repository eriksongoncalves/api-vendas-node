import { EntityRepository, Repository } from 'typeorm';
import Customer from '../entities/Customer';

@EntityRepository(Customer)
class CustomersRepository extends Repository<Customer> {
  async findById(id: string) {
    const customer = this.findOne({
      where: {
        id
      }
    });

    return customer;
  }

  async findByName(name: string) {
    const customer = this.findOne({
      where: {
        name
      }
    });

    return customer;
  }

  async findByEmail(email: string) {
    const customer = this.findOne({
      where: {
        email
      }
    });

    return customer;
  }
}

export default CustomersRepository;
