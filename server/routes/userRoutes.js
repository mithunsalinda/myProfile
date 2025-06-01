import express from 'express';
import { getMe, updateMe } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/me', getMe);
userRouter.patch('/update', updateMe);

export default userRouter;