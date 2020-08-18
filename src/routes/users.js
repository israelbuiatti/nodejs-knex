import { Router } from 'express';

import UserController from '../app/controllers/UserController';


const routes = Router();

routes.get('/list', UserController.list);
routes.get('/get', UserController.get);
routes.get('/create', UserController.create);
routes.get('/native', UserController.native);

export default routes;