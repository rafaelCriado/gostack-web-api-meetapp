import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from './app/middleware/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

const router = new Router();
const upload = multer(multerConfig);

router.post('/users', UserController.store);
router.post('/sessions', SessionController.store);

//Rotas com autenticação
router.use(authMiddleware);
router.put('/users', UserController.uptade);

router.post('/files', upload.single('file'), FileController.store);

export default router;
