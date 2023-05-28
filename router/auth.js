import express from 'express';
import * as authController from '../controller/auth.js';
import * as validation from '../middleware/validation.js';

const router = express.Router();

router.post('/signup', validation.auth, authController.signup);
router.post('/login', validation.auth, authController.login);
router.post('/logout', authController.logout);

export default router;
