import { EntityRepository, Repository } from 'typeorm';
import Product from '../entities/Product';

@EntityRepository(Product)
class ProductsRepository extends Repository<Product> {
  async findByName(name: string) {
    const product = this.findOne({
      where: {
        name
      }
    });

    return product;
  }
}

export default ProductsRepository;
