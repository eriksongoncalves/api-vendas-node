import { getCustomRepository } from 'typeorm';
import ProductRepository from '../typeorm/repositories/ProductsRepository';

class ListProductService {
  async execute() {
    const productsRepository = getCustomRepository(ProductRepository);

    return productsRepository.find();
  }
}

export default ListProductService;
