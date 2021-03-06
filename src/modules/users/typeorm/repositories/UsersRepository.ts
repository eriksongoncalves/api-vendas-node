import { EntityRepository, Repository } from 'typeorm';
import User from '../entities/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  async findById(id: string) {
    const user = this.findOne({
      where: {
        id
      }
    });

    return user;
  }

  async findByName(name: string) {
    const user = this.findOne({
      where: {
        name
      }
    });

    return user;
  }

  async findByEmail(email: string) {
    const user = this.findOne({
      where: {
        email
      }
    });

    return user;
  }
}

export default UsersRepository;
