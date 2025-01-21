import express from 'express';
import userController from '../controllers/userController.js';

const userRouter = express.Router();

// User routes
userRouter.post('/users', userController.createUser);
userRouter.get('/users', userController.getUsers);
userRouter.get('/users/:id', userController.getUserById);
userRouter.get('/users/email/:email', userController.getUserByEmail);
userRouter.delete('/users/:id', userController.deleteUser);
userRouter.put('/users/:id', userController.updateUser);

export default userRouter;