import { Router } from 'express';

import productsRouter from '@modules/products/routes/products.routes';
import usersRouter from '@modules/users/routes/users.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';
import passwordRouter from '@modules/users/routes/password.routes';

const router = Router();

router.use('/products', productsRouter);
router.use('/users', usersRouter);
router.use('/sessions', sessionsRouter);
router.use('/password', passwordRouter);

export default router;
