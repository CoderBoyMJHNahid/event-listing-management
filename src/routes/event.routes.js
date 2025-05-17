import { Router } from 'express';
import upload from '../middlewares/multerMeddleware.js';
import {
  deleteEvent,
  fetchAllEvents,
  fetchSingleEvent,
  fetchSummery,
  insertEvent,
  updateEvent,
  uploadImage,
} from '../controllers/event.controller.js';

const eventRoute = Router();

eventRoute
  .route('/upload-event-image')
  .post(upload.single('image'), uploadImage);

eventRoute.route('/').post(insertEvent).get(fetchAllEvents);
eventRoute.route('/summery').get(fetchSummery);
eventRoute
  .route('/:id')
  .put(updateEvent)
  .get(fetchSingleEvent)
  .delete(deleteEvent);



export default eventRoute;
