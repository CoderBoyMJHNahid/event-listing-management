import { Router } from 'express';
import {
  deleteCategory,
  fetchAllCategory,
  insertCategory,
  updateCategory,
} from '../controllers/category.controller.js';

const catRoute = Router();

catRoute.route('/').get(fetchAllCategory).post(insertCategory);

catRoute.route('/:id').put(updateCategory).delete(deleteCategory);

export default catRoute;
