import { EntityRepository, Repository } from 'typeorm';
import UserToken from '../entities/UserToken';

@EntityRepository(UserToken)
class UserTokensRepository extends Repository<UserToken> {
  async findByToken(token: string) {
    const userToken = this.findOne({
      where: {
        token
      }
    });

    return userToken;
  }

  async findByUser(user_id: string) {
    const userToken = this.findOne({
      where: {
        user_id
      }
    });

    return userToken;
  }

  async generate(user_id: string) {
    const userToken = this.create({
      user_id
    });

    await this.save(userToken);

    return userToken;
  }
}

export default UserTokensRepository;
