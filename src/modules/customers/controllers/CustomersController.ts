import { Request, Response } from 'express';

import CreateCustomerService from '../services/CreateCustomerService';
import DeleteCustomerService from '../services/DeleteCustomerService';
import ListCustomerService from '../services/ListCustomerService';
import ShowCustomerService from '../services/ShowCustomerService';
import UpdateCustomerService from '../services/UpdateCustomerService';

class CustomersController {
  async index(_req: Request, res: Response) {
    const service = new ListCustomerService();

    const customers = await service.execute();

    return res.json(customers);
  }

  async show(req: Request, res: Response) {
    const { id } = req.params;

    const service = new ShowCustomerService();

    const customer = await service.execute({ id });

    return res.json(customer);
  }

  async create(req: Request, res: Response) {
    const { name, email } = req.body;

    const service = new CreateCustomerService();

    const customer = await service.execute({ name, email });

    return res.json(customer);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email } = req.body;

    const service = new UpdateCustomerService();

    const customer = await service.execute({
      id,
      name,
      email
    });

    return res.json(customer);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;

    const service = new DeleteCustomerService();

    await service.execute({ id });

    return res.status(204).json([]);
  }
}

export default CustomersController;
