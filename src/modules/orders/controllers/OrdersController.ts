import { Request, Response } from 'express';
import CreateOrderService from '../services/CreateOrderService';
import ShowOrderService from '../services/ShowOrderService';

class OrdersController {
  async show(request: Request, response: Response) {
    const { id } = request.params;

    const showOrder = new ShowOrderService();

    const order = await showOrder.execute({ id });

    return response.json(order);
  }

  async create(request: Request, response: Response) {
    const { customer_id, products } = request.body;

    const createOrder = new CreateOrderService();

    const order = await createOrder.execute({
      customer_id,
      products
    });

    return response.json(order);
  }
}

export default OrdersController;
