import { Router } from 'express';
import upload from '../middlewares/multerMeddleware.js';
import { uploadImage } from '../controllers/event.controller.js';

const eventRoute = Router();

eventRoute
  .route('/upload-event-image')
  .post(upload.single('image'), uploadImage);

export default eventRoute;
