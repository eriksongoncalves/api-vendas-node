import { EntityRepository, Repository } from 'typeorm';

import Customer from '@modules/customers/typeorm/entities/Customer';
import Order from '../entities/Order';

interface IProduct {
  product_id: string;
  price: number;
  quantity: number;
}

interface IRequest {
  customer: Customer;
  products: IProduct[];
}

@EntityRepository(Order)
class OrdersRepository extends Repository<Order> {
  async findById(id: string) {
    const order = this.findOne(id, {
      relations: ['order_products', 'customer']
    });

    return order;
  }

  async createOrder({ customer, products }: IRequest) {
    const order = this.create({
      customer,
      order_products: products
    });

    await this.save(order);

    return order;
  }
}

export default OrdersRepository;
