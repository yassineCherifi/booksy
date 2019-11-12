import { Router } from 'express';
import { getAll } from '../controllers/bookshelf.controller';

const route = Router();

/**
 * @swagger
 * /bookshelves/:
 *  get:
 *    description: gets all the bookshelves
 *    responses:
 *      '200':
 *        description: Success!
 */
route.get('/', getAll);

export default route;
